import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// User roles
export const USER_ROLES = {
    ADMIN: 'admin',
    FARMER: 'farmer',
    DISTRIBUTOR: 'distributor',
    DEALER: 'dealer'
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const verifyToken = async (token, role) => {
        try {
            let endpoint = '/auth/me'; // default for admin
            if (role === 'farmer') endpoint = '/farmer/me';
            else if (role === 'dealer') endpoint = '/dealer/me';
            else if (role === 'distributor') endpoint = '/distributor/me';
    
            console.log('Verifying token for role:', role, 'endpoint:', endpoint);
            
            const response = await axios.get(`${API_URL}${endpoint}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
    
            console.log('Token verification response:', response.data);
    
            if (response.data.success) {
                // Handle different response structures
                const userData = response.data.data.user || response.data.data;
                console.log('Extracted user data:', userData);
                return userData;
            }
    
            return null;
        } catch (error) {
            console.error('Token verification failed:', error);
            console.error('Error response:', error.response?.data);
            return null;
        }
    };
    

    useEffect(() => {
        const initializeAuth = async () => {
            const token = localStorage.getItem('userToken');
            const role = localStorage.getItem('userRole');
            const info = localStorage.getItem('userInfo');
            
            if (token && role) {
                // Set axios default authorization header
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                // Verify token with backend
                const user = await verifyToken(token, role);
                
                if (user) {
                    // Token is valid, update user info with latest data
                    const userInfo = {
                        id: user.id,
                        username: user.username || user.email, // Fallback to email if username not available
                        email: user.email,
                        role: user.role,
                        firstName: user.first_name || user.name?.split(' ')[0] || '',
                        lastName: user.last_name || user.name?.split(' ').slice(1).join(' ') || '',
                        phone: user.phone || user.mobileNo,
                        address: user.address,
                        city: user.city,
                        state: user.state,
                        country: user.country,
                        postalCode: user.postal_code,
                        name: user.name, // Keep original name field
                        mobileNo: user.mobileNo, // Keep original mobileNo field
                        loginTime: new Date().toISOString()
                    };
                    
                    localStorage.setItem('userInfo', JSON.stringify(userInfo));
                    localStorage.setItem('userRole', user.role);
                    
                    setIsAuthenticated(true);
                    setUserRole(role);
                    setUserInfo(userInfo);
                } else {
                    // Token is invalid, clear localStorage
                    localStorage.removeItem('userToken');
                    localStorage.removeItem('userRole');
                    localStorage.removeItem('userInfo');
                    delete axios.defaults.headers.common['Authorization'];
                }
            }
            setIsLoading(false);
        };

        initializeAuth();
    }, []);

    const login = async (username, password, role) => {
        try {
            let endpoint = '/auth/login'; // default for general user (farmer)
            if (role === 'dealer') endpoint = '/dealer/login';
            else if (role === 'distributor') endpoint = '/distributor/login';
            else if (role === 'admin') endpoint = '/auth/login';
            else if (role === 'farmer') endpoint = '/farmer/login';
        
            const response = await axios.post(`${API_URL}${endpoint}`, {
              email: username,
              password,
            });
            console.log("response----",response)

            if (response.data.success) {
                const { user, token } = response.data.data;
                const userInfo = {...user}
                // Store token and user info in localStorage
                localStorage.setItem('userToken', token);
                localStorage.setItem('userRole', user.role);
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                
                // Set axios default authorization header
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                setIsAuthenticated(true);
                setUserRole(role);
                setUserInfo(userInfo);
                
                return { 
                    success: true, 
                    role: user.role,
                    message: response.data.message || 'Login successful'
                };
            } else {
                return { 
                    success: false, 
                    error: response.data.message || 'Login failed' 
                };
            }
        } catch (error) {
            console.error('Login error:', error);
            
            let errorMessage = 'Login failed. Please try again.';
            
            if (error.response) {
                // Backend responded with error status
                errorMessage = error.response.data.message || errorMessage;
            } else if (error.request) {
                // Network error
                errorMessage = 'Network error. Please check your connection.';
            }
            
            return { 
                success: false, 
                error: errorMessage 
            };
        }
    };

    const logout = async () => {
        try {
            // Call logout endpoint if user is authenticated
            if (isAuthenticated) {
                await axios.post(`${API_URL}/auth/logout`);
            }
        } catch (error) {
            console.error('Logout error:', error);
            // Continue with logout even if API call fails
        } finally {
            // Clear localStorage and state
            localStorage.removeItem('userToken');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userInfo');
            
            // Remove axios authorization header
            delete axios.defaults.headers.common['Authorization'];
            
            setIsAuthenticated(false);
            setUserRole(null);
            setUserInfo(null);
        }
    };

    const hasRole = (requiredRole) => {
        return userRole === requiredRole;
    };
    

    const hasAnyRole = (requiredRoles) => {
        
        return requiredRoles.includes(userRole);
    };

    const value = {
        isAuthenticated,
        userRole,
        userInfo,
        isLoading,
        login,
        logout,
        hasRole,
        hasAnyRole,
        USER_ROLES
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

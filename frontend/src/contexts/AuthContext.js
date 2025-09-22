import { createContext, useContext, useState, useEffect } from 'react';

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

    useEffect(() => {
        // Check if user is already logged in (from localStorage)
        const token = localStorage.getItem('userToken');
        const role = localStorage.getItem('userRole');
        const info = localStorage.getItem('userInfo');
        
        if (token && role) {
            setIsAuthenticated(true);
            setUserRole(role);
            setUserInfo(info ? JSON.parse(info) : null);
        }
        setIsLoading(false);
    }, []);

    // Demo credentials for different roles
    const credentials = {
        [USER_ROLES.ADMIN]: { username: 'admin', password: 'admin123' },
        [USER_ROLES.FARMER]: { username: 'farmer', password: 'farmer123' },
        [USER_ROLES.DISTRIBUTOR]: { username: 'distributor', password: 'distributor123' },
        [USER_ROLES.DEALER]: { username: 'dealer', password: 'dealer123' }
    };

    const login = (username, password, role) => {
        // Simple authentication - you can replace this with real API call
        const roleCredentials = credentials[role];
        
        if (roleCredentials && username === roleCredentials.username && password === roleCredentials.password) {
            const userInfo = {
                username,
                role,
                loginTime: new Date().toISOString()
            };
            
            localStorage.setItem('userToken', 'authenticated');
            localStorage.setItem('userRole', role);
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            
            setIsAuthenticated(true);
            setUserRole(role);
            setUserInfo(userInfo);
            return { success: true, role };
        }
        return { success: false, error: 'Invalid credentials' };
    };

    const logout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userInfo');
        setIsAuthenticated(false);
        setUserRole(null);
        setUserInfo(null);
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

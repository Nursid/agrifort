import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import axios from 'axios';
import { API_URL } from '../config';
import { useAuth } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const Registration = () => {
    const { userRole, isAuthenticated } = useAuth();
    const [selectedRole, setSelectedRole] = useState('farmer');
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postal_code: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigae = useNavigate();
    
    // Check if this is accessed by an admin for user management
    const isAdminCreatingUser = isAuthenticated && userRole === 'admin';

    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
        'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
        'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.first_name.trim()) newErrors.first_name = 'Required';
        if (!formData.last_name.trim()) newErrors.last_name = 'Required';
        if (!formData.email.trim()) newErrors.email = 'Required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.phone.trim()) newErrors.phone = 'Required';
        if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Must be 10 digits';
        if (!formData.address.trim()) newErrors.address = 'Required';
        if (!formData.city.trim()) newErrors.city = 'Required';
        if (!formData.state) newErrors.state = 'Required';
        if (!formData.postal_code.trim()) newErrors.postal_code = 'Required';
        if (!/^[0-9]{6}$/.test(formData.postal_code)) newErrors.postal_code = 'Must be 6 digits';
        if (!formData.username.trim()) newErrors.username = 'Required';
        if (formData.username.length < 4) newErrors.username = 'Min 4 characters';
        if (!formData.password) newErrors.password = 'Required';
        if (formData.password.length < 6) newErrors.password = 'Min 6 characters';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            // Add role to formData before sending
            const submitData = {
                ...formData,
                role: selectedRole,
                country: 'India'
            };
            // Remove confirmPassword as it's not needed in backend
            delete submitData.confirmPassword;
            
            // Use different endpoint based on whether admin is creating user
            const endpoint = isAdminCreatingUser ? `${API_URL}/users` : `${API_URL}/auth/register`;
            const response = await axios.post(endpoint, submitData);
            console.log(response.data);
            
            if (response.data.success) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    text: response.data.message || 'Your account has been created successfully.',
                    showConfirmButton: true,
                    confirmButtonText: 'Go to Login',
                    confirmButtonColor: '#16a34a',
                    timer: 3000,
                    timerProgressBar: true
                }).then((result) => {
                    if (result.isConfirmed || result.isDismissed) {
                        if (isAdminCreatingUser) {
                            history.push('/admin/manage-users');
                        } else {
                            history.push('/admin/login');
                        }
                    }
                });
            } else {
                await Swal.fire({
                    icon: 'warning',
                    title: 'Registration Failed',
                    text: response.data.message || 'Something went wrong. Please try again.',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#dc2626'
                });
            }
        } catch (error) {
            console.error('Registration error:', error);
            
            let errorMessage = 'Something went wrong. Please try again.';
            let errorTitle = 'Registration Failed';
            
            if (error.response) {
                // Backend responded with error status
                const errorData = error.response.data;
                errorMessage = errorData.message || errorData.error || errorMessage;
                errorTitle = errorData.title || errorTitle;
            } else if (error.request) {
                // Network error
                errorMessage = 'Network error. Please check your internet connection.';
                errorTitle = 'Connection Error';
            }
            
            await Swal.fire({
                icon: 'error',
                title: errorTitle,
                text: errorMessage,
                confirmButtonText: 'OK',
                confirmButtonColor: '#dc2626'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <div className="max-w-3xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {isAdminCreatingUser ? 'Add New User' : 'Registration'}
                    </h1>
                    <p className="text-gray-600 text-sm mt-1">
                        {isAdminCreatingUser ? 'Create a new user account' : 'Create your AgriFort account'}
                    </p>
                    {isAdminCreatingUser && (
                        <div className="mt-2">
                            <Link 
                                to="/admin/manage-farmers" 
                                className="text-green-600 hover:text-green-700 text-sm font-medium"
                            >
                                ← Back to Manage Farmers
                            </Link>
                        </div>
                    )}
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        
                        {/* Role Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Register As *
                            </label>
                            <select
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                                <option value="farmer">🌾 Farmer</option>
                                <option value="dealer">🏪 Dealer</option>
                                <option value="distributor">🚛 Distributor</option>
                            </select>
                        </div>

                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                        errors.first_name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="First name"
                                />
                                {errors.first_name && <p className="text-red-500 text-xs mt-0.5">{errors.first_name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                        errors.last_name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Last name"
                                />
                                {errors.last_name && <p className="text-red-500 text-xs mt-0.5">{errors.last_name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="email@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                        errors.phone ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="10-digit number"
                                    maxLength="10"
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-0.5">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                        errors.city ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="City/Village"
                                />
                                {errors.city && <p className="text-red-500 text-xs mt-0.5">{errors.city}</p>}
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                    errors.address ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Street address"
                            />
                            {errors.address && <p className="text-red-500 text-xs mt-0.5">{errors.address}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                                <select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                        errors.state ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select State</option>
                                    {indianStates.map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                                {errors.state && <p className="text-red-500 text-xs mt-0.5">{errors.state}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label>
                                <input
                                    type="text"
                                    name="postal_code"
                                    value={formData.postal_code}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                        errors.postal_code ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="6-digit postal code"
                                    maxLength="6"
                                />
                                {errors.postal_code && <p className="text-red-500 text-xs mt-0.5">{errors.postal_code}</p>}
                            </div>
                        </div>


                        {/* Login Credentials */}
                        <div className="border-t pt-4">
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">Login Credentials</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Username *</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                            errors.username ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Username"
                                    />
                                    {errors.username && <p className="text-red-500 text-xs mt-0.5">{errors.username}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                            errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Password"
                                    />
                                    {errors.password && <p className="text-red-500 text-xs mt-0.5">{errors.password}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Re-enter"
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-0.5">{errors.confirmPassword}</p>}
                                </div>
                            </div>
                        </div>


                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 transition-all"
                        >
                            {isSubmitting ? (isAdminCreatingUser ? 'Creating...' : 'Registering...') : (isAdminCreatingUser ? 'Create User' : 'Register')}
                        </button>

                        {/* Login Link - only show for non-admin users */}
                        {!isAdminCreatingUser && (
                            <div className="text-center text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link to="/admin/login" className="text-green-600 font-semibold hover:text-green-700">
                                    Login
                                </Link>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Registration;

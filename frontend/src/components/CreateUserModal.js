import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import Swal from 'sweetalert2';

const CreateUserModal = ({ user, onClose, onSuccess }) => {
    const isEditing = !!user;
    
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
        confirmPassword: '',
        role: 'farmer',
        is_active: true
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
        'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
        'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];

    // Populate form data when editing
    useEffect(() => {
        if (user) {
            setFormData({
                first_name: user.first_name || '',
                last_name: user.last_name || '',
                email: user.email || '',
                phone: user.phone || '',
                address: user.address || '',
                city: user.city || '',
                state: user.state || '',
                postal_code: user.postal_code || '',
                username: user.username || '',
                password: '',
                confirmPassword: '',
                role: user.role || 'farmer',
                is_active: user.is_active !== undefined ? user.is_active : true
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Clear error when user starts typing
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
        
        // Password validation only for new users or when editing and password is provided
        if (!isEditing || formData.password) {
            if (!formData.password) newErrors.password = 'Required';
            if (formData.password.length < 6) newErrors.password = 'Min 6 characters';
            if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            let response;
            
            if (isEditing) {
                // Update existing user
                const updateData = { ...formData };
                delete updateData.confirmPassword;
                
                // Only include password if it's provided
                if (!updateData.password) {
                    delete updateData.password;
                }
                
                response = await axios.put(`${API_URL}/users/${user.id}`, updateData);
            } else {
                // Create new user
                const submitData = { ...formData };
                delete submitData.confirmPassword;
                delete submitData.is_active; // is_active is handled by backend for new users
                
                response = await axios.post(`${API_URL}/users`, submitData);
            }
            
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: response.data.message || `User ${isEditing ? 'updated' : 'created'} successfully.`,
                    confirmButtonColor: '#16a34a'
                });
                onSuccess();
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Warning',
                    text: response.data.message || 'Something went wrong. Please try again.',
                    confirmButtonColor: '#dc2626'
                });
            }
        } catch (error) {
            console.error(`${isEditing ? 'Update' : 'Create'} user error:`, error);
            
            let errorMessage = 'Something went wrong. Please try again.';
            let errorTitle = `${isEditing ? 'Update' : 'Create'} Failed`;
            
            if (error.response) {
                const errorData = error.response.data;
                errorMessage = errorData.message || errorData.error || errorMessage;
                errorTitle = errorData.title || errorTitle;
            } else if (error.request) {
                errorMessage = 'Network error. Please check your internet connection.';
                errorTitle = 'Connection Error';
            }
            
            Swal.fire({
                icon: 'error',
                title: errorTitle,
                text: errorMessage,
                confirmButtonColor: '#dc2626'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold text-gray-900">
                        {isEditing ? 'Edit User' : 'Add New User'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Role Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Role *
                        </label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            <option value="farmer">🌾 Farmer</option>
                            <option value="dealer">🏪 Dealer</option>
                            <option value="distributor">🚛 Distributor</option>
                        </select>
                    </div>

                    {/* Status (only for editing) */}
                    {isEditing && (
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="is_active"
                                checked={formData.is_active}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 block text-sm text-gray-700">
                                Active User
                            </label>
                        </div>
                    )}

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    {/* Login Credentials */}
                    <div className="border-t pt-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Login Credentials</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                            {!isEditing && (
                                <>
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
                                            placeholder="Re-enter password"
                                        />
                                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-0.5">{errors.confirmPassword}</p>}
                                    </div>
                                </>
                            )}

                            {isEditing && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password (leave blank to keep current)</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                                errors.password ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="New password"
                                        />
                                        {errors.password && <p className="text-red-500 text-xs mt-0.5">{errors.password}</p>}
                                    </div>

                                    {formData.password && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
                                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                                placeholder="Re-enter new password"
                                            />
                                            {errors.confirmPassword && <p className="text-red-500 text-xs mt-0.5">{errors.confirmPassword}</p>}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex justify-end space-x-3 pt-4 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors"
                        >
                            {isSubmitting ? (isEditing ? 'Updating...' : 'Creating...') : (isEditing ? 'Update User' : 'Create User')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUserModal;

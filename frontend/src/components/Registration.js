import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Navbar from '../pages/Navbar';

const Registration = () => {
    const [selectedRole, setSelectedRole] = useState('farmer');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        businessName: '',
        gstNumber: '',
        farmSize: '',
        cropTypes: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const history = useHistory();

    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
        'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
        'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];

    const cropTypes = [
        'Rice', 'Wheat', 'Cotton', 'Sugarcane', 'Maize', 'Pulses',
        'Vegetables', 'Fruits', 'Spices', 'Other'
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

        if (!formData.fullName.trim()) newErrors.fullName = 'Required';
        if (!formData.email.trim()) newErrors.email = 'Required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.phone.trim()) newErrors.phone = 'Required';
        if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Must be 10 digits';
        if (!formData.address.trim()) newErrors.address = 'Required';
        if (!formData.city.trim()) newErrors.city = 'Required';
        if (!formData.state) newErrors.state = 'Required';
        if (!formData.pincode.trim()) newErrors.pincode = 'Required';
        if (!/^[0-9]{6}$/.test(formData.pincode)) newErrors.pincode = 'Must be 6 digits';

        if (selectedRole === 'dealer' || selectedRole === 'distributor') {
            if (!formData.businessName.trim()) newErrors.businessName = 'Required';
            if (!formData.gstNumber.trim()) newErrors.gstNumber = 'Required';
        }

        if (selectedRole === 'farmer') {
            if (!formData.farmSize.trim()) newErrors.farmSize = 'Required';
            if (!formData.cropTypes.trim()) newErrors.cropTypes = 'Required';
        }

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

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            
            setTimeout(() => {
                history.push('/admin/login');
            }, 2000);
        }, 1500);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <div className="max-w-3xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Registration</h1>
                    <p className="text-gray-600 text-sm mt-1">Create your AgriFort account</p>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Full name"
                                />
                                {errors.fullName && <p className="text-red-500 text-xs mt-0.5">{errors.fullName}</p>}
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                        errors.pincode ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="6-digit pincode"
                                    maxLength="6"
                                />
                                {errors.pincode && <p className="text-red-500 text-xs mt-0.5">{errors.pincode}</p>}
                            </div>
                        </div>

                        {/* Business Information (Dealer/Distributor) */}
                        {(selectedRole === 'dealer' || selectedRole === 'distributor') && (
                            <div className="border-t pt-4">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">Business Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                                        <input
                                            type="text"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={handleInputChange}
                                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                                errors.businessName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="Business/Shop name"
                                        />
                                        {errors.businessName && <p className="text-red-500 text-xs mt-0.5">{errors.businessName}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
                                        <input
                                            type="text"
                                            name="gstNumber"
                                            value={formData.gstNumber}
                                            onChange={handleInputChange}
                                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                                errors.gstNumber ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="GST Number"
                                        />
                                        {errors.gstNumber && <p className="text-red-500 text-xs mt-0.5">{errors.gstNumber}</p>}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Farm Information (Farmer) */}
                        {selectedRole === 'farmer' && (
                            <div className="border-t pt-4">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">Farm Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size (acres) *</label>
                                        <input
                                            type="number"
                                            name="farmSize"
                                            value={formData.farmSize}
                                            onChange={handleInputChange}
                                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                                errors.farmSize ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="Total area"
                                            min="0"
                                            step="0.1"
                                        />
                                        {errors.farmSize && <p className="text-red-500 text-xs mt-0.5">{errors.farmSize}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Primary Crops *</label>
                                        <select
                                            name="cropTypes"
                                            value={formData.cropTypes}
                                            onChange={handleInputChange}
                                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                                                errors.cropTypes ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        >
                                            <option value="">Select Crop</option>
                                            {cropTypes.map(crop => (
                                                <option key={crop} value={crop}>{crop}</option>
                                            ))}
                                        </select>
                                        {errors.cropTypes && <p className="text-red-500 text-xs mt-0.5">{errors.cropTypes}</p>}
                                    </div>
                                </div>
                            </div>
                        )}

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

                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded-lg text-sm">
                                ✅ Registration successful! Redirecting to login...
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 transition-all"
                        >
                            {isSubmitting ? 'Registering...' : 'Register'}
                        </button>

                        {/* Login Link */}
                        <div className="text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/admin/login" className="text-green-600 font-semibold hover:text-green-700">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Registration;

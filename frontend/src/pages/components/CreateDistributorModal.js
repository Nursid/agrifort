import React, {useState, useEffect} from "react";

const CreateDistributorModal = ({ user, onClose, onSuccess }) => {
    const isEditing = !!user;
  
    const [formData, setFormData] = useState({
      first_name: '', last_name: '', email: '', phone: '',
      address: '', city: '', state: '', postal_code: '',
      username: '', password: '', confirmPassword: '',
      role: 'farmer', is_active: true,
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
  
    useEffect(() => {
      if (user) {
        setFormData({
          first_name: user.first_name || '', last_name: user.last_name || '',
          email: user.email || '', phone: user.phone || '',
          address: user.address || '', city: user.city || '',
          state: user.state || '', postal_code: user.postal_code || '',
          username: user.username || '', password: '', confirmPassword: '',
          role: user.role || 'farmer',
          is_active: user.is_active !== undefined ? user.is_active : true,
        });
      } else {
          // Reset form when adding a new user
          setFormData({
              first_name: '', last_name: '', email: '', phone: '',
              address: '', city: '', state: '', postal_code: '',
              username: '', password: '', confirmPassword: '',
              role: 'farmer', is_active: true,
          });
      }
    }, [user]);
  
    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.first_name.trim()) newErrors.first_name = 'Required';
      if (!formData.last_name.trim()) newErrors.last_name = 'Required';
      if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Must be 10 digits';
      if (!formData.address.trim()) newErrors.address = 'Required';
      if (!formData.city.trim()) newErrors.city = 'Required';
      if (!formData.state) newErrors.state = 'Required';
      if (!/^[0-9]{6}$/.test(formData.postal_code)) newErrors.postal_code = 'Must be 6 digits';
      if (formData.username.length < 4) newErrors.username = 'Min 4 characters';
  
      if (!isEditing || formData.password) {
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
      // --- MOCK API CALL ---
      // In a real app, you would use axios here.
      // For demonstration, we'll simulate a delay.
      console.log("Submitting data:", formData);
      setTimeout(() => {
          setIsSubmitting(false);
          // alert(`User ${isEditing ? 'updated' : 'created'} successfully! (Mock)`);
          onSuccess(); // This calls the function passed from App to close the modal
      }, 1500);
      
      // Your original axios logic would go here.
      // try {
      //   ... your axios.post or axios.put logic ...
      // } catch (error) {
      //   ... your Swal error handling ...
      // } finally {
      //   setIsSubmitting(false);
      // }
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {isEditing && (
          <div className="flex items-center">
            <input id="is_active_checkbox" type="checkbox" name="is_active" checked={formData.is_active} onChange={handleInputChange} className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"/>
            <label htmlFor="is_active_checkbox" className="ml-2 block text-sm text-gray-700">Active User</label>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.first_name ? 'border-red-500' : 'border-gray-300'}`} placeholder="First name"/>
            {errors.first_name && <p className="text-red-500 text-xs mt-0.5">{errors.first_name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.last_name ? 'border-red-500' : 'border-gray-300'}`} placeholder="Last name"/>
            {errors.last_name && <p className="text-red-500 text-xs mt-0.5">{errors.last_name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="email@example.com"/>
            {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
          </div>
          <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} placeholder="10-digit number" maxLength="10"/>
              {errors.phone && <p className="text-red-500 text-xs mt-0.5">{errors.phone}</p>}
          </div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`} placeholder="Street address"/>
                  {errors.address && <p className="text-red-500 text-xs mt-0.5">{errors.address}</p>}
              </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.city ? 'border-red-500' : 'border-gray-300'}`} placeholder="City/Village"/>
                  {errors.city && <p className="text-red-500 text-xs mt-0.5">{errors.city}</p>}
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                  <select name="state" value={formData.state} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.state ? 'border-red-500' : 'border-gray-300'}`}>
                      <option value="">Select State</option>
                      {indianStates.map(state => (<option key={state} value={state}>{state}</option>))}
                  </select>
                  {errors.state && <p className="text-red-500 text-xs mt-0.5">{errors.state}</p>}
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label>
                  <input type="text" name="postal_code" value={formData.postal_code} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.postal_code ? 'border-red-500' : 'border-gray-300'}`} placeholder="6-digit postal code" maxLength="6"/>
                  {errors.postal_code && <p className="text-red-500 text-xs mt-0.5">{errors.postal_code}</p>}
              </div>
          </div>
  
        <div className="border-t pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Login Credentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Username *</label>
                  <input type="text" name="username" value={formData.username} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.username ? 'border-red-500' : 'border-gray-300'}`} placeholder="Username"/>
                  {errors.username && <p className="text-red-500 text-xs mt-0.5">{errors.username}</p>}
              </div>
              {isEditing && <div></div>}
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{isEditing ? 'New Password (Optional)' : 'Password *'}</label>
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`} placeholder="Password"/>
                  {errors.password && <p className="text-red-500 text-xs mt-0.5">{errors.password}</p>}
              </div>
              {(formData.password || !isEditing) && (
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`} placeholder="Re-enter password"/>
                      {errors.confirmPassword && <p className="text-red-500 text-xs mt-0.5">{errors.confirmPassword}</p>}
                  </div>
              )}
          </div>
        </div>
        <div className="flex justify-end space-x-3 pt-4 border-t">
          <button type="button" onClick={onClose} className="px-5 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition-colors">Cancel</button>
          <button type="submit" disabled={isSubmitting} className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors">
            {isSubmitting ? 'Saving...' : isEditing ? 'Update Distributor' : 'Create Distributor'}
          </button>
        </div>
      </form>
    );
  };

export default CreateDistributorModal
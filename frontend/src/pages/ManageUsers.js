import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import Swal from 'sweetalert2';
import CreateUserModal from '../components/CreateUserModal';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const itemsPerPage = 10;

    // Fetch users from API
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const params = {
                page: currentPage,
                limit: itemsPerPage,
                search: searchTerm || undefined,
                role: roleFilter !== 'all' ? roleFilter : undefined
            };

            const response = await axios.get(`${API_URL}/farmer/getall`, { params });
            if (response.data.success) {
                setUsers(response.data.data);
                setTotalPages(response.data.data.pagination.total_pages);
                setTotalCount(response.data.data.pagination.total_count);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to fetch users',
                confirmButtonColor: '#dc2626'
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [currentPage, searchTerm, roleFilter]);

    // Handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page
    };

    // Handle role filter
    const handleRoleFilter = (e) => {
        setRoleFilter(e.target.value);
        setCurrentPage(1); // Reset to first page
    };

    // Handle delete user
    const handleDeleteUser = async (userId, userName) => {
        const result = await Swal.fire({
            title: 'Delete User',
            text: `Are you sure you want to delete ${userName}? This action cannot be undone.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
            try {
                const response = await axios.delete(`${API_URL}/users/${userId}`);
                
                if (response.data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted!',
                        text: 'User has been deleted successfully.',
                        confirmButtonColor: '#16a34a'
                    });
                    fetchUsers(); // Refresh the list
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.response?.data?.message || 'Failed to delete user',
                    confirmButtonColor: '#dc2626'
                });
            }
        }
    };

    // Handle toggle user status
    const handleToggleStatus = async (userId, currentStatus, userName) => {
        try {
            const response = await axios.put(`${API_URL}/users/${userId}`, {
                is_active: !currentStatus
            });

            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `${userName} has been ${!currentStatus ? 'activated' : 'deactivated'}`,
                    confirmButtonColor: '#16a34a'
                });
                fetchUsers(); // Refresh the list
            }
        } catch (error) {
            console.error('Error updating user status:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data?.message || 'Failed to update user status',
                confirmButtonColor: '#dc2626'
            });
        }
    };

    // Handle edit user
    const handleEditUser = (user) => {
        setEditingUser(user);
        setShowCreateModal(true);
    };

    // Handle create user success
    const handleCreateSuccess = () => {
        setShowCreateModal(false);
        setEditingUser(null);
        fetchUsers();
    };

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Get role badge color
    const getRoleBadgeColor = (role) => {
        const colors = {
            admin: 'bg-red-100 text-red-800',
            farmer: 'bg-green-100 text-green-800',
            distributor: 'bg-blue-100 text-blue-800',
            dealer: 'bg-purple-100 text-purple-800'
        };
        return colors[role] || 'bg-gray-100 text-gray-800';
    };

    // Get status badge color
    const getStatusBadgeColor = (isActive) => {
        return isActive 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800';
    };

    console.log("---",users)

    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Manage Farmers</h1>
                        <p className="text-gray-600 mt-1">Manage farmers</p>
                    </div>
                    <div className="flex gap-2">
                        <a
                            onClick={() => setShowCreateModal(true)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Farmer
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            {/* <div className="row mb-6">
                <div className="col-md-3 col-sm-6 col-12 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-2xl font-bold text-gray-900">{totalCount}</div>
                        <div className="text-sm text-gray-600">Total Users</div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-2xl font-bold text-green-600">
                            {users.filter(user => user.role === 'farmer').length}
                        </div>
                        <div className="text-sm text-gray-600">Farmers</div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-2xl font-bold text-blue-600">
                            {users.filter(user => user.role === 'distributor').length}
                        </div>
                        <div className="text-sm text-gray-600">Distributors</div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="text-2xl font-bold text-purple-600">
                            {users.filter(user => user.role === 'dealer').length}
                        </div>
                        <div className="text-sm text-gray-600">Dealers</div>
                    </div>
                </div>
            </div> */}

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                    </div>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            User
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Contact
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Joined
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user) => (
                                        user.role === 'farmer' && (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {user.first_name} {user.last_name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        @{user.username}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{user.email}</div>
                                                <div className="text-sm text-gray-500">{user.phone}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleBadgeColor(user.role)}`}>
                                                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(user.is_active)}`}>
                                                    {user.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {formatDate(user.created_at)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleEditUser(user)}
                                                        className="text-blue-600 hover:text-blue-900"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleToggleStatus(user.id, user.is_active, `${user.first_name} ${user.last_name}`)}
                                                        className={`${user.is_active ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}`}
                                                    >
                                                        {user.is_active ? 'Deactivate' : 'Activate'}
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id, `${user.first_name} ${user.last_name}`)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                                <div className="flex-1 flex justify-between sm:hidden">
                                    <button
                                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                        disabled={currentPage === totalPages}
                                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                    >
                                        Next
                                    </button>
                                </div>
                                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                                            <span className="font-medium">
                                                {Math.min(currentPage * itemsPerPage, totalCount)}
                                            </span>{' '}
                                            of <span className="font-medium">{totalCount}</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                            <button
                                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                                disabled={currentPage === 1}
                                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                            >
                                                Previous
                                            </button>
                                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                                const pageNum = Math.max(1, currentPage - 2) + i;
                                                if (pageNum > totalPages) return null;
                                                return (
                                                    <button
                                                        key={pageNum}
                                                        onClick={() => setCurrentPage(pageNum)}
                                                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                            pageNum === currentPage
                                                                ? 'z-10 bg-green-50 border-green-500 text-green-600'
                                                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        {pageNum}
                                                    </button>
                                                );
                                            })}
                                            <button
                                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                                disabled={currentPage === totalPages}
                                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                            >
                                                Next
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Create/Edit User Modal */}
            {showCreateModal && (
                <CreateUserModal
                    user={editingUser}
                    onClose={() => {
                        setShowCreateModal(false);
                        setEditingUser(null);
                    }}
                    onSuccess={handleCreateSuccess}
                />
            )}
        </div>
    );
};

export default ManageUsers;

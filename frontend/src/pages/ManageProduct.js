import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import Swal from 'sweetalert2';
import CreateProductModal from 'components/Product/CreateProductModal';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const itemsPerPage = 10;

    // Fetch products from API
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const params = {
                page: currentPage,
                limit: itemsPerPage,
                search: searchTerm || undefined,
            };

            const response = await axios.get(`${API_URL}/product/getall`, { params });
            if (response.data?.success) {
                const { data, pagination } = response.data;
                setProducts(data || []);
                setTotalPages(pagination?.total_pages || 1);
                setTotalCount(pagination?.total_count || 0);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to fetch products',
                confirmButtonColor: '#dc2626'
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage, searchTerm]);

    // Handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    // Delete product
    const handleDeleteProduct = async (productId, productName) => {
        const result = await Swal.fire({
            title: 'Delete Product',
            text: `Are you sure you want to delete ${productName}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
            try {
                const response = await axios.delete(`${API_URL}/product/${productId}`);
                if (response.data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted!',
                        text: 'Product deleted successfully.',
                        confirmButtonColor: '#16a34a'
                    });
                    fetchProducts();
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.response?.data?.message || 'Failed to delete product',
                    confirmButtonColor: '#dc2626'
                });
            }
        }
    };

    // Edit product
    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setShowCreateModal(true);
    };

    // On success (create/edit)
    const handleCreateSuccess = () => {
        setShowCreateModal(false);
        setEditingProduct(null);
        fetchProducts();
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage Products</h1>
                    <p className="text-gray-600 mt-1">Add, edit, or remove products</p>
                </div>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                    + Add Product
                </button>
            </div>

            {/* Search */}
            <div className="mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search by product name..."
                    className="w-full sm:w-1/3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            {/* Products Table */}
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{product.categoryDetails.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">₹{product.price}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {formatDate(product.createdAt)}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleEditProduct(product)}
                                                        className="text-blue-600 hover:text-blue-900"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteProduct(product.id, product.name)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>

            {/* Create/Edit Product Modal */}
            {showCreateModal && (
                <CreateProductModal
                    product={editingProduct}
                    onClose={() => {
                        setShowCreateModal(false);
                        setEditingProduct(null);
                    }}
                    onSuccess={handleCreateSuccess}
                />
            )}
        </div>
    );
};

export default ManageProducts;

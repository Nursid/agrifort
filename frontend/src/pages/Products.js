import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Navbar from './Navbar';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('Bio-Stimulants');
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Product categories and data
    const categories = [
        'Bio-Stimulants',
        'Fungicides', 
        'Insecticides',
        'Herbicides',
        'Fertilizers',
        'Growth Promoters'
    ];

    const products = {
        'Bio-Stimulants': [
            {
                id: 1,
                name: 'AgriGrow Plus',
                image: '/images/products/bio-stimulant-1.jpg',
                description: 'Advanced bio-stimulant for enhanced crop growth',
                crops: 'Rice, Wheat, Cotton, Vegetables',
                dosage: '2-3 ml per liter of water',
                benefits: [
                    'Promotes root development and nutrient uptake',
                    'Enhances flowering and fruit setting',
                    'Improves stress tolerance',
                    'Increases yield by 15-25%'
                ]
            },
            {
                id: 2,
                name: 'CropBoost Pro',
                image: '/images/products/bio-stimulant-2.jpg',
                description: 'Premium bio-stimulant with seaweed extracts',
                crops: 'Tomato, Chilli, Brinjal, Okra',
                dosage: '1.5-2 ml per liter of water',
                benefits: [
                    'Natural growth hormones',
                    'Better fruit quality and size',
                    'Disease resistance',
                    'Early maturity'
                ]
            }
        ],
        'Fungicides': [
            {
                id: 3,
                name: 'FungiShield',
                image: '/images/products/fungicide-1.jpg',
                description: 'Broad spectrum fungicide for crop protection',
                crops: 'Rice, Wheat, Maize, Sugarcane',
                dosage: '2-3 gm per liter of water',
                benefits: [
                    'Controls fungal diseases effectively',
                    'Systemic and contact action',
                    'Rainfast after 2 hours',
                    'Safe for beneficial insects'
                ]
            }
        ],
        'Insecticides': [
            {
                id: 4,
                name: 'PestGuard',
                image: '/images/products/insecticide-1.jpg',
                description: 'Effective insecticide for pest control',
                crops: 'Cotton, Vegetables, Fruits',
                dosage: '1-2 ml per liter of water',
                benefits: [
                    'Controls sucking and chewing pests',
                    'Quick knockdown effect',
                    'Residual activity up to 15 days',
                    'Compatible with other pesticides'
                ]
            }
        ],
        'Herbicides': [
            {
                id: 5,
                name: 'WeedClear',
                image: '/images/products/herbicide-1.jpg',
                description: 'Selective herbicide for weed control',
                crops: 'Rice, Wheat, Maize',
                dosage: '500-750 ml per acre',
                benefits: [
                    'Controls broadleaf and grassy weeds',
                    'Pre and post emergence activity',
                    'Safe for crops',
                    'Long lasting control'
                ]
            }
        ],
        'Fertilizers': [
            {
                id: 6,
                name: 'NutriMax',
                image: '/images/products/fertilizer-1.jpg',
                description: 'Balanced NPK fertilizer with micronutrients',
                crops: 'All crops',
                dosage: '50-100 kg per acre',
                benefits: [
                    'Complete nutrition package',
                    'Slow release formulation',
                    'Improves soil health',
                    'Increases crop yield'
                ]
            }
        ],
        'Growth Promoters': [
            {
                id: 7,
                name: 'GrowthMax',
                image: '/images/products/growth-promoter-1.jpg',
                description: 'Plant growth regulator for better yields',
                crops: 'Cotton, Sugarcane, Vegetables',
                dosage: '1-2 ml per liter of water',
                benefits: [
                    'Promotes vegetative growth',
                    'Increases fruit size',
                    'Improves quality parameters',
                    'Stress management'
                ]
            }
        ]
    };

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Navbar */}
           <Navbar />

            {/* Main Content */}
            <div className="pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Our Products
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Discover our comprehensive range of agricultural solutions designed to enhance crop yield and quality.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="mb-12">
                        <div className="flex flex-wrap justify-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
                            {categories.map((category, index) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                                        activeCategory === category
                                            ? 'bg-green-500 text-white shadow-lg'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
                                    }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Title */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center mb-4">
                            <div className="flex-1 h-0.5 bg-green-500"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mx-6 animate-pulse">
                                {activeCategory.toUpperCase()}
                            </h2>
                            <div className="flex-1 h-0.5 bg-green-500"></div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products[activeCategory]?.map((product, index) => (
                            <div
                                key={product.id}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                                onClick={() => openModal(product)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Product Image */}
                                <div className="relative overflow-hidden rounded-t-xl">
                                    <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 flex items-center justify-center">
                                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-4xl">🌱</span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex flex-col lg:flex-row">
                            {/* Product Image */}
                            <div className="lg:w-1/2 p-8">
                                <div className="w-full h-80 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg flex items-center justify-center">
                                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-6xl">🌱</span>
                                    </div>
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="lg:w-1/2 p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {selectedProduct.name}
                                    </h2>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {/* Crops */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            CROPS IT IS BEST SUITABLE FOR:
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {selectedProduct.crops}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            USE / APPLICATION:
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {selectedProduct.description}
                                        </p>
                                    </div>

                                    {/* Dosage */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            DOSAGE:
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {selectedProduct.dosage}
                                        </p>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            BENEFITS:
                                        </h3>
                                        <ul className="space-y-2">
                                            {selectedProduct.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
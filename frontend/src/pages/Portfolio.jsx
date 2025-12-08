import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Bio-Stimulants', 'Crop Protection', 'Nutrients', 'Seed Treatments', 'Plant Growth Regulators'];

    const products = [
        {
            id: 1,
            name: 'Hortis-SP',
            category: 'Bio-Stimulants',
            image: 'https://images.pexels.com/photos/4507991/pexels-photo-4507991.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Advanced bio-stimulant for enhanced crop productivity',
            impact: '35% yield increase',
            features: ['Root Development', 'Stress Tolerance', 'Nutrient Uptake']
        },
        {
            id: 2,
            name: 'GreenGuard Pro',
            category: 'Crop Protection',
            image: 'https://images.pexels.com/photos/4507816/pexels-photo-4507816.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Comprehensive crop protection solution',
            impact: '90% disease control',
            features: ['Fungal Control', 'Bacterial Management', 'Pest Resistance']
        },
        {
            id: 3,
            name: 'NutriBalance',
            category: 'Nutrients',
            image: 'https://images.pexels.com/photos/5632681/pexels-photo-5632681.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Balanced nutrient complex for optimal growth',
            impact: '40% better nutrient absorption',
            features: ['NPK Balanced', 'Micronutrients', 'Chelated Form']
        },
        {
            id: 4,
            name: 'SeedVitality',
            category: 'Seed Treatments',
            image: 'https://images.pexels.com/photos/5688720/pexels-photo-5688720.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Premium seed treatment for enhanced germination',
            impact: '95% germination rate',
            features: ['Disease Protection', 'Vigor Enhancement', 'Early Emergence']
        },
        {
            id: 5,
            name: 'GrowthBoost',
            category: 'Plant Growth Regulators',
            image: 'https://images.pexels.com/photos/5688715/pexels-photo-5688715.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Scientifically formulated growth regulator',
            impact: '45% biomass increase',
            features: ['Cell Division', 'Hormone Balance', 'Yield Optimization']
        },
        {
            id: 6,
            name: 'AquaVive',
            category: 'Bio-Stimulants',
            image: 'https://images.pexels.com/photos/4507987/pexels-photo-4507987.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Water management and stress mitigation solution',
            impact: '50% water efficiency',
            features: ['Drought Resistance', 'Water Retention', 'Soil Conditioning']
        },
        {
            id: 7,
            name: 'ShieldMax',
            category: 'Crop Protection',
            image: 'https://images.pexels.com/photos/5632680/pexels-photo-5632680.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Multi-spectrum protection against pests and diseases',
            impact: '85% pest reduction',
            features: ['Broad Spectrum', 'Long Lasting', 'Eco-Friendly']
        },
        {
            id: 8,
            name: 'MicroMix Pro',
            category: 'Nutrients',
            image: 'https://images.pexels.com/photos/5688721/pexels-photo-5688721.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Essential micronutrient formulation',
            impact: '30% quality improvement',
            features: ['Iron', 'Zinc', 'Boron', 'Manganese']
        }
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section 
                className="relative py-32 bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(22, 163, 74, 0.85) 0%, rgba(5, 150, 105, 0.85) 100%), url(https://images.pexels.com/photos/4507991/pexels-photo-4507991.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Animated Background Elements */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-white">
                            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
                                ✨ Comprehensive Agricultural Solutions
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Our Portfolio
                            </h1>
                            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
                                Discover our innovative range of bio-stimulants, crop protection solutions, and nutrient formulations designed to revolutionize farming practices and maximize your yields.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-white text-green-600 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                                    Explore Products
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Right - Image with Stats Cards */}
                        <div className="hidden lg:block relative">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/4507987/pexels-photo-4507987.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Agriculture"
                                    className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-green-600/40 to-transparent"></div>
                            </div>

                            {/* Floating Stats Cards */}
                            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl backdrop-blur-md max-w-xs">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl">🌾</div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-green-600">500+</h4>
                                        <p className="text-gray-600 text-sm font-semibold">Products</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl backdrop-blur-md">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl">🌍</div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-green-600">50+</h4>
                                        <p className="text-gray-600 text-sm font-semibold">Countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Find Your Solution</h2>
                        <p className="text-gray-600">Search and filter through our comprehensive product range</p>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-10">
                        <div className="relative max-w-2xl">
                            <Search className="absolute left-5 top-4 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products by name or description..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-4 py-4 rounded-xl border-2 border-gray-300 focus:border-green-600 focus:outline-none text-base shadow-sm hover:border-gray-400 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">Filter by Category</h3>
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm ${
                                        activeCategory === category
                                            ? 'bg-green-600 text-white shadow-lg scale-105'
                                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-600 hover:text-green-600'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-56 overflow-hidden bg-gray-200">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                            {product.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {product.description}
                                        </p>

                                        {/* Impact Badge */}
                                        <div className="bg-blue-50 border-l-4 border-blue-600 px-3 py-2 mb-4 rounded">
                                            <p className="text-xs font-bold text-blue-900">
                                                📈 {product.impact}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div className="mb-4">
                                            <p className="text-xs font-bold text-gray-700 mb-2">KEY FEATURES:</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {product.features.map((feature, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs bg-green-100 text-green-800 px-2.5 py-1 rounded-full font-medium"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm">
                                            Learn More
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-600 mb-4">No products found matching your search.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setActiveCategory('All');
                                }}
                                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        Portfolio Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                            <div className="text-5xl font-bold text-green-600 mb-3">500+</div>
                            <p className="text-gray-600 font-semibold">Products Developed</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                            <div className="text-5xl font-bold text-green-600 mb-3">50+</div>
                            <p className="text-gray-600 font-semibold">Countries Served</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                            <div className="text-5xl font-bold text-green-600 mb-3">10K+</div>
                            <p className="text-gray-600 font-semibold">Satisfied Farmers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Farming?
                    </h2>
                    <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto">
                        Choose the right AgriFort solution for your agricultural needs and experience the difference in productivity and sustainability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#"
                            className="bg-white text-green-600 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-block text-center shadow-lg"
                        >
                            Contact Sales
                        </a>
                        <a
                            href="#"
                            className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors duration-200 inline-block text-center"
                        >
                            Download Catalog
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Footer from '../components/Footer';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }, []);

    const categories = [
        'All',
        'Bio-Stimulants',
        'Fungicides',
        'Insecticides',
        'Herbicides',
        'Plant Growth Regulators',
        'Crop Nutrition'
    ];

    const products = [
        {
            id: 1,
            name: 'Bio-Growth Plus',
            category: 'Bio-Stimulants',
            price: '₹850/L',
            image: 'https://5.imimg.com/data5/ANDROID/Default/2024/2/389669779/JY/BE/MY/125960068/product-jpeg-500x500.jpg',
            description: 'Advanced bio-stimulant for enhanced root development and stress tolerance in all crops.',
            features: ['Root Enhancement', 'Stress Tolerance', 'Organic Input', 'All Crops'],
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
            name: 'FungiShield Pro',
            category: 'Fungicides',
            price: '₹1,200/L',
            image: 'https://www.brewers.co.uk/uploads/1200/147610321966161670299685_1200.jpg?v=1476099619',
            description: 'Systemic fungicide for broad-spectrum disease control in vegetables and field crops.',
            features: ['Systemic Action', 'Broad Spectrum', 'Preventive & Curative', 'Long Duration'],
            crops: 'Rice, Wheat, Maize, Sugarcane',
            dosage: '2-3 gm per liter of water',
            benefits: [
                'Controls fungal diseases effectively',
                'Systemic and contact action',
                'Rainfast after 2 hours',
                'Safe for beneficial insects'
            ]
        },
        {
            id: 3,
            name: 'InsectGuard Max',
            category: 'Insecticides',
            price: '₹950/L',
            image: 'https://www.insectshield.com/cdn/shop/products/Insect-Shield-Permethrin-Spray-Infographics2_aff30e71-93b5-4493-b00a-77c6cb457b13_720x.jpg?v=1745462585',
            description: 'Effective insecticide for control of sucking and chewing pests in various crops.',
            features: ['Dual Action', 'Quick Knockdown', 'Residual Control', 'IPM Compatible'],
            crops: 'Cotton, Vegetables, Fruits',
            dosage: '1-2 ml per liter of water',
            benefits: [
                'Controls sucking and chewing pests',
                'Quick knockdown effect',
                'Residual activity up to 15 days',
                'Compatible with other pesticides'
            ]
        },
        {
            id: 4,
            name: 'WeedClear Elite',
            category: 'Herbicides',
            price: '₹750/L',
            image: 'https://cdn.shopify.com/s/files/1/0722/2059/files/elite-herbicide-file-3776.webp?v=1737468403',
            description: 'Selective herbicide for effective weed control in cereal crops without crop damage.',
            features: ['Selective Action', 'Post-Emergence', 'Crop Safe', 'Broad Leaf Weeds'],
            crops: 'Rice, Wheat, Maize',
            dosage: '500-750 ml per acre',
            benefits: [
                'Controls broadleaf and grassy weeds',
                'Pre and post emergence activity',
                'Safe for crops',
                'Long lasting control'
            ]
        },
        {
            id: 5,
            name: 'GrowthMax PGR',
            category: 'Plant Growth Regulators',
            price: '₹1,500/L',
            image: 'https://farmmate.in/cdn/shop/collections/0281464401258e1c3a73e2705970e2e3.png?v=1704362254',
            description: 'Plant growth regulator for improved fruit setting and uniform crop maturity.',
            features: ['Fruit Setting', 'Uniform Growth', 'Quality Enhancement', 'Yield Booster'],
            crops: 'Cotton, Sugarcane, Vegetables',
            dosage: '1-2 ml per liter of water',
            benefits: [
                'Promotes vegetative growth',
                'Increases fruit size',
                'Improves quality parameters',
                'Stress management'
            ]
        },
        {
            id: 6,
            name: 'NutriBoost Complete',
            category: 'Crop Nutrition',
            price: '₹650/kg',
            image: 'https://m.media-amazon.com/images/I/51YWrJ4IvTL._UF1000,1000_QL80_.jpg',
            description: 'Complete micronutrient mixture for addressing nutrient deficiencies in all crops.',
            features: ['Complete Nutrition', 'Chelated Form', 'Water Soluble', 'All Crops'],
            crops: 'All crops',
            dosage: '50-100 kg per acre',
            benefits: [
                'Complete nutrition package',
                'Slow release formulation',
                'Improves soil health',
                'Increases crop yield'
            ]
        },
        {
            id: 7,
            name: 'RootBoost Organic',
            category: 'Bio-Stimulants',
            price: '₹920/L',
            image: 'https://m.media-amazon.com/images/I/51GuoxRpmxL._UF1000,1000_QL80_.jpg',
            description: 'Organic bio-stimulant derived from seaweed extracts for enhanced root growth.',
            features: ['Seaweed Extract', 'Organic Certified', 'Root Enhancement', 'Stress Recovery'],
            crops: 'Tomato, Chilli, Brinjal, Okra',
            dosage: '1.5-2 ml per liter of water',
            benefits: [
                'Natural growth hormones',
                'Better fruit quality and size',
                'Disease resistance',
                'Early maturity'
            ]
        },
        {
            id: 8,
            name: 'CropShield Copper',
            category: 'Fungicides',
            price: '₹680/kg',
            image: 'https://5.imimg.com/data5/ANDROID/Default/2022/8/UP/HM/JR/69876506/product-jpeg-250x250.jpg',
            description: 'Copper-based fungicide for bacterial and fungal disease control in fruits and vegetables.',
            features: ['Copper Based', 'Bacterial Control', 'Preventive Action', 'Organic Compatible'],
            crops: 'Fruits, Vegetables, Plantation crops',
            dosage: '2-3 gm per liter of water',
            benefits: [
                'Broad spectrum disease control',
                'Controls bacterial infections',
                'Organic farming compatible',
                'Long-lasting protection'
            ]
        },
        {
            id: 9,
            name: 'BugStop Neem',
            category: 'Insecticides',
            price: '₹540/L',
            image: 'https://5.imimg.com/data5/LB/MF/WZ/SELLER-24482169/bugstop-ultima-bed-bug-control-spray-500x500.jpg',
            description: 'Neem-based organic insecticide for sustainable pest management in all crops.',
            features: ['Neem Based', 'Organic Solution', 'Systemic Action', 'Safe for Beneficials'],
            crops: 'All crops - vegetables, fruits, field crops',
            dosage: '3-5 ml per liter of water',
            benefits: [
                '100% organic and safe',
                'Controls wide range of pests',
                'Systemic and contact action',
                'Safe for beneficial insects'
            ]
        },
        {
            id: 10,
            name: 'GrassOut Selective',
            category: 'Herbicides',
            price: '₹890/L',
            image: 'https://tiimg.tistatic.com/fp/2/009/686/propaquizafop-10-ec-998.jpg',
            description: 'Selective post-emergence herbicide for grass weed control in broadleaf crops.',
            features: ['Grass Selective', 'Post Emergence', 'Crop Safe', 'Systemic Action'],
            crops: 'Soybean, Cotton, Groundnut',
            dosage: '400-600 ml per acre',
            benefits: [
                'Selective grass weed control',
                'Safe on broadleaf crops',
                'Systemic translocation',
                'Long-lasting effect'
            ]
        },
        {
            id: 11,
            name: 'FlowerSet Pro',
            category: 'Plant Growth Regulators',
            price: '₹1,800/L',
            image: 'https://www.foodicine.co.in/images/products/amino-acid-fertilizer-bottle-front-250ml.jpg',
            description: 'Specialized PGR for improved flower initiation and fruit set in horticultural crops.',
            features: ['Flower Initiation', 'Fruit Set', 'Hormone Balance', 'Quality Improvement'],
            crops: 'Tomato, Chilli, Mango, Citrus',
            dosage: '0.5-1 ml per liter of water',
            benefits: [
                'Promotes flower initiation',
                'Improves fruit setting',
                'Reduces flower drop',
                'Better fruit quality'
            ]
        },
        {
            id: 12,
            name: 'MicroMax Chelated',
            category: 'Crop Nutrition',
            price: '₹780/kg',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKGYzETm9HDdHll7sZF4QPlKMqJItZBjHzw&s',
            description: 'Chelated micronutrient complex for correction of multiple nutrient deficiencies.',
            features: ['Chelated Form', 'Multiple Nutrients', 'High Absorption', 'Foliar Application'],
            crops: 'All crops',
            dosage: '2-3 gm per liter of water',
            benefits: [
                'Complete micronutrient package',
                'Chelated for better absorption',
                'Corrects multiple deficiencies',
                'Improves crop health'
            ]
        }
    ];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(product => product.category === activeCategory);

    const openModal = (product) => {
        setSelectedProduct(product);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Hero Banner Section */}
            <section className="pt-24 pb-12 bg-gradient-to-b from-white to-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Side - Image */}
                        <div className="relative" data-aos="fade-right">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Agricultural Products"
                                    className="w-full h-96 object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
                                        e.target.parentElement.style.display = 'flex';
                                        e.target.parentElement.style.alignItems = 'center';
                                        e.target.parentElement.style.justifyContent = 'center';
                                    }}
                                />
                                {/* Decorative Icon */}
                                <div className="absolute -bottom-6 -right-6">
                                    <div className="bg-white p-4 rounded-full shadow-xl">
                                        <svg className="w-12 h-12" viewBox="0 0 100 100">
                                            <circle cx="25" cy="25" r="20" fill="#22c55e"/>
                                            <circle cx="75" cy="25" r="20" fill="#059669"/>
                                            <circle cx="25" cy="75" r="20" fill="#dc2626"/>
                                            <circle cx="75" cy="75" r="20" fill="#991b1b"/>
                                            <circle cx="50" cy="50" r="15" fill="#1f2937"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6" data-aos="fade-left">
                            <h1 className="text-5xl md:text-6xl font-bold text-red-600 uppercase tracking-tight">
                                PRODUCTS.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                AgriFort's product portfolio consists of cutting-edge agricultural solutions with 
                                proven effectiveness. Our scientifically formulated products drive productivity, 
                                ensure crop protection, and contribute to AgriFort's unwavering commitment to 
                                sustainable farming excellence.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-green-800 font-medium">ISO Certified</span>
                                </div>
                                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-green-800 font-medium">Research Backed</span>
                                </div>
                                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-green-800 font-medium">Farmer Trusted</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Category Title */}
                    <div className="text-center mb-12" data-aos="fade-up">
                        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Our Product Range
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Advanced <span className="text-green-600">Agricultural Solutions</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Discover our comprehensive range of agricultural chemicals and bio-solutions, 
                            scientifically formulated to enhance crop productivity and protect your valuable harvests.
                        </p>
                    </div>

                    {/* Category Filter Buttons */}
                    <div className="flex justify-center mb-12 overflow-x-auto" data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-white rounded-full p-2 shadow-lg inline-flex gap-2 flex-wrap justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                                        activeCategory === category
                                            ? 'bg-green-600 text-white shadow-lg scale-105'
                                            : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer border-2 border-transparent hover:border-red-500"
                                onClick={() => openModal(product)}
                                data-aos="zoom-in"
                                data-aos-delay={index * 50}
                            >
                                {/* Product Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.src = '/images/products/placeholder.jpg';
                                        }}
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-2 left-2">
                                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                                            {product.category}
                                        </span>
                                    </div>
                                    {/* Price Badge */}
                                    <div className="absolute top-2 right-2">
                                        <span className="bg-white text-green-600 px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                                            {product.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-3 text-xs leading-relaxed line-clamp-2">
                                        {product.description}
                                    </p>

                                    {/* Features List - Show only 2 features */}
                                    <div className="space-y-1 mb-3">
                                        {product.features.slice(0, 2).map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-xs text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-2">
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Handle order logic
                                            }}
                                            className="flex-1 bg-green-600 text-white py-1.5 px-3 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium shadow-sm"
                                        >
                                          Enquire Now
                                        </button>
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openModal(product);
                                            }}
                                            className="px-3 py-1.5 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors text-sm font-medium"
                                        >
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16" data-aos="fade-up">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Can't Find What You're Looking For?
                        </h3>
                        <p className="text-gray-600 mb-8">
                            We offer custom agricultural solutions tailored to your specific needs.
                        </p>
                        <Link to="/contact">
                            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                                Contact Our Specialists
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Product Modal */}
            {selectedProduct && (
                <div 
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div 
                        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        data-aos="zoom-in"
                    >
                        <div className="flex flex-col lg:flex-row">
                            {/* Product Image */}
                            <div className="lg:w-1/2 p-8 bg-gradient-to-br from-green-50 to-white">
                                <div className="relative">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                                            {selectedProduct.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-white text-green-600 px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                                            {selectedProduct.price}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="lg:w-1/2 p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-3xl font-bold text-gray-900 pr-4">
                                        {selectedProduct.name}
                                    </h2>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-500 hover:text-red-600 text-3xl font-bold transition-colors flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-50"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {/* Description */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-green-600 mb-2 uppercase">
                                            Product Description
                                        </h3>
                                        <p className="text-gray-700">
                                            {selectedProduct.description}
                                        </p>
                                    </div>

                                    {/* Crops */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-green-600 mb-2 uppercase">
                                            Suitable Crops
                                        </h3>
                                        <p className="text-gray-700">
                                            {selectedProduct.crops}
                                        </p>
                                    </div>

                                    {/* Dosage */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-green-600 mb-2 uppercase">
                                            Recommended Dosage
                                        </h3>
                                        <p className="text-gray-700 font-medium">
                                            {selectedProduct.dosage}
                                        </p>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-green-600 mb-3 uppercase">
                                            Key Benefits
                                        </h3>
                                        <ul className="space-y-2">
                                            {selectedProduct.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                                                    <span className="text-gray-700">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3 pt-4">
                                        <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-xl">
                                            Order Now
                                        </button>
                                        <Link to="/contact" className="flex-1">
                                            <button className="w-full py-3 px-6 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold">
                                                Contact Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Products;

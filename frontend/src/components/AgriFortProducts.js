import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AgriFortProducts = () => {
    const [activeCategory, setActiveCategory] = useState('All');

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
            features: ['Root Enhancement', 'Stress Tolerance', 'Organic Input', 'All Crops']
        },
        {
            id: 2,
            name: 'FungiShield Pro',
            category: 'Fungicides',
            price: '₹1,200/L',
            image: 'https://www.brewers.co.uk/uploads/1200/147610321966161670299685_1200.jpg?v=1476099619',
            description: 'Systemic fungicide for broad-spectrum disease control in vegetables and field crops.',
            features: ['Systemic Action', 'Broad Spectrum', 'Preventive & Curative', 'Long Duration']
        },
        {
            id: 3,
            name: 'InsectGuard Max',
            category: 'Insecticides',
            price: '₹950/L',
            image: 'https://www.insectshield.com/cdn/shop/products/Insect-Shield-Permethrin-Spray-Infographics2_aff30e71-93b5-4493-b00a-77c6cb457b13_720x.jpg?v=1745462585',
            description: 'Effective insecticide for control of sucking and chewing pests in various crops.',
            features: ['Dual Action', 'Quick Knockdown', 'Residual Control', 'IPM Compatible']
        },
        {
            id: 4,
            name: 'WeedClear Elite',
            category: 'Herbicides',
            price: '₹750/L',
            image: 'https://cdn.shopify.com/s/files/1/0722/2059/files/elite-herbicide-file-3776.webp?v=1737468403',
            description: 'Selective herbicide for effective weed control in cereal crops without crop damage.',
            features: ['Selective Action', 'Post-Emergence', 'Crop Safe', 'Broad Leaf Weeds']
        },
        {
            id: 5,
            name: 'GrowthMax PGR',
            category: 'Plant Growth Regulators',
            price: '₹1,500/L',
            image: 'https://farmmate.in/cdn/shop/collections/0281464401258e1c3a73e2705970e2e3.png?v=1704362254',
            description: 'Plant growth regulator for improved fruit setting and uniform crop maturity.',
            features: ['Fruit Setting', 'Uniform Growth', 'Quality Enhancement', 'Yield Booster']
        },
        {
            id: 6,
            name: 'NutriBoost Complete',
            category: 'Crop Nutrition',
            price: '₹650/kg',
            image: 'https://m.media-amazon.com/images/I/51YWrJ4IvTL._UF1000,1000_QL80_.jpg',
            description: 'Complete micronutrient mixture for addressing nutrient deficiencies in all crops.',
            features: ['Complete Nutrition', 'Chelated Form', 'Water Soluble', 'All Crops']
        },
        {
            id: 7,
            name: 'RootBoost Organic',
            category: 'Bio-Stimulants',
            price: '₹920/L',
            image: 'https://m.media-amazon.com/images/I/51GuoxRpmxL._UF1000,1000_QL80_.jpg',
            description: 'Organic bio-stimulant derived from seaweed extracts for enhanced root growth.',
            features: ['Seaweed Extract', 'Organic Certified', 'Root Enhancement', 'Stress Recovery']
        },
        {
            id: 8,
            name: 'CropShield Copper',
            category: 'Fungicides',
            price: '₹680/kg',
            image: 'https://5.imimg.com/data5/ANDROID/Default/2022/8/UP/HM/JR/69876506/product-jpeg-250x250.jpg',
            description: 'Copper-based fungicide for bacterial and fungal disease control in fruits and vegetables.',
            features: ['Copper Based', 'Bacterial Control', 'Preventive Action', 'Organic Compatible']
        },
        {
            id: 9,
            name: 'BugStop Neem',
            category: 'Insecticides',
            price: '₹540/L',
            image: 'https://5.imimg.com/data5/LB/MF/WZ/SELLER-24482169/bugstop-ultima-bed-bug-control-spray-500x500.jpg',
            description: 'Neem-based organic insecticide for sustainable pest management in all crops.',
            features: ['Neem Based', 'Organic Solution', 'Systemic Action', 'Safe for Beneficials']
        },
        {
            id: 10,
            name: 'GrassOut Selective',
            category: 'Herbicides',
            price: '₹890/L',
            image: 'https://tiimg.tistatic.com/fp/2/009/686/propaquizafop-10-ec-998.jpg',
            description: 'Selective post-emergence herbicide for grass weed control in broadleaf crops.',
            features: ['Grass Selective', 'Post Emergence', 'Crop Safe', 'Systemic Action']
        },
        {
            id: 11,
            name: 'FlowerSet Pro',
            category: 'Plant Growth Regulators',
            price: '₹1,800/L',
            image: 'https://www.foodicine.co.in/images/products/amino-acid-fertilizer-bottle-front-250ml.jpg',
            description: 'Specialized PGR for improved flower initiation and fruit set in horticultural crops.',
            features: ['Flower Initiation', 'Fruit Set', 'Hormone Balance', 'Quality Improvement']
        },
        {
            id: 12,
            name: 'MicroMax Chelated',
            category: 'Crop Nutrition',
            price: '₹780/kg',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKGYzETm9HDdHll7sZF4QPlKMqJItZBjHzw&s',
            description: 'Chelated micronutrient complex for correction of multiple nutrient deficiencies.',
            features: ['Chelated Form', 'Multiple Nutrients', 'High Absorption', 'Foliar Application']
        }
    ];

    // Show only first 6 products
    const displayedProducts = products.slice(0, 6);

    return (
        <section className="py-12 bg-gradient-to-b from-white to-green-50" id="all-products">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                        Our Products
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Advanced <span className="text-green-600">Agricultural Solutions</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Scientifically formulated to enhance crop productivity and protect your harvests.
                    </p>
                </div>

                {/* Products Grid - Only 6 Products */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden border-2 border-transparent hover:border-red-500"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
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
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-1">
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
                                    <button className="flex-1 bg-green-600 text-white py-1.5 px-3 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium shadow-sm">
                                        Order Now
                                    </button>
                                    <button className="px-3 py-1.5 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors text-sm font-medium">
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Products Button */}
                <div className="text-center mt-10" data-aos="fade-up">
                    <Link to="/products">
                        <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                            View All Products →
                        </button>
                    </Link>
                    <p className="text-gray-600 text-sm mt-3">
                        Explore our complete range of {products.length}+ agricultural solutions
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AgriFortProducts;

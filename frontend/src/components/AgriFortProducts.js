import React from 'react';

const AgriFortProducts = () => {
    const products = [
        {
            name: 'ViKelp Granules ULTRA',
            description: 'Superfood imported from Ireland',
            image: '/images/products/vikelp-granules.jpg',
            features: ['100% Organic', 'Plant Growth Enhancement', 'Natural Nutrients']
        },
        {
            name: 'NutriFlax Pk',
            description: 'Plant Growth Stimulant',
            image: '/images/products/nutriflax-pk.jpg',
            features: ['Probiotic Based', 'Better Fruit Setting', 'Quality Enhancement']
        },
        {
            name: 'Hortis SP',
            description: 'Naturally Derived Product',
            image: '/images/products/hortis-sp.jpg',
            features: ['Natural Farming', 'Better Size & Shining', 'Stops Flower Drop']
        },
        {
            name: 'SilFort 100',
            description: '100% Silica Purity',
            image: '/images/products/silfort-100.jpg',
            features: ['Silica Rich', 'Better Quality', 'Enhanced Growth']
        }
    ];

    const crops = [
        {
            name: 'Wheat',
            image: '/images/crops/wheat.jpg',
            description: 'Golden wheat fields'
        },
        {
            name: 'Rice',
            image: '/images/crops/rice.jpg',
            description: 'Healthy rice paddies'
        },
        {
            name: 'Cotton',
            image: '/images/crops/cotton.jpg',
            description: 'Fluffy cotton bolls'
        },
        {
            name: 'Vegetables',
            image: '/images/crops/vegetables.jpg',
            description: 'Fresh organic produce'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div 
                    className="text-center mb-16"
                    data-aos="fade-up"
                >
                    <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm mb-6 font-semibold">
                        AgriFort Technologies
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        खेती को दे एक नयी ऊर्जा !!
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">
                        Give Agriculture New Energy!!
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                        AgriFort Technologies - Poised to turn a techno leaf in the service of farmer
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative mb-4">
                                <img 
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                    AgriFort
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                                {product.name}
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                {product.description}
                            </p>
                            
                            <div className="space-y-2">
                                {product.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Crop Showcase */}
                <div 
                    className="text-center mb-12"
                    data-aos="fade-up"
                >
                    <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        ऐसी कोई फसल नहीं, जिसपे इनका असर नहीं
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        There is no such crop on which these do not have an effect
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {crops.map((crop, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer hover:scale-105 transition-transform duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                                <img 
                                    src={crop.image}
                                    alt={crop.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h4 className="text-white font-bold text-lg mb-1">{crop.name}</h4>
                                    <p className="text-white/80 text-sm">{crop.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div 
                    className="text-center"
                    data-aos="fade-up"
                >
                    <button
                        className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
                    >
                        → MORE INFO
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AgriFortProducts;
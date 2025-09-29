import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="relative">
                                <img 
                                    src="/images/logo/logo.jpeg" 
                                    alt="AgriFort Technologies" 
                                    className="h-20 w-auto object-contain mr-3"
                                    style={{ filter: 'drop-shadow(0 0 6px rgba(0,0,0,0.7))' }}
                                />
                            </div>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Leading agro-biotech company dedicated to empowering farmers with innovative, sustainable
                            agricultural solutions for better harvests and a greener future.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { name: 'facebook', url: 'https://facebook.com/agrifort', icon: '📘' },
                                { name: 'twitter', url: 'https://twitter.com/agrifort', icon: '🐦' },
                                { name: 'linkedin', url: 'https://linkedin.com/company/agrifort', icon: '💼' },
                                { name: 'instagram', url: 'https://instagram.com/agrifort', icon: '📷' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                                    aria-label={`Visit our ${social.name} page`}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="font-bold mb-6 text-white text-lg">Quick Links</h5>
                        <ul className="space-y-3">
                            {[
                                { name: 'About AgriFort', href: '/about' },
                                { name: 'Our Products', href: '/products' },
                                { name: 'Our Team', href: '/ourteam' },
                                { name: 'Contact Us', href: '/contact' },
                                { name: 'Career Opportunities', href: '/careers' },
                                { name: 'Media Center', href: '/media' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.href}
                                        className="text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h5 className="font-bold mb-6 text-white text-lg">Customer Support</h5>
                        <ul className="space-y-3">
                            {[
                                { name: 'Dealer Login', href: '/admin/login' },
                                { name: 'Farmer Support', href: '/support' },
                                { name: 'Technical Helpdesk', href: '/helpdesk' },
                                { name: 'Product Catalog', href: '/products' },
                                { name: 'Training Programs', href: '/training' },
                                { name: 'Download Center', href: '/downloads' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h5 className="font-bold mb-6 text-white text-lg">Contact Info</h5>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <span className="text-green-400">📞</span>
                                <span className="text-gray-300">+91 1800-XXX-XXXX</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-green-400">📧</span>
                                <span className="text-gray-300">info@agrifort.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-green-400">📍</span>
                                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <p className="text-gray-300 mb-4">Subscribe to AgriFort Insights</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <button
                                    className="px-4 py-2 bg-green-600 rounded-r-lg hover:bg-green-700 transition-all duration-200 hover:scale-105 active:scale-95"
                                >
                                    📧
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} AgriFort Technologies. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {[
                            { name: 'Privacy Policy', href: '/privacy' },
                            { name: 'Terms of Service', href: '/terms' },
                            { name: 'Refund Policy', href: '/refund' }
                        ].map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-green-400 text-sm transition-all duration-200 hover:-translate-y-0.5"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

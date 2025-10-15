import React from 'react';
import { PhoneIcon, AtSymbolIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from "@heroicons/react/24/outline";

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{ background: '#2d3e3e' }} className="text-white py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                    
                    {/* Column 1: Company Info */}
                    <div className="space-y-4">
                        <div className="mb-4">
                            <img 
                                src="/images/logo/logo-png.png" 
                                alt="AgriFort Technologies" 
                                className="h-14 w-auto"
                            />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            AgriFort is one of the largest and innovative Indian full-stack AgriTech platforms that is dedicated to revolutionizing the agricultural industry in India. The platform leverages technology to provide a wide range of solutions and services to farmers, helping them optimize their agricultural practices, increase productivity, and ultimately improve their livelihoods.
                        </p>
                        
                        {/* Download Mobile App */}

                        {/* Social Media Icons */}
                        <div className="flex gap-3 pt-4">
                            <a
                                href="https://instagram.com/agrifort"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Visit our Instagram page"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com/agrifort"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Visit our Facebook page"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a
                                href="https://youtube.com/agrifort"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Visit our YouTube channel"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/agrifort"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Visit our X (Twitter) page"
                            >
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/company/agrifort"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Visit our LinkedIn page"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h5 className="text-green-400 font-bold text-base mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => scrollToSection('about')}
                                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-200 text-left w-full"
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('products')}
                                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-200 text-left w-full"
                                >
                                    Reach Us
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => console.log('Navigate to media')}
                                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-200 text-left w-full"
                                >
                                    Media Links
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => console.log('Navigate to privacy')}
                                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-200 text-left w-full"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => console.log('Navigate to refund')}
                                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-200 text-left w-full"
                                >
                                    Return & Refund Policy
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => console.log('Navigate to terms')}
                                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-200 text-left w-full"
                                >
                                    Terms of Service
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => console.log('Navigate to careers')}
                                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-200 text-left w-full"
                                >
                                    Careers
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => console.log('Navigate to shipping')}
                                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-200 text-left w-full"
                                >
                                    Shipping/Delivery Policy
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => console.log('Navigate to faq')}
                                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-200 text-left w-full"
                                >
                                    FAQ
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => console.log('Navigate to sitemap')}
                                    className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-200 text-left w-full"
                                >
                                    Sitemap
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="space-y-4">
                        <h5 className="text-green-400 font-bold text-base mb-4">Contact Us</h5>
                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-400 text-xs mb-2">Missed Call To Order:</p>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                                    1800 3000 2434
                                </button>
                            </div>
                            
                            <div>
                                <p className="text-gray-400 text-xs mb-2">Whatsapp:</p>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                                    +91 8050797979
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div 
                    className="mt-12 pt-6 text-center"
                    style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}
                >
                    <p className="text-gray-400 text-sm">
                        Copyright © 2025 AgriFort Agro Private Limited
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
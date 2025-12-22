import React from 'react';
import { BriefcaseIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useHistory } from 'react-router-dom';

const Footer = () => {
    const history = useHistory();

    const handleNavigation = (href) => {
        history.push(href);
    };

    return (
        <footer className="pt-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white" style={{backgroundColor: '#1B4D3E'}}>
            {/* Decorative top border */}
            {/* <div className="h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></div> */}
            
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Main Footer Content */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 
                    {/* Column 1: Company Info */}
                    <div className="space-y-4">
                        <div className="p-2 bg-white rounded w-40">
                        <img src="/images/logo/logo-png.png" alt="AgriFort Technologies" className="h-12 w-auto" />
                        </div>

                        <div>
                            <h6 className="text-green-400 font-semibold text-xs mb-2 flex items-center">
                                <MapPinIcon className="w-3 h-3 mr-1" />
                                Our Presence
                            </h6>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                UP, MP, Maharashtra, Tamil Nadu, Karnataka, Kerala, Haryana, HP, Gujarat, Kashmir, Bihar, Uttarakhand, Rajasthan, Telangana
                            </p>
                        </div>
                
                        {/* Social Media Links */}
                        <div>
                            <h6 className="text-green-400 font-semibold text-xs mb-2">Follow Us</h6>
                            <div className="flex gap-2">
                                <a
                                    href="https://www.instagram.com/agrifort.technologies"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-slate-700/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-105"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.facebook.com/agrifort.technology"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-slate-700/50 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-105"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a
                                    href="http://www.youtube.com/@agriforttechnologies"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-slate-700/50 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-105"
                                    aria-label="YouTube"
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/agrifort-technologies/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-slate-700/50 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-105"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h5 className="text-green-400 font-bold text-base mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            {[
                                { label: 'Home', path: '/' },
                                { label: 'About Us', path: '/' },
                                { label: 'Leadership People', path: '#' },
                                { label: 'Our Portfolio', path: '#' },
                                { label: 'Farmer Wins', path: '#' },
                                { label: 'Agrifort Highlights', path: '#' }
                            ].map((link, index) => (
                                <li key={index}>
                                    <button 
                                        onClick={() => handleNavigation(link.path)}
                                        className="group text-gray-300 text-sm hover:text-green-400 transition-all duration-200 text-left w-full flex items-center"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                {/* Column 3: Quick Links */}      
                    <div>

                    <div>
                        <h5 className="text-green-400 font-bold text-base mb-4">Get in Touch</h5>
                        <a 
                            href="mailto:contact@agrifort.com"
                            className="group flex items-start space-x-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300  border-slate-700/50 hover:border-green-500/50"
                        >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                                <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-green-400 text-xs font-semibold mb-0.5">Contact Us</p>
                                <p className="text-gray-300 text-xs">Let's discuss how we can help</p>
                            </div>
                        </a>
                    </div>

                    <div>
                        <h5 className="text-green-400 font-bold text-base mb-4">Join Our Team</h5>
                        <a 
                            href="mailto:careers@agrifort.com"
                            className="group flex items-start space-x-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 border-slate-700/50 hover:border-emerald-500/50"
                        >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                                <BriefcaseIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-emerald-400 text-xs font-semibold mb-0.5">Grow Your Career</p>
                                <p className="text-gray-300 text-xs">Explore opportunities</p>
                            </div>
                        </a>
                    </div>


                    </div>

                </div>
            </div>
            <div className="border-t border-slate-700/50 text-center" style={{backgroundColor: '#550000'}}>
            <div className="container mx-auto px-4 max-w-7xl flex items-center">
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left w-full p-2">
                    <p className="text-white text-xs">
                    Copyright © 2025 <span className="text-green-400 font-semibold">AgriFort Technologies</span>. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-xs">
                    <button className="text-white hover:text-green-400 transition-colors duration-200">
                        Privacy Policy
                    </button>
                    <button className="text-white hover:text-green-400 transition-colors duration-200">
                        Terms of Service
                    </button>
                    </div>
                </div>
                </div>

                </div>
        </footer>
    );
};

export default Footer;
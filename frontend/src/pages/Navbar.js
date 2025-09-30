import { useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { Link } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';

const Navbar = () => {
    const navigationItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'OurTeam', href: '/ourteam' },
        { name: 'Contact', href: '/contact' }
    ];
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { userRole, userInfo } = useAuth();
    
    return (
         <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 dark:bg-gray-900/95 border-b-2 border-green-500/40 dark:border-green-400/40 shadow-xl navbar-border-glow">
    {/* Gradient Border Effect */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    
    <div className="w-full px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center hover:scale-105 transition-transform duration-200">
                <img 
                    src="/images/logo/logo.jpeg" 
                    alt="AgriFort Technologies" 
                    className="h-16 w-auto object-contain"
                />
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex space-x-8">
                {navigationItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.href}
                        className="relative text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-semibold transition-all duration-300 hover:-translate-y-0.5 group nav-link-hover"
                    >
                        {item.name}
                        {/* Hover underline effect */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 active:scale-95"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>

                {/* Login Button - Desktop */}
                <div className="hidden md:flex items-center">
                    <Link to="/admin/login" className="ml-2">
                        <div className="hover:scale-105 transition-transform duration-200 active:scale-95">
                            <Button
                                color="green"
                                buttonType="outlined"
                                size="regular"
                                ripple="light"
                                className="transition-all duration-200 hover:shadow-lg border-green-500 text-green-600 hover:bg-green-50"
                            >
                                Login
                            </Button>
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6 text-gray-700 dark:text-gray-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {mobileMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden animate-slideDown">
                <div className="py-4 space-y-3 border-t border-green-500/20 dark:border-green-400/20">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}
                    {/* Mobile Login Button */}
                    <Link
                        to="/admin/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 mx-4 text-center text-green-600 dark:text-green-400 border-2 border-green-500 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-gray-800 transition-all duration-200"
                    >
                        Login
                    </Link>
                </div>
            </div>
        )}
    </div>
</nav>
    );
};

export default Navbar;
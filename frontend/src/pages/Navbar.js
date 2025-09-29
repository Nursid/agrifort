import { useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { Link } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';

const Navbar = () => {
    const navigationItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#' },
        { name: 'Products', href: '/products' },
        { name: 'OurTeam', href: '#' },
        { name: 'Contact', href: '#' }
    ];
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };
    const [darkMode, setDarkMode] = useState(false);
    const [showSidebar, setShowSidebar] = useState('-left-64');
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

            {/* Navigation Links */}
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
            <div className="flex items-end space-x-4">
                {/* Contact Info */}

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 active:scale-95"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>

                {/* Login Button */}
                <div className="flex items-center">
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
            </div>
        </div>
    </div>
</nav>
    );
};

export default Navbar;
import { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Package, ChevronDown, Menu, X } from 'lucide-react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [language, setLanguage] = useState('English');
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const history = useHistory();
   const [activeDropdown, setActiveDropdown] = useState(null);
    const mainCategories = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about',
            submenu:[ {name:'Profile',href:'/about/profile'}, {name:'History & Values', href:'/about/history'} ]
         },
        { name: 'Our Team', href: '/ourteam' },
        { name: 'Our Product', href: '/products' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Life@Agrifort', href: '/lifeAtAgrifort' },
    ];

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };

    const handleNavigation = (href) => {
        console.log('Navigate to:', href);
        setMobileMenuOpen(false);
    };

    return (
        <div className="sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-green-800 text-white">
                <div className="w-full flex justify-end items-center gap-6 text-sm bg-green-600">
                    <button onClick={() => handleNavigation('/sell')} className="hover:text-gray-200 transition-colors">
                        Sell on AgriFort
                    </button>
                    <button onClick={() => handleNavigation('/bulk-orders')} className="hover:text-gray-200 transition-colors">
                        Bulk Order Inquiries
                    </button>
                    <button onClick={() => handleNavigation('/corporate')} className="hover:text-gray-200 transition-colors">
                        Corporate Site
                    </button>
                    <div className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded transition-colors cursor-pointer font-semibold">
                        Missed Call To Order: 1800-3000-2434
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className="bg-white dark:bg-gray-900 shadow-md">
                <div className="w-full px-4">
                    <div className="flex justify-between items-center py-3">
                        {/* Logo */}
                        <button onClick={() => handleNavigation('/')} className="flex items-center hover:scale-105 transition-transform duration-200">
                            <img 
                                src="/images/logo/logo.jpeg" 
                                alt="AgriFort Technologies" 
                                className="h-14 w-auto object-contain"
                            />
                        </button>
<div className="hidden lg:flex items-center justify-center border-gray-200 dark:border-gray-700 py-3 gap-4 hover:bg-green-400  relative z-40">       

{/* // Replace the category button mapping with this: */}
{mainCategories.map((category) => (
    <div
        key={category.name}
        className="relative"
        onMouseEnter={() => category.submenu && setActiveDropdown(category.name)}
        onMouseLeave={() => setActiveDropdown(null)}
    >
        <button
            onClick={() => history.push(category.href)}
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium text-sm whitespace-nowrap px-2 transition-colors hover:bg-green-500 p-2 hover:text-white"
        >
            {category.name}
        </button>
        
        {category.submenu && activeDropdown === category.name && (
            <div className="absolute  top-full rounded-md left-0 mt-0 w-56 bg-white dark:bg-gray-800 rounded-b-lg shadow-lg border border-green-600 dark:border-gray-600 border-b-4 py-2 z-50">
                {category.submenu.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => {
                            history.push(item.href);
                            setActiveDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white transition-colors"
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        )}
    </div>
))}
                    </div>

                        {/* Search Bar */}
                        {/* <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                            <div className="w-full flex">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                    placeholder="Search products..."
                                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-orange-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                                />
                                <button
                                    onClick={handleSearch}
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-r-lg transition-colors flex items-center justify-center"
                                >
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div> */}

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4">
                            {/* Language Selector */}
                            <div className="relative hidden md:block">
                                <button
                                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-gray-300 hover:border-orange-500 transition-colors dark:border-gray-600 dark:text-white"
                                >
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                        🌐
                                    </div>
                                    <span className="text-sm">{language}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                {showLanguageDropdown && (
                                    <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-32">
                                        <button
                                            onClick={() => {
                                                setLanguage('English');
                                                setShowLanguageDropdown(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                                        >
                                            English
                                        </button>
                                        <button
                                            onClick={() => {
                                                setLanguage('हिंदी');
                                                setShowLanguageDropdown(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                                        >
                                            हिंदी
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Track Order */}
                            <button onClick={() => handleNavigation('/track-order')} className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
                                <Package className="w-5 h-5" />
                                <span className="text-sm">Track Order</span>
                            </button>

                            {/* Wishlist */}
                            <button onClick={() => handleNavigation('/wishlist')} className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
                                <Heart className="w-5 h-5" />
                                <span className="text-sm">Wishlist</span>
                            </button>

                            {/* Login */}
                            <button onClick={() => history.push('/admin/login')} className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
                                <User className="w-5 h-5" />
                                <span className="text-sm">Login</span>
                            </button>

                            {/* Cart */}
                            <button onClick={() => handleNavigation('/cart')} className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="text-sm">Cart</span>
                            </button>

                            {/* Dark Mode Toggle */}
                            {/* <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                            >
                                {darkMode ? '☀️' : '🌙'}
                            </button> */}

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Category Navigation */}
                    {/* <div className="hidden lg:flex items-center justify-center border-t border-gray-200 dark:border-gray-700 py-3 overflow-x-auto hover:bg-green-400 gap-4">
                        {mainCategories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => history.push(category.href)}
                                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium text-sm whitespace-nowrap px-2 transition-colors hover:bg-green-500 p-2 hover:text-white"
                            >
                                {category.name}
                            </button>
                        ))}
                    </div> */}
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
                        <div className="py-4 space-y-2 px-4">
                            {mainCategories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => handleNavigation(category.href)}
                                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200"
                                >
                                    {category.name}
                                </button>
                            ))}
                            
                            {/* Mobile Action Items */}
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                                <button
                                    onClick={() => handleNavigation('/track-order')}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                                >
                                    <Package className="w-5 h-5" />
                                    <span>Track Order</span>
                                </button>
                                <button
                                    onClick={() => handleNavigation('/wishlist')}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                                >
                                    <Heart className="w-5 h-5" />
                                    <span>Wishlist</span>
                                </button>
                                <button
                                    onClick={() => handleNavigation('/admin/login')}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                                >
                                    <User className="w-5 h-5" />
                                    <span>Login</span>
                                </button>
                                <button
                                    onClick={() => handleNavigation('/cart')}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    <span>Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
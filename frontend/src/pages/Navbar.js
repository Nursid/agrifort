import { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Package, ChevronDown, Menu, X } from 'lucide-react';
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [language, setLanguage] = useState('English');
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const history = useHistory();

    const mainCategories = [
        { name: 'Home', href: '/' },
        {
            name: 'About Us',
            href: '#',
            // submenu: [
            //     { name: 'Profile', href: '/about/profile' },
            //     { name: 'History & Values', href: '/about/history' }
            // ]
        },
        { name: 'Leadership People', href: '#' },
        { name: 'Our Portfolio', href: '#' },
        { name: 'Family Vibes', href: '#' },
        { name: 'AgriFort Highlights', href: '#' },
    ];

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };

    const handleNavigation = (href) => {
        history.push(href);
        setMobileMenuOpen(false);
    };

    return (
        <div className="sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-green-800 text-white">
                <div className="w-full flex flex-wrap justify-between items-center text-sm bg-green-600 px-4 py-2">
                    
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-white">
                        <button
                            onClick={() => handleNavigation('/sell')}
                            className="hover:text-gray-200 transition-colors"
                        >
                            Sell on AgriFort
                        </button>
                        <button
                            onClick={() => handleNavigation('/bulk-orders')}
                            className="hover:text-gray-200 transition-colors"
                        >
                            Bulk Order Inquiries
                        </button>
                        <button
                            onClick={() => handleNavigation('/corporate')}
                            className="hover:text-gray-200 transition-colors"
                        >
                            Corporate Site
                        </button>
                    </div>

                    <div className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 mt-2 md:mt-0 rounded transition-colors cursor-pointer font-semibold text-center w-full md:w-auto">
                        Missed Call To Order: 1800-3000-2434
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white dark:bg-gray-900 shadow-md">
                <div className="w-full px-4">
                    <div className="flex justify-between items-center py-3">

                        <button
                            onClick={() => handleNavigation('/')}
                            className="flex items-center hover:scale-105 transition-transform duration-200"
                        >
                            <img
                                src="/images/logo/logo.jpeg"
                                alt="AgriFort Technologies"
                                className="h-14 w-auto object-contain"
                            />
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-center py-3 gap-4 relative z-40">
                            {mainCategories.map((category) => (
                                <div
                                    key={category.name}
                                    className="relative"
                                    onMouseEnter={() => category.submenu && setActiveDropdown(category.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button
                                        onClick={() => history.push(category.href)}
                                        className="  text-gray-700
                                        dark:text-gray-300
                                        hover:text-green-500
                                        hover:bg-transparent
                                        font-medium
                                        text-sm
                                        px-2 py-2
                                        transition-colors"
                                    >
                                        {category.name}
                                    </button>

                                    {category.submenu &&
                                        activeDropdown === category.name && (
                                            <div className="absolute top-full left-0 w-56 bg-white dark:bg-gray-800 border border-green-600 rounded-lg shadow-lg py-2 z-50">
                                                {category.submenu.map((item) => (
                                                    <button
                                                        key={item.name}
                                                        onClick={() => {
                                                            history.push(item.href)
                                                            setActiveDropdown(null);
                                                        }}
                                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-green-500"
                                                    >
                                                        {item.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                </div>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-4">

                            <div className="relative hidden md:block">
                                {/* <button
                                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-gray-300 hover:border-orange-500 dark:border-gray-600 dark:text-white"
                                >
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">🌐</div>
                                    <span className="text-sm">{language}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button> */}
{/* 
                                {showLanguageDropdown && (
                                    <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border">
                                        <button
                                            onClick={() => {
                                                setLanguage('English');
                                                setShowLanguageDropdown(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            English
                                        </button>

                                        <button
                                            onClick={() => {
                                                setLanguage('हिंदी');
                                                setShowLanguageDropdown(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            हिंदी
                                        </button>
                                    </div>
                                )} */}
                            </div>

                            {/* <button onClick={() => history.push('/track-order')
                                
                            } className="hidden md:flex items-center gap-2 hover:text-orange-500">
                                <Package className="w-5 h-5" />
                                <span className="text-sm">Track Order</span>
                            </button>

                            <button onClick={() => history.push('/wishlist')} className="hidden md:flex items-center gap-2 hover:text-orange-500">
                                <Heart className="w-5 h-5" />
                                <span className="text-sm">Wishlist</span>
                            </button> */}

                            <button onClick={() => history.push('/admin/login')} className="hidden md:flex items-center gap-2 hover:text-orange-500">
                                <User className="w-5 h-5" />
                                <span className="text-sm">Login</span>
                            </button>

                            {/* <button onClick={() => history.push('/cart')} className="hidden md:flex items-center gap-2 hover:text-orange-500">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="text-sm">Cart</span>
                            </button> */}

                            {/* Mobile Toggle */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t">
                        <div className="py-4 space-y-2 px-4">

                            {mainCategories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => handleNavigation(category.href)}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                                >
                                    {category.name}
                                </button>
                            ))}

                            <div className="pt-4 border-t space-y-2">
                                <button onClick={() => handleNavigation('/track-order')} className="flex items-center gap-2 px-4 py-2">
                                    <Package className="w-5 h-5" />
                                    <span>Track Order</span>
                                </button>

                                <button onClick={() => handleNavigation('/wishlist')} className="flex items-center gap-2 px-4 py-2">
                                    <Heart className="w-5 h-5" />
                                    <span>Wishlist</span>
                                </button>

                                <button onClick={() => handleNavigation('/admin/login')} className="flex items-center gap-2 px-4 py-2">
                                    <User className="w-5 h-5" />
                                    <span>Login</span>
                                </button>

                                <button onClick={() => handleNavigation('/cart')} className="flex items-center gap-2 px-4 py-2">
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

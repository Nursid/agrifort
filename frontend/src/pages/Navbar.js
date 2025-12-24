import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, Package, ChevronDown, Menu, X } from 'lucide-react';
import { useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [language, setLanguage] = useState('English');
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const history = useHistory();
    const location = useLocation();

    const mainCategories = [
        {
            name: 'About Us',
            href: '/about-us',
        },
        { name: 'Leaders of People', href: '/leaders-of-people' },
        { name: 'Our Portfolio', href: '/Portfolio' },
        { name: 'Farmer Wins', href: '/farmer-wins' },
        { name: 'AgriFort Highlights', href: '/lifeAtAgrifort' },
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

    // Check if current route matches the category href
    const isActive = (href) => {
        return location.pathname === href;
    };

    return (
        <div className="sticky top-0 z-50">
            {/* Main Navigation */}
            <nav className="bg-white bg-opacity-100 dark:bg-gray-900 border-b shadow-lg">
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
                                        className={`
                                            ${isActive(category.href)
                                                ? 'text-green-600 border-b-2 border-green-600'
                                                : 'text-gray-700 dark:text-gray-300 hover:text-green-500'
                                            }
                                            font-medium
                                            text-xl
                                            px-4 py-2
                                            rounded-t-lg
                                            transition-all
                                            duration-200
                                        `}
                                        style={{fontFamily: "'Lobster', 'Pacifico', cursive"}}
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
                                                        className={`
                                                            block w-full text-left px-4 py-2 text-sm
                                                            ${isActive(item.href)
                                                                ? ' text-green-600 font-medium'
                                                                : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
                                                            }
                                                        `}
                                                        style={{fontFamily: "'Lobster', 'Pacifico', cursive"}}
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

                            <button 
                                onClick={() => history.push('/admin/login')} 
                                className={`
                                    hidden md:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                                    ${isActive('/admin/login')
                                        ? 'text-white shadow-md'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-green-600'
                                    }
                                `}
                                style={{fontFamily: "'Lobster', 'Pacifico', cursive"}}
                            >
                                <User className="w-5 h-5" />
                                <span className="text-sm font-medium">Registration Center</span>
                            </button>
                            <button 
                                onClick={() => history.push('/admin/login')} 
                                className={`
                                    hidden md:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 rounded-full bg-green-600 hover:bg-green-700 text-white
                                    hover:text-white
                                `}
                                style={{fontFamily: "'Lobster', 'Pacifico', cursive"}}
                            >
                                <User className="w-5 h-5" />
                                <span className="text-sm font-medium">Workplace Login</span>
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                style={{fontFamily: "'Lobster', 'Pacifico', cursive"}}
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
                    <div className="lg:hidden border-t bg-white dark:bg-gray-900">
                        <div className="py-4 space-y-1 px-4">

                            {mainCategories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => handleNavigation(category.href)}
                                    className={`
                                        block w-full text-left px-4 py-3 rounded-lg transition-all duration-200
                                        ${isActive(category.href)
                                            ? 'bg-green-600 text-white font-semibold shadow-md'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-green-50 hover:text-green-600'
                                        }
                                    `}
                                    style={{fontFamily: "'Lobster', 'Pacifico', cursive"}}
                                >
                                    {category.name}
                                </button>
                            ))}

                            <div className="pt-4 border-t space-y-1">
                                <button 
                                    onClick={() => handleNavigation('/admin/login')} 
                                    className={`
                                        flex items-center gap-2 w-full px-4 py-3 rounded-lg transition-all duration-200
                                        ${isActive('/admin/login')
                                            ? 'bg-green-600 text-white font-semibold shadow-md'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-green-50 hover:text-green-600'
                                        }
                                    `}
                                    style={{fontFamily: "'Lobster', 'Pacifico', cursive"}}
                                >
                                    <User className="w-5 h-5" />
                                    <span>Registration Center</span>
                                </button>
                            </div>

                            <div className="pt-4 border-t space-y-1">
                                <button 
                                    onClick={() => handleNavigation('/admin/login')} 
                                    className={`
                                        flex items-center gap-2 w-full px-4 py-3 rounded-lg transition-all duration-200 bg-green-600 hover:bg-green-700 text-white
                                    hover:text-white
                                    `}
                                    style={{fontFamily: "'Lobster', 'Pacifico', cursive"}}
                                >
                                    <User className="w-5 h-5" />
                                    <span>Workplace Login</span>
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
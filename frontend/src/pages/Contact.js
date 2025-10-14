import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import BreadCrumb from './components/breadcrumb';
import team from '../assets/images/hero/agriculture-hero.jpg'

const Contact = () => {
    const [darkMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic'
        });
    }, []);

    const inquiryTypes = [
        { value: 'general', label: 'General Inquiry', icon: '💬' },
        { value: 'product', label: 'Product Information', icon: '📦' },
        { value: 'partnership', label: 'Partnership', icon: '🤝' },
        { value: 'support', label: 'Technical Support', icon: '🔧' },
        { value: 'career', label: 'Career Opportunities', icon: '💼' },
        { value: 'media', label: 'Media & Press', icon: '📰' }
    ];

    const offices = [
        {
            city: 'Mumbai',
            country: 'India',
            address: 'AgriFort Technologies Pvt. Ltd., Plot No. 123, Industrial Area, Mumbai - 400001',
            phone: '+91 22 1234 5678',
            email: 'info@agrifort.com',
            hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
            isHeadquarters: true
        },
        {
            city: 'Delhi',
            country: 'India',
            address: 'AgriFort North, Sector 18, Gurugram - 122015',
            phone: '+91 11 2345 6789',
            email: 'north@agrifort.com',
            hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
            isHeadquarters: false
        },
        {
            city: 'Bangalore',
            country: 'India',
            address: 'AgriFort South, Whitefield, Bangalore - 560066',
            phone: '+91 80 3456 7890',
            email: 'south@agrifort.com',
            hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
            isHeadquarters: false
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: '',
                inquiryType: 'general'
            });
            
            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 2000);
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
            <Navbar />
            <BreadCrumb
           
           title="Contact Us"
           bgImage={team}/>
            
            {/* Hero Banner Section */}
            <section className="pt-24 pb-12 bg-gradient-to-b from-white to-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Side - Image */}
                        <div className="relative" data-aos="fade-right">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Contact AgriFort"
                                    className="w-full h-96 object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
                                        e.target.parentElement.style.display = 'flex';
                                        e.target.parentElement.style.alignItems = 'center';
                                        e.target.parentElement.style.justifyContent = 'center';
                                    }}
                                />
                                <div className="absolute -bottom-6 -right-6">
                                    <div className="bg-white p-4 rounded-full shadow-xl">
                                        <svg className="w-12 h-12" viewBox="0 0 100 100">
                                            <circle cx="25" cy="25" r="20" fill="#22c55e"/>
                                            <circle cx="75" cy="25" r="20" fill="#059669"/>
                                            <circle cx="25" cy="75" r="20" fill="#dc2626"/>
                                            <circle cx="75" cy="75" r="20" fill="#991b1b"/>
                                            <circle cx="50" cy="50" r="15" fill="#1f2937"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6" data-aos="fade-left">
                            <h1 className="text-5xl md:text-6xl font-bold text-red-600 uppercase tracking-tight">
                                CONTACT US.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Get in touch with AgriFort Technologies for inquiries, partnerships, or technical support. 
                                Our dedicated team is here to assist you with agricultural solutions, product information, 
                                and expert guidance. We're committed to responding promptly and providing exceptional 
                                service to all our stakeholders.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-green-800 font-medium">24/7 Support</span>
                                </div>
                                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-green-800 font-medium">Quick Response</span>
                                </div>
                                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-green-800 font-medium">Expert Guidance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Hero Section */}
            <section className="relative py-12 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                            Get In Touch
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white">
                            Let's Connect
                            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                & Collaborate
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Ready to transform your agricultural practices? Get in touch with our experts 
                            for personalized solutions and support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        {/* Contact Form */}
                        <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-700 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-600 shadow-xl">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                    Send us a Message
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 shadow-sm"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 shadow-sm"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 shadow-sm"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                            Company/Organization
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 shadow-sm"
                                            placeholder="Enter your company name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Inquiry Type *
                                    </label>
                                    <select
                                        name="inquiryType"
                                        value={formData.inquiryType}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 shadow-sm"
                                    >
                                        {inquiryTypes.map((type) => (
                                            <option key={type.value} value={type.value}>
                                                {type.icon} {type.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 shadow-sm"
                                        placeholder="Enter message subject"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 resize-none shadow-sm"
                                        placeholder="Tell us about your inquiry..."
                                    />
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-200 px-4 py-3 rounded-lg">
                                        ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-green-600 text-white px-8 py-5 rounded-xl font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg text-lg"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending Message...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Our Offices
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Visit us at any of our locations across India
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offices.map((office, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-center mb-6">
                                    <div className="relative inline-block">
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                                            <span className="text-2xl">🏢</span>
                                        </div>
                                        {office.isHeadquarters && (
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">★</span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {office.city}
                                        {office.isHeadquarters && (
                                            <span className="text-sm text-yellow-600 dark:text-yellow-400 ml-2">(HQ)</span>
                                        )}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">{office.country}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-green-600 dark:text-green-400 mt-1">📍</span>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {office.address}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-green-600 dark:text-green-400">📞</span>
                                        <a href={`tel:${office.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                                            {office.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-green-600 dark:text-green-400">📧</span>
                                        <a href={`mailto:${office.email}`} className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                                            {office.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-green-600 dark:text-green-400">🕒</span>
                                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                                            {office.hours}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <a
                                        href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 hover:scale-105 active:scale-95 text-center block"
                                    >
                                        🗺️ Get Directions
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Media & Newsletter */}
            <section className="py-20 bg-green-600 dark:bg-green-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Stay Connected
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                            Follow us on social media and subscribe to our newsletter for the latest updates 
                            in agricultural innovation.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            {[
                                { name: 'Facebook', icon: '📘', url: 'https://facebook.com/agrifort' },
                                { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/agrifort' },
                                { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/agrifort' },
                                { name: 'Instagram', icon: '📷', url: 'https://instagram.com/agrifort' },
                                { name: 'YouTube', icon: '📺', url: 'https://youtube.com/agrifort' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center space-x-2"
                                >
                                    <span>{social.icon}</span>
                                    <span>{social.name}</span>
                                </a>
                            ))}
                        </div>

                        <div className="max-w-md mx-auto">
                            <p className="text-white/90 mb-4">Subscribe to our newsletter</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                                <button className="px-6 py-3 bg-white text-green-600 rounded-r-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-95">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;

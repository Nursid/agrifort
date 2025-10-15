// src/pages/Profile.jsx (Assuming this is a page component)
import React from 'react';

// Placeholder Images - **UPDATE THESE PATHS**
import BuildingImage from '../assets/emp/agri.png'; 
import LeadershipImage from '../assets/emp/team-ceo.jpg'; // Placeholder for a team lead or CEO
import FarmerImage from '../assets/emp/farmer-field.jpg'; // Placeholder for farmer engagement
import Navbar from './Navbar';
import Footer from 'components/Footer';
import BreadCrumb from './components/breadcrumb';
import team from '../assets/emp/plant2.jpg'

// Key Stats Data
const keyStats = [
    { icon: '🌍', number: '+20', label: 'Countries Served', color: 'text-red-600' },
    { icon: '🔬', number: 'ISO 9001', label: 'Certified Quality Management', color: 'text-green-600' },
    { icon: '🤝', number: '10,000+', label: 'Distributors & Partners', color: 'text-blue-600' },
];

const Profile = () => {
    return (
        <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
            <Navbar />
             <BreadCrumb
           
           title="Profile"
           bgImage={team}/>
            {/* --- Section 1: Hero Section (Full Width Visual) --- */}
            <section className="relative h-[60vh] overflow-hidden">
                <img 
                    src={BuildingImage} 
                    alt="AgriFort Technologies Corporate Building" 
                    className="w-full h-full object-cover brightness-75"
                    data-aos="fade-in"
                />
                
                {/* Hero Content Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                    <div className="text-center text-white" data-aos="fade-up" data-aos-delay="200">
                        <h1 className="text-5xl bg-blue-100 text-red-500 md:text-7xl font-extrabold rounded-md uppercase tracking-tight mb-4">
                            AGRIFORT <span className='text-blue-800'>TECHNOLOGIES </span>
                        </h1>
                        <p className="text-xl  text-green-700 md:text-2xl font-light italic mb-8 border-b border-gray/100 pb-4">
                           <span className='bg-yellow-200 rounded-lg'> The Global Catalyst for Sustainable Agricultural Solutions.</span>
                        </p>
                        <a href="/about/history" className="inline-block px-8 py-3 bg-gray-500 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition-all duration-300 shadow-xl">
                            See Our History
                        </a>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Core Narrative: Our Mission and Commitment --- */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Title with Thin Line Separator */}
                    <div className="text-center mx-auto max-w-lg mb-16" data-aos="fade-up">
                        <div className="w-16 h-px bg-red-600 mx-auto mb-3"></div> 
                        <h2 className="text-3xl font-bold tracking-tight uppercase text-gray-800 dark:text-gray-100">
                            OUR PROFILE: Driving Sustainable Growth
                        </h2>
                        <div className="w-16 h-px bg-red-600 mx-auto mt-3"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        
                        {/* Left Column: Mission Text */}
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">Our Mission Statement</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                AgriFort Technologies is dedicated to **revolutionizing agriculture** through high-efficacy, eco-friendly crop solutions, underpinned by our commitment to scientific rigor and unwavering ethical standards.
                            </p>

                            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center">
                                    <span className="text-red-600 mr-3 text-xl">✓</span>
                                    **Innovation:** We invest heavily in R&D to deliver proprietary biological and nutrient platforms.
                                </li>
                                <li className="flex items-center">
                                    <span className="text-red-600 mr-3 text-xl">✓</span>
                                    **Quality:** Maintaining the highest ethical standards in every aspect of our operations, from lab to field.
                                </li>
                                <li className="flex items-center">
                                    <span className="text-red-600 mr-3 text-xl">✓</span>
                                    **Global Reach:** Empowering farmers and distributors across continents with tools for superior yields.
                                </li>
                            </ul>
                        </div>

                        {/* Right Column: Visual and Block Quote */}
                        <div data-aos="fade-left" data-aos-duration="1000" className="relative">
                            <img 
                                src={FarmerImage} 
                                alt="Farmers in a field" 
                                className="w-full h-80 object-cover rounded-xl shadow-2xl mb-6"
                            />
                            <blockquote className="p-6 bg-red-50 border-l-4 border-red-600 text-gray-800 dark:bg-gray-800 dark:text-gray-200 italic rounded-md shadow-md">
                                "We are uncompromising in our pursuit of excellence, consistently delivering high-quality products that transcend into the careers we nurture."
                                <footer className="mt-2 text-sm font-semibold text-red-600">— AgriFort Leadership</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 3: Leadership Section (Simplified Team Showcase) --- */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12" data-aos="fade-up">
                        Meet Our Leadership
                    </h2>

                    {/* Simple Card for one leader (or map through 3 for a small team) */}
                    <div className="max-w-md mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-xl transform hover:shadow-2xl transition-all duration-300" data-aos="zoom-in" data-aos-delay="200">
                        <img 
                            src={LeadershipImage} 
                            alt="CEO Profile" 
                            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-green-600"
                        />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mr. Ankur Patel</h3>
                        <p className="text-red-600 font-semibold mb-4">Chief Executive Officer</p>
                        <p className="text-gray-600 dark:text-gray-300 italic">
                            "Innovation guided by integrity is the soil from which true excellence grows."
                        </p>
                    </div>

                    <a href="/ourteam" className="mt-12 inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300">
                        Meet the Entire Team
                    </a>
                </div>
            </section>

            {/* --- Section 4: Trust Builders (Key Stats & CTA) --- */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up">
                        GLOBAL REACH & CERTIFICATIONS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {keyStats.map((stat, index) => (
                            <div 
                                key={index} 
                                className="text-center p-6 bg-green-50 dark:bg-gray-800 rounded-lg shadow-md"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <span className={`text-5xl ${stat.color} mb-3 block`}>{stat.icon}</span>
                                <p className="text-3xl font-extrabold text-gray-900 dark:text-white">{stat.number}</p>
                                <p className="text-gray-600 dark:text-gray-300 mt-1 uppercase text-sm tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA to Values Page */}
                    <div className="text-center mt-12 p-8 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-600 rounded-lg shadow-inner" data-aos="zoom-in">
                        <p className="text-xl text-gray-800 dark:text-gray-200 mb-4">
                            We are guided by our compass of integrity, quality, and our core values.
                        </p>
                        <a href="/about/history" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
                            Explore Our Core Values →
                        </a>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Profile;
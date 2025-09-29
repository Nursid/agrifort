import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../components/Footer';

const OurTeam = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState('all');

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic'
        });
    }, []);

    const departments = [
        { id: 'all', name: 'All Team', icon: '👥' },
        { id: 'leadership', name: 'Leadership', icon: '👔' },
        { id: 'rd', name: 'R&D', icon: '🔬' },
        { id: 'sales', name: 'Sales & Marketing', icon: '📈' },
        { id: 'operations', name: 'Operations', icon: '⚙️' }
    ];

    const teamMembers = [
        {
            id: 1,
            name: 'Dr. Rajesh Kumar',
            position: 'Chief Executive Officer',
            department: 'leadership',
            image: '/assets/img/team-1-800x800.jpg',
            bio: 'Visionary leader with 25+ years in agricultural biotechnology. PhD in Plant Pathology from IARI.',
            experience: '25+ Years',
            education: 'PhD, Plant Pathology',
            expertise: ['Strategic Planning', 'Business Development', 'Team Leadership'],
            linkedin: 'https://linkedin.com/in/rajesh-kumar',
            email: 'rajesh.kumar@agrifort.com'
        },
        {
            id: 2,
            name: 'Dr. Priya Sharma',
            position: 'Chief Technology Officer',
            department: 'rd',
            image: '/assets/img/team-2-800x800.jpg',
            bio: 'Innovation-driven scientist specializing in bio-stimulant development and sustainable agriculture.',
            experience: '20+ Years',
            education: 'PhD, Biotechnology',
            expertise: ['R&D Management', 'Product Development', 'Innovation'],
            linkedin: 'https://linkedin.com/in/priya-sharma',
            email: 'priya.sharma@agrifort.com'
        },
        {
            id: 3,
            name: 'Amit Patel',
            position: 'Head of Sales & Marketing',
            department: 'sales',
            image: '/assets/img/team-3-800x800.jpg',
            bio: 'Results-oriented professional with extensive experience in agricultural market expansion.',
            experience: '18+ Years',
            education: 'MBA, Marketing',
            expertise: ['Sales Strategy', 'Market Analysis', 'Customer Relations'],
            linkedin: 'https://linkedin.com/in/amit-patel',
            email: 'amit.patel@agrifort.com'
        },
        {
            id: 4,
            name: 'Dr. Sunita Singh',
            position: 'Head of Research & Development',
            department: 'rd',
            image: '/assets/img/team-4-470x470.png',
            bio: 'Leading researcher in crop protection and bio-stimulant formulations.',
            experience: '22+ Years',
            education: 'PhD, Agricultural Chemistry',
            expertise: ['Research', 'Formulation', 'Quality Control'],
            linkedin: 'https://linkedin.com/in/sunita-singh',
            email: 'sunita.singh@agrifort.com'
        },
        {
            id: 5,
            name: 'Vikram Reddy',
            position: 'Operations Director',
            department: 'operations',
            image: '/assets/img/team-1-800x800.jpg',
            bio: 'Operations expert ensuring seamless production and supply chain management.',
            experience: '16+ Years',
            education: 'MBA, Operations',
            expertise: ['Supply Chain', 'Production', 'Quality Assurance'],
            linkedin: 'https://linkedin.com/in/vikram-reddy',
            email: 'vikram.reddy@agrifort.com'
        },
        {
            id: 6,
            name: 'Dr. Neha Gupta',
            position: 'Senior Research Scientist',
            department: 'rd',
            image: '/assets/img/team-2-800x800.jpg',
            bio: 'Specialist in microbial formulations and sustainable farming solutions.',
            experience: '12+ Years',
            education: 'PhD, Microbiology',
            expertise: ['Microbiology', 'Bio-stimulants', 'Field Trials'],
            linkedin: 'https://linkedin.com/in/neha-gupta',
            email: 'neha.gupta@agrifort.com'
        },
        {
            id: 7,
            name: 'Ravi Kumar',
            position: 'Regional Sales Manager',
            department: 'sales',
            image: '/assets/img/team-3-800x800.jpg',
            bio: 'Experienced sales professional with deep understanding of farmer needs.',
            experience: '14+ Years',
            education: 'B.Sc, Agriculture',
            expertise: ['Sales Management', 'Farmer Relations', 'Territory Development'],
            linkedin: 'https://linkedin.com/in/ravi-kumar',
            email: 'ravi.kumar@agrifort.com'
        },
        {
            id: 8,
            name: 'Sneha Joshi',
            position: 'Quality Assurance Manager',
            department: 'operations',
            image: '/assets/img/team-4-470x470.png',
            bio: 'Quality expert ensuring highest standards in product development and manufacturing.',
            experience: '10+ Years',
            education: 'M.Sc, Chemistry',
            expertise: ['Quality Control', 'Testing', 'Compliance'],
            linkedin: 'https://linkedin.com/in/sneha-joshi',
            email: 'sneha.joshi@agrifort.com'
        }
    ];

    const filteredMembers = selectedDepartment === 'all' 
        ? teamMembers 
        : teamMembers.filter(member => member.department === selectedDepartment);

    const leadershipTeam = teamMembers.filter(member => member.department === 'leadership');

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                            Meet Our Team
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white">
                            The People Behind
                            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                Agricultural Innovation
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Our diverse team of scientists, researchers, and agricultural experts work together 
                            to develop cutting-edge solutions that empower farmers worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div 
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Leadership Team
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Meet the visionary leaders driving AgriFort's mission of agricultural innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {leadershipTeam.map((member, index) => (
                            <div
                                key={member.id}
                                className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                                    <div className="relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full object-cover shadow-lg"
                                        />
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                            {member.name}
                                        </h3>
                                        <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
                                            {member.position}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                            {member.bio}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 dark:text-gray-400">
                                            <span>📚 {member.education}</span>
                                            <span>⏰ {member.experience}</span>
                                        </div>
                                        <div className="flex space-x-4 mt-4">
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                            >
                                                💼 LinkedIn
                                            </a>
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="text-green-600 hover:text-green-800 transition-colors duration-200"
                                            >
                                                📧 Email
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Department Filter */}
            <section className="py-12 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {departments.map((dept) => (
                            <button
                                key={dept.id}
                                onClick={() => setSelectedDepartment(dept.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 ${
                                    selectedDepartment === dept.id
                                        ? 'bg-green-600 text-white shadow-lg'
                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700'
                                }`}
                            >
                                <span>{dept.icon}</span>
                                <span>{dept.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members Grid */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div 
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Our Expert Team
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Dedicated professionals working across research, sales, and operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredMembers.filter(member => member.department !== 'leadership').map((member, index) => (
                            <div
                                key={member.id}
                                className="group bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-center">
                                    <div className="relative mb-6">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-green-600 dark:text-green-400 font-semibold mb-3 text-sm">
                                        {member.position}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                        {member.bio}
                                    </p>
                                    
                                    <div className="space-y-2 mb-4">
                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                            📚 {member.education}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                            ⏰ {member.experience}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex justify-center space-x-4">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
                                        >
                                            💼
                                        </a>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="text-green-600 hover:text-green-800 transition-colors duration-200 text-sm"
                                        >
                                            📧
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Culture Section */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                                Our Culture
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                At AgriFort, we believe that great products come from great people. Our culture 
                                is built on collaboration, innovation, and a shared passion for agricultural advancement.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: '🤝',
                                        title: 'Collaborative Environment',
                                        description: 'We work together across departments to achieve common goals.'
                                    },
                                    {
                                        icon: '💡',
                                        title: 'Innovation Focus',
                                        description: 'Continuous learning and experimentation drive our success.'
                                    },
                                    {
                                        icon: '🌱',
                                        title: 'Sustainability Mindset',
                                        description: 'Every decision considers environmental and social impact.'
                                    },
                                    {
                                        icon: '🎯',
                                        title: 'Results-Driven',
                                        description: 'We measure success by the impact we create for farmers.'
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-2xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                                    Join Our Team
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                                    We're always looking for passionate individuals to join our mission of 
                                    transforming agriculture through innovation.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Competitive compensation packages',
                                        'Professional development opportunities',
                                        'Flexible work arrangements',
                                        'Health and wellness programs',
                                        'Innovation-driven projects'
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 text-center">
                                    <Link
                                        to="/contact"
                                        className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg inline-block"
                                    >
                                        View Open Positions
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OurTeam;

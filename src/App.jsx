'use client';

import { useState, useEffect } from 'react';

export default function App() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        interest: 'Software Development',
    });

    // Slider data
    const sliderData = [
        {
            image: 'boy (1).jpg',
            title: 'Empowering Future Tech Leaders',
            subtitle:
                'Join our innovative training programs designed for high school graduates and undergraduates',
        },
        {
            image: 'girl (5).jpg',
            title: 'From Classrooms to Code — Beichini Builds Careers',
            subtitle:
                "Gain practical skills that employers are looking for in today's tech industry",
        },
        {
            image: 'girl (4).jpg',
            title: 'Start Your Journey in Tech With Us Today!',
            subtitle:
                'We empower high school students by offering comprehensive coding practices that enhance their technical skills.',
        },
    ];

    // Programs data
    const programsData = [
        {
            title: 'Software Development',
            icon: '💻',
            description:
                'Master full-stack development, front-end design, and application deployment. Learn Python, JavaScript, HTML/CSS, and more.',
            tags: ['Beginner Friendly', 'Certification Provided', 'Hands-on Labs'],
        },
        {
            title: 'Networking',
            icon: '🌐',
            description:
                'Understand network design, configuration, and security. Get hands-on with Cisco, LAN/WAN, routing, and switching.',
            tags: ['Certification Provided', 'Hands-on Labs'],
        },
        {
            title: 'Multimedia',
            icon: '🎨',
            description:
                'Learn digital storytelling, audio/video editing, animation, and visual communication using Adobe tools and more.',
            tags: ['Beginner Friendly', 'Portfolio Building'],
        },
        {
            title: 'Computer System Architecture',
            icon: '🖥️',
            description:
                'Dive into the foundations of hardware, microprocessors, memory design, and system performance optimization.',
            tags: ['Advanced', 'Certification Provided', 'Hands-on Labs'],
        },
    ];

    // Impact data
    const impactData = [
        {
            icon: '🎓',
            title: 'Graduates Trained',
            value: '500+',
            description: 'successful students since launch',
        },
        {
            icon: '🛠️',
            title: 'Projects Built',
            value: '40+',
            description: 'real-world tech projects developed',
        },
        {
            icon: '💼',
            title: 'Employment Success',
            value: '80%',
            description: 'placement rate into internships or jobs',
        },
        {
            icon: '🧑‍💻',
            title: 'Partnerships',
            value: '15+',
            description: 'collaborations with local tech companies and schools',
        },
    ];

    // Testimonials data
    const testimonialData = [
        {
            quote: 'Beichini turned my passion into a profession! I landed my first coding job right after graduating.',
            author: 'Jamal K.',
            role: 'Software Developer',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
            quote: 'The instructors made complex topics simple. The Networking course changed my life.',
            author: 'Lucy M.',
            role: 'Network Engineer',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        {
            quote: 'From zero to designing animations! The Multimedia track gave me a creative career path.',
            author: 'Elvis T.',
            role: 'Multimedia Designer',
            image: 'https://randomuser.me/api/portraits/men/68.jpg',
        },
    ];

    // Auto-rotate slider
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % sliderData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
            name: '',
            email: '',
            message: '',
            interest: 'Software Development',
        });
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Navigation */}
            <nav className="bg-white shadow-md fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <span className="text-blue-600 font-bold text-2xl">Beichini</span>
                                <span className="text-gray-700 font-light text-2xl ml-1">Ltd</span>
                            </div>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => setActiveTab('home')}
                                className={`px-3 py-2 text-sm font-medium ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                            >
                                Home
                            </button>
                            <button
                                onClick={() => setActiveTab('programs')}
                                className={`px-3 py-2 text-sm font-medium ${activeTab === 'programs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                            >
                                Our Programs
                            </button>
                            <button
                                onClick={() => setActiveTab('impact')}
                                className={`px-3 py-2 text-sm font-medium ${activeTab === 'impact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                            >
                                Our Impact
                            </button>
                            <button
                                onClick={() => setActiveTab('testimonials')}
                                className={`px-3 py-2 text-sm font-medium ${activeTab === 'testimonials' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                            >
                                Testimonials
                            </button>
                            <button
                                onClick={() => setActiveTab('contact')}
                                className={`px-3 py-2 text-sm font-medium ${activeTab === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                            >
                                Contact
                            </button>
                            <button className="ml-4 px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
                                Apply Now
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button
                                onClick={() => {
                                    setActiveTab('home');
                                    setIsMenuOpen(false);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeTab === 'home' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                Home
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('programs');
                                    setIsMenuOpen(false);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeTab === 'programs' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                Our Programs
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('impact');
                                    setIsMenuOpen(false);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeTab === 'impact' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                Our Impact
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('testimonials');
                                    setIsMenuOpen(false);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeTab === 'testimonials' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                Testimonials
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('contact');
                                    setIsMenuOpen(false);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeTab === 'contact' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                Contact
                            </button>
                            <button className="w-full mt-2 px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="pt-16">
                {/* Home Tab */}
                {activeTab === 'home' && (
                    <div>
                        {/* Hero Slider */}
                        <div className="relative h-[100vh] md:h-[100vh] overflow-hidden">
                            {sliderData.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <div className="absolute inset-0 bg-black opacity-40"></div>
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                                            {slide.title}
                                        </h1>
                                        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
                                            {slide.subtitle}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <button
                                                onClick={() => setActiveTab('programs')}
                                                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                                            >
                                                Explore Our Programs
                                            </button>
                                            <button className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition duration-300">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Slider controls */}
                            <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 ">
                                {sliderData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveSlide(index)}
                                        className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-white/50'}`}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        {/* Quick Overview */}
                        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        Why Choose Beichini Ltd?
                                    </h2>
                                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                        We empower recent high school graduates and undergraduates
                                        with hands-on skills in the most in-demand tech fields.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                        <div className="text-blue-600 text-4xl mb-4">🚀</div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Industry-Relevant Skills
                                        </h3>
                                        <p className="text-gray-600">
                                            Our curriculum is designed with input from industry
                                            leaders to ensure you learn what employers need.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                        <div className="text-blue-600 text-4xl mb-4">👨‍🏫</div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Expert Instructors
                                        </h3>
                                        <p className="text-gray-600">
                                            Learn from professionals with years of experience in
                                            their respective tech fields.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                        <div className="text-blue-600 text-4xl mb-4">🔧</div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Hands-On Learning
                                        </h3>
                                        <p className="text-gray-600">
                                            Build real projects that you can showcase to potential
                                            employers in your portfolio.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-12 text-center">
                                    <button
                                        onClick={() => setActiveTab('programs')}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                                    >
                                        View Our Programs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Programs Tab */}
                {activeTab === 'programs' && (
                    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Explore Our Training Programs
                                </h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                    Choose from our specialized tracks designed to prepare you for a
                                    successful career in technology.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {programsData.map((program, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="text-4xl mr-4">{program.icon}</div>
                                            <h3 className="text-2xl font-semibold text-gray-900">
                                                {program.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 mb-6">{program.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {program.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                                            Learn More
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 bg-blue-50 p-8 rounded-lg">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Ready to Start Your Tech Journey?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Our next cohort begins soon. Apply now to secure your spot and
                                    take the first step toward your tech career.
                                </p>
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Impact Tab */}
                {activeTab === 'impact' && (
                    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Our Impact
                                </h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                    See how Beichini Ltd is transforming lives and building the next
                                    generation of tech professionals.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                                {impactData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-md text-center"
                                    >
                                        <div className="text-5xl mb-4">{item.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <div className="text-3xl font-bold text-blue-600 mb-2">
                                            {item.value}
                                        </div>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                    Students in Action
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                                        alt="Students collaborating"
                                        className="rounded-lg h-40 w-full object-cover"
                                    />

                                    <img
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="Coding session"
                                        className="rounded-lg h-40 w-full object-cover"
                                    />

                                    <img
                                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="Group project"
                                        className="rounded-lg h-40 w-full object-cover"
                                    />

                                    <img
                                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="Graduation ceremony"
                                        className="rounded-lg h-40 w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-16 text-center">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Our Partners
                                </h3>
                                <div className="flex flex-wrap justify-center gap-8 opacity-70">
                                    <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
                                        Partner 1
                                    </div>
                                    <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
                                        Partner 2
                                    </div>
                                    <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
                                        Partner 3
                                    </div>
                                    <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
                                        Partner 4
                                    </div>
                                    <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
                                        Partner 5
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Testimonials Tab */}
                {activeTab === 'testimonials' && (
                    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    What Our Students Say
                                </h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                    Hear from our graduates about how Beichini Ltd transformed their
                                    careers.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {testimonialData.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
                                    >
                                        <div className="flex items-center mb-6">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                className="w-16 h-16 rounded-full mr-4 object-cover"
                                            />

                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {testimonial.author}
                                                </h3>
                                                <p className="text-gray-600">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic mb-4">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="text-yellow-400 flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Join Our Success Stories
                                </h3>
                                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                    Our graduates are working at top companies across Rwanda and
                                    beyond. Start your journey with us today.
                                </p>
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contact Tab */}
                {activeTab === 'contact' && (
                    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Get in Touch With Us
                                </h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                    Have questions about our programs? We're here to help you take
                                    the next step in your tech journey.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                        Contact Information
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="text-blue-600 mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    />

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-medium text-gray-900">
                                                    Address
                                                </h4>
                                                <p className="text-gray-600">
                                                    Beichini Ltd, Kigali Rwanda
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="text-blue-600 mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-medium text-gray-900">
                                                    Email
                                                </h4>
                                                <p className="text-gray-600">beichini@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="text-blue-600 mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-medium text-gray-900">
                                                    Phone
                                                </h4>
                                                <p className="text-gray-600">0784778722</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="text-blue-600 mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-medium text-gray-900">
                                                    Working Hours
                                                </h4>
                                                <p className="text-gray-600">Mon–Fri, 9AM–5PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="text-lg font-medium text-gray-900 mb-4">
                                            Follow Us
                                        </h4>
                                        <div className="flex space-x-4">
                                            <a
                                                href="#"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="text-blue-400 hover:text-blue-600"
                                            >
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="text-red-600 hover:text-red-800">
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="text-blue-700 hover:text-blue-900"
                                            >
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                        Send Us a Message
                                    </h3>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="name"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="email"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="interest"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Interested in
                                            </label>
                                            <select
                                                id="interest"
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="Software Development">
                                                    Software Development
                                                </option>
                                                <option value="Networking">Networking</option>
                                                <option value="Multimedia">Multimedia</option>
                                                <option value="Computer System Architecture">
                                                    Computer System Architecture
                                                </option>
                                            </select>
                                        </div>

                                        <div className="mb-6">
                                            <label
                                                htmlFor="message"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                    Frequently Asked Questions
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                                            How long are your training programs?
                                        </h4>
                                        <p className="text-gray-600">
                                            Our programs typically run for 12-16 weeks, depending on
                                            the track and intensity level you choose.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                                            Do I need prior experience to join?
                                        </h4>
                                        <p className="text-gray-600">
                                            No prior experience is required for most of our
                                            programs. We start with the fundamentals and build up to
                                            advanced concepts.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                                            Are there payment plans available?
                                        </h4>
                                        <p className="text-gray-600">
                                            Yes, we offer flexible payment plans and scholarship
                                            opportunities for qualified students. Contact us for
                                            more details.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                                            Do you offer job placement assistance?
                                        </h4>
                                        <p className="text-gray-600">
                                            Yes, we have a dedicated career services team that helps
                                            with resume building, interview preparation, and
                                            connecting students with our industry partners.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-blue-400 font-bold text-2xl">Beichini</span>
                                <span className="text-gray-300 font-light text-2xl ml-1">Ltd</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Empowering the next generation of tech professionals with hands-on
                                skills and real-world experience.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Programs</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Software Development
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Networking
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Multimedia
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Computer System Architecture
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        View All Programs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Student Portal
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="text-gray-400">Kigali, Rwanda</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-gray-400">beichini@gmail.com</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <span className="text-gray-400">0784778722</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Beichini Ltd. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

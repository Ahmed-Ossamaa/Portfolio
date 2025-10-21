import { useTheme } from '../context/ThemContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navigation = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
    const { darkMode, toggleTheme } = useTheme();
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    return (
        <nav className="fixed top-0 w-full bg-white dark:bg-gradient-to-b from-black to-gray-800 shadow-md z-50 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        Portfolio
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`capitalize ${activeSection === section
                                        ? 'text-blue-600 dark:text-blue-400 border-b-1'
                                        : 'text-gray-700 dark:text-gray-300'
                                    } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg  hover:scale-110 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <FaSun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <FaMoon className="w-5 h-5 text-gray-700" />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg"
                        >
                            {mobileMenuOpen ? (
                                <FaTimes className="w-5 h-5" />
                            ) : (
                                <FaBars className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className="block w-full text-left px-4 py-2 capitalize text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
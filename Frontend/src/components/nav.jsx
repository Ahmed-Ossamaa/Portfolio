import { useTheme } from '../context/ThemContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import NavLogo from '../components/nav-logo';
import { Link } from 'react-router-dom';

const Navigation = ({sections=[], activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="flex justify-between items-center h-14">

                    {/* Left: Logo */}
                    <div className="flex-1 flex justify-start">
                        <Link to="/" className="flex flex-none items-center space-x-2">
                            <NavLogo />
                        </Link>
                    </div>

                    {/* Middle: Desktop Menu (Perfectly Centered) */}
                    <div className="hidden md:flex flex-none justify-center items-center space-x-8">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`capitalize text-sm font-medium transition-all relative py-1 cursor-pointer
                                    ${activeSection === section
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-500'
                                    }`}
                            >
                                {section}
                                {activeSection === section && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right: Actions (takes 1/3 or flex-1) */}
                    <div className="flex-1 flex justify-end items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <FaSun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <FaMoon className="w-5 h-5 text-gray-700" />
                            )}
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300"
                        >
                            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`
                    md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${mobileMenuOpen ? 'max-h-64 opacity-100 pb-6' : 'max-h-0 opacity-0'}
                `}>
                    <div className="flex flex-col space-y-3">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => {
                                    scrollToSection(section);
                                    setMobileMenuOpen(false);
                                }}
                                className="capitalize text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
import React, { useState } from 'react';
import { useTheme } from '../context/ThemContext';
import Navigation from '../components/nav';
import HeroSection from '../components/hero';
import AboutSection from '../components/about';
import SkillsSection from '../components/skills';
import ProjectsSection from '../components/myProjects';
import ContactSection from '../components/contact';
import Footer from '../components/footer';



// Main App Component
export default function Portfolio() {
    const { darkMode } = useTheme();
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



    const scrollToSection = (id) => {
        setActiveSection(id);
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
                <Navigation
                    activeSection={activeSection}
                    scrollToSection={scrollToSection}
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
            </div>
        </div>

    );
}
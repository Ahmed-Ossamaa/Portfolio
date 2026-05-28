import { AiOutlineDownload } from "react-icons/ai";
import resume from '../../assets/Ahmed-Ossama-Full-stack-Developer-CV.pdf';
import { useState, useEffect } from 'react';

const HeroSection = () => {
    const [text, setText] = useState('');
    const fullText = "Full Stack Developer";

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 90);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section id="home" className="pt-20 pb-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-black dark:via-gray-800 dark:to-black"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <div className="mb-2">
                    <img src='./MyPP2.jpg' className="w-60 h-60 mx-auto rounded-full"></img>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                    <span className="bg-gradient-to-br from-black via-blue-900 to-gray-800 bg-clip-text text-transparent dark:from-gray-900 dark:via-white dark:to-gray-400">
                        Ahmed Ossama
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-semibold h-8 md:h-10">
                    {text}<span className="animate-blink">|</span>
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
                        Get In Touch
                    </a>
                    <a href={resume}
                        download
                        className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full  hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2">
                        Download CV
                        <AiOutlineDownload className="inline-block ml-2 w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
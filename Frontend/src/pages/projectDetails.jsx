import { useParams } from "react-router-dom";
import { projects } from "../constants/projects";
import { useState } from "react";
import Navigation from "../components/nav";

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    const [current, setCurrent] = useState(0);

    if (!project) return <div className="flex h-screen items-center justify-center">Project not found</div>;

    const nextSlide = () => {
        setCurrent((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
    };

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <Navigation />

            <main className="w-full pt-12 sm:pt-20 pb-12 ">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Carousel Container */}
                    <div className="mb-20 max-w-5xl mx-auto">
                        <div className="relative group bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg  h-[300px] sm:h-[450px] ">
                            <div className="flex items-center justify-center  w-full h-full">
                                <img
                                    src={project.screenshots[current]}
                                    alt={`${project.title} screenshot`}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Controls */}
                            {project.screenshots.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40  text-white p-3 rounded-full  hover:backdrop-blur-sm transition-all "
                                        aria-label="Previous image"
                                    >
                                        <span className="block border-t-2 border-l-2 border-white w-3 h-3 -rotate-45 ml-1"></span>
                                    </button>

                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white p-3 rounded-full transition-all hover:backdrop-blur-sm"
                                        aria-label="Next image"
                                    >
                                        <span className="block border-t-2 border-r-2 border-white w-3 h-3 rotate-45 mr-1"></span>
                                    </button>



                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                                        {project.screenshots.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`h-1.5 rounded-full transition-all ${index === current ? "w-6 bg-purple-500/50" : "w-1.5 bg-gray-400/50"}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        <p className="text-red-500 text-center text-xs   mt-3">
                            Note: Some full-page screenshots may appear visually inconsistent due to the fixed sidebar layout.
                            The sidebar remains static while the main content scrolls,
                            which may give the impression of misalignment in extended views.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                {project.title}
                            </h1>
                            <div className="space-y-6">
                                {project?.detailedDesc?.map((section, index) => (
                                    <div key={index}>
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {section.title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-md text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-3">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold transition-colors"
                                >
                                    View Code
                                </a>
                            </div>


                            {/* Demo credentials */}
                            {project?.credentials && (
                                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl  shadow-md">
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Demo Access
                                    </p>
                                    <hr className="border-gray-200 dark:border-gray-700 mb-3" />

                                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
                                        {Object.entries(project.credentials).map(([role, data]) => (
                                            <div key={role}>
                                                <p className="font-medium text-gray-800 dark:text-gray-200">
                                                    {role}:
                                                </p>
                                                <p>Email: {data.email}</p>
                                                <p>Password: {data.password}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-xs text-red-500 mt-2 text-center">
                                        *Admin Demo account has restricted actions
                                        <br /> (no destructive operations)
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
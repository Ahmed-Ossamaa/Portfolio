import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative h-full">

            {/* Glow */}
            <div className="absolute -inset-1 bg-gray-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

            <Link
                to={`/project/${project.id}`}
                className="relative h-full flex flex-col bg-white dark:bg-gray-900 rounded-xl overflow-hidden"
            >
                {/* Image */}
                <div className="h-50 w-full flex items-center justify-center relative overflow-hidden">
                    <img
                        src={project.cover}
                        alt={project.title}
                        className="h-full w-full object-fill"
                    />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>

            {/*Action btn (external links) */}
            <div className="absolute bottom-4 left-6 flex space-x-4">
                {typeof project.github === 'string' ? (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors"
                    >
                        <FaGithub className="w-4 h-4 mr-1" />
                        Code
                    </a>
                ) : (
                    <>
                        <a
                            href={project.github[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors"
                        >
                            <FaGithub className="w-4 h-4 mr-1" />
                            FE
                        </a>
                        <a
                            href={project.github[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors"
                        >
                            <FaGithub className="w-4 h-4 mr-1" />
                            BE
                        </a>
                    </>
                )}

                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors"
                >
                    <FaExternalLinkAlt className="w-4 h-4 mr-1" />
                    Demo
                </a>
            </div>

            <Link
                title="go to project details"
                to={`/project/${project.id}`}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-purple-600 text-white opacity-70 group-hover:opacity-100 hover:scale-110 transition"
            >
                <FaArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
};

export default ProjectCard;
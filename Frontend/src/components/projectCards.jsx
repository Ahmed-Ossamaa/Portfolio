import { FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative">
            <div className="absolute -inset-1  bg-gray-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500  "></div>
            <div className="relative h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
                <div className="h-60  flex items-center justify-center relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex space-x-4">
                        <a href={project.github} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                            <FaGithub className="w-5 h-5 mr-1" />
                            Code
                        </a>
                        <a href={project.demo} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                            <FaExternalLinkAlt className="w-5 h-5 mr-1" />
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
import { projects } from "../../constants/projects";
import ProjectCard from "./projectCards";
const ProjectsSection = () => {


    return (
        <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
            <p className="mt-10 text-center font-medium text-red-500">
                Note: Some projects have Admin dashboard, you can check the provided Screen Shots in project details page.
            </p>
        </section>
    );
};

export default ProjectsSection;
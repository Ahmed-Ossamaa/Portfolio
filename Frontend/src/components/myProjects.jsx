import ProjectCard from "./projectCards";
const ProjectsSection = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "SPA e-commerce solution with user authentication, Admin dashboard (Management and Stats), using only Vanilla JS. (No Frameworks)",
            tech: ["JS", "HTML5", "CSS3","Bootstrap"],
            github: "https://github.com/Ahmed-Ossamaa/Ecommerce-ITI-Vanilla-js",
            demo: "https://e-commerce-iti-delta.vercel.app/",
            image: "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        },
        {
            title: "Book Tracker",
            description: "Book tracking app with full CRUD operations and JWT auth and pagination. Admin Dashboard featuring role-based access control for user and book management",
            tech: ["React","Node.js" ,"Express", "MongoDB", "JWT","Tailwind CSS", "cloudinary"],
            github: "https://github.com/Ahmed-Ossamaa/book-tracker",
            demo: "https://book-tracker-delta-pearl.vercel.app/",
            image: "booktracker.jpeg"
        },
        {
            title: "Skill-up",
            description: "Goal tracking app with user authentication and goal management features. implementing OOP and SOLID principles.",
            tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "MUI", "cloudinary"],
            github: "https://github.com/Ahmed-Ossamaa/skill-up",
            demo: "#",
            image: "skillUp.jpg"
        }
    ];

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
        </section>
    );
};

export default ProjectsSection;
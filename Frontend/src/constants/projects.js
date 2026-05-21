export const projects = [
    {
        id: "Schedio",
        title: "Schedio (Full-Stack)",
        description: "A multi-tenant, enterprise-grade task scheduling and project management platform built to orchestrate complex team workflows. It features an advanced 4-tier Role-Based Access Control (RBAC) architecture, automated background queues for precise task execution, and a centralized global settings engine for dynamic workspace customization.",
        tech: ["Node.js", "TypeScript", "Nest.js", "PostgreSQL", "Redis", "BullMQ", "Docker", "Next.js", "React", "Tailwind CSS V4", "React-Query", "Zustand", "Zod", "Jest", "Swagger"],
        github: "https://github.com/Ahmed-Ossamaa/Task-Scheduler",
        demo: "https://schedio-chi.vercel.app/",
        cover: "schedio.PNG",
        screenshots: ["/schedio.PNG", "/schedio/login.webp", "/schedio/admin-all-orgs.webp", "/schedio/admin-all-users.webp", "/schedio/admin-all-users-search.webp", "/schedio/admin-analytics.webp", "/schedio/admin-archived-users.webp", "/schedio/admin-full-dark-overview.webp", "/schedio/admin-sys-settings.webp", "/schedio/add-emp.webp", "/schedio/org-profile.webp", "/schedio/edit-org-profile.webp"],
        detailedDesc: [
            {
                title: "Overview",
                content: "Schedio is a full-stack, multi-tenant task and organization management platform designed to streamline team workflows within companies. It provides a complete environment for managing teams, projects, and tasks through clearly separated user roles and dashboards."
            },
            {
                title: "Roles & Access Control",
                content: "The system is built around four main roles: Platform Admin, Organization Manager, Employee, and Guest. Each role has a dedicated dashboard and permissions. When a user signs up, they are automatically registered as an Organization Manager, allowing them to create and manage their own company and team."
            },
            {
                title: "Organization & Team Management",
                content: "Managers can create organizations, invite employees via email, and assign them initial credentials. Invited users receive a verification link to activate their accounts and join the organization. Managers can also control roles (manager or employee), archive users, and restore them when needed."
            },
            {
                title: "Project & Task Management",
                content: "Managers can create multiple projects within their organization and assign tasks to employees or themselves. Each task includes a title, description, deadline, priority, and status. Employees can view all organization projects and tasks in read-only mode, while managing and completing their own assigned tasks."
            },
            {
                title: "Task Lifecycle & Automation",
                content: "Tasks follow a controlled lifecycle. They remain pending until completed, and if a deadline passes without completion, they are automatically marked as overdue using background job processing. Managers can update task details, but cannot revert a task back to pending unless the deadline is moved to a future date."
            },
            {
                title: "Archiving & Data Lifecycle",
                content: "The platform implements a soft-delete mechanism. Managers can archive employees and projects along with their associated tasks. Archived entities can be restored at any time, but if not restored, they are permanently deleted after 30 days through automated background jobs."
            },
            {
                title: "Admin Dashboard & System Control",
                content: "The Platform Admin has full control over the system. This includes managing all users (view, archive, restore, ban, and permanent deletion) and managing organizations (archive and restore with all related data). The admin also has access to system-wide monitoring tools and controls."
            },
            {
                title: "Analytics & Monitoring",
                content: "The admin dashboard includes analytics and monitoring features such as total users, organizations, projects, and tasks. It also provides visual insights like user role distribution, organization growth, and user growth trends, along with activity logs and critical system error tracking."
            },
            {
                title: "Communication & System Settings",
                content: "The platform includes a message center where admins can review messages submitted through the contact page and archive them for automatic deletion after 30 days. Admins can also manage global system settings such as application branding, landing page content, contact information, and social links."
            },
            {
                title: "Authentication & Security",
                content: "Authentication is implemented using JWT with token rotation for enhanced security, along with OAuth 2.0 support for Google login. The system also includes rate limiting to protect APIs and enforce secure access across all roles."
            },
            {
                title: "Performance & Background Processing",
                content: "The backend leverages Redis for caching frequently accessed data such as system settings, improving performance and reducing database load. Background jobs and scheduling, including overdue task handling and delayed deletions, are managed using BullMQ."
            },
            {
                title: "Search & Filtering",
                content: "Multi-strategy search approach to balance flexibility and performance. Full-text search (PostgreSQL tsvector) is used for user names and emails to enable tokenized and relevant matching. Prefix-based queries (ILIKE 'term%') are applied for fast and predictable email lookup, while partial matching (ILIKE '%term%') is used for organization names to support flexible filtering. This combination ensures efficient and user-friendly search across different data types."
            },
            {
                title: "Data & Media Handling",
                content: "The system uses PostgreSQL as the primary database, with a separate database configured for integration testing. Media storage and image optimization are handled via Cloudinary, ensuring efficient asset delivery."
            },
            {
                title: "Developer Experience",
                content: "The backend is fully documented using Swagger for clear API exploration and testing. The project follows a modular and scalable architecture, with strong emphasis on maintainability, clean code practices, and testability."
            }
        ],
        credentials: [{
            Admin: {
                email: 'demo@admin.com',
                password: '123456_Ao'
            },
            Manager: {
                email: 'demo@manager.com',
                password: '123456_Ao'
            },
            Employee: {
                email: 'demo@emp.com',
                password: '123456_Ao'
            }
        }]
    },
    {
        id: "Skill-Up",
        title: "Skill-Up (Full-Stack)",
        description: `
                A comprehensive full-stack education platform designed to orchestrate seamless online learning experiences and complex course management.
                It features a rigorous 3-tier Role-Based Access Control architecture isolating dashboards for students,
                instructors, and administrators, alongside an optimized video delivery pipeline and secure Stripe payment integrations.`,
        tech: ["Node.js", "Express.js", "MongoDB", "Joi", "Next.js", "React.js", "Zustand", "Tawilwind CSS", "Framer Motion"],
        github: "https://github.com/Ahmed-Ossamaa/skill-up",
        demo: "https://skill-up-edu.vercel.app/",
        cover: "Skill-Up-SS.PNG",
        // detailedDesc: [
        //     {

        //     }
        // ],
        screenshots: ["/Skill-Up-SS.PNG", "/Skill-Up-SS.PNG"],
        'detailed-desc': '',
        // credentials: [{}]
    },
    {
        id: "El-Mister",
        title: "El-Mister LMS (Full-Stack)",
        description: `
                Full-stack Private Lessons platform.
                Key technical implementations include JWT auth with role-based authorization (RBAC),
                Socket.io for real-time Chat between users and Notification system.
                AI Integration(for C.S), Sripe Payment Integration,OAuth Integration.
                an optimized video delivery system for lessons, and automated email services for account security.
                The platform also features 4 Dashboards for instructors,Parents, students, and admins.`,
        tech: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Next.js", "React.js", "Redux", "CSS3", "Tawilwind CSS", "Framer Motion"],
        github: ["https://github.com/Ahmed-Ossamaa/lms-elmister-iti-api", "https://github.com/Ahmed-Ossamaa/lms-elmister-iti-ui"],
        demo: "https://lms-elmister-iti-ui.vercel.app/",
        cover: "El-Mister.PNG",
        screenshots: ["/El-Mister.PNG", "/ayaam.PNG", "/El-Mister.PNG"],
        detailedDesc: [
            {

            }
        ],
        // credentials: []
    },

    {
        id: "Ayaam",
        title: "E-Commerce Platform",
        description: "SPA e-commerce with user authentication, Admin dashboard (Management and Stats), using only Vanilla JS. (No Frameworks)",
        tech: ["JS", "HTML5", "CSS3", "Bootstrap"],
        github: "https://github.com/Ahmed-Ossamaa/Ecommerce-ITI-Vanilla-js",
        demo: "https://e-commerce-iti-delta.vercel.app/",
        cover: "ayaam.PNG",
        screenshots: ["/ayaam.PNG", "/ayaam.PNG"],
        detailedDesc: [
            {

            }
        ],
        // credentials: []
    },
    {
        id: "Book Tracker",
        title: "Book Tracker (Full-Stack)",
        description: `
                Full-stack book tracking platform built for seamless digital library and reading management.
                It features secure authentication and a dedicated administrative dashboard 
                equipped with role-based access control for complete oversight of user accounts and catalog data.`,
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/Ahmed-Ossamaa/book-tracker",
        demo: "https://book-tracker-delta-pearl.vercel.app/",
        cover: "booktracker.jpeg",
        screenshots: ["/booktracker.jpeg", "/booktracker.jpeg"],
        detailedDesc: [],
        // credentials: []
    },

    {
        id: "Nala",
        title: "Nala Automotive (Full-Stack)",
        description: `
                A dynamic full-stack automotive resale platform tailored for sellers to streamline digital vehicle inventory and buyer interactions.
                It features secure authentication and a dedicated seller-centric administrative dashboard, 
                providing complete role-based control over the vehicle catalog and user management.`,
        tech: ["React", "Node.js", "Express", "MongoDB", "joi", "Tailwind CSS", "React-Query"],
        github: "https://github.com/Ahmed-Ossamaa/Nala-Automotive",
        demo: "https://nala-automotive.vercel.app/",
        cover: "Nala-auto.png",
        screenshots: ["/Nala-auto.png", "/Nala-auto.png"],
        detailedDesc: [
            {

            }
        ],
        // credentials: [{}]
    },

];
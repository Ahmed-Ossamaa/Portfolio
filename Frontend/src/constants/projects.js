export const projects = [
    {
        id: "Schedio",
        title: "Schedio (Full-Stack)",
        description: "A multi-tenant, enterprise-grade task scheduling and project management platform built to orchestrate complex team workflows. It features an advanced 4-tier Role-Based Access Control (RBAC) architecture, automated background queues for precise task execution, and a centralized global settings engine for dynamic workspace customization.",
        tech: ["Node.js", "TypeScript", "Nest.js", "PostgreSQL", "Redis", "BullMQ", "Docker", "Next.js", "React", "Tailwind CSS V4", "React-Query", "Zustand", "Zod", "Jest", "Swagger"],
        github: "https://github.com/Ahmed-Ossamaa/Task-Scheduler",
        demo: "https://schedio-chi.vercel.app/",
        cover: "/schedio.webp",
        screenshots: ["/schedio.webp", "/schedio/login.webp", "/schedio/admin-all-orgs.webp", "/schedio/admin-all-users.webp", "/schedio/admin-all-users-search.webp", "/schedio/admin-analytics.webp", "/schedio/admin-archived-users.webp", "/schedio/admin-full-dark-overview.webp", "/schedio/admin-sys-settings.webp", "/schedio/add-emp.webp", "/schedio/org-profile.webp", "/schedio/edit-org-profile.webp"],
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
        credentials: {
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
        }
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

        detailedDesc: [
            {
                title: "Overview",
                content: "Skill-Up is a full-stack e-learning platform designed to connect instructors and students within a structured and scalable learning environment. It enables course creation, enrollment, progress tracking, and performance insights, providing a complete system for managing and delivering online education."
            },
            {
                title: "Roles & Access Control",
                content: "The platform is built around three main roles: Admin, Instructor, and Student. Each role has a dedicated dashboard and clearly defined permissions. Instructors manage courses and content, students enroll and consume learning materials, while admins oversee platform operations and user management."
            },
            {
                title: "Course Creation & Management",
                content: "Instructors can create and manage courses through a dedicated dashboard, including course details, structured content, and organization of learning materials. Courses are designed to be modular, allowing efficient updates and clear content hierarchy."
            },
            {
                title: "Enrollment & Payments",
                content: "Students can browse and enroll in courses through an integrated payment system powered by Stripe. The platform ensures secure and seamless transactions, allowing users to access paid content immediately after successful enrollment."
            },
            {
                title: "Learning Experience & Progress Tracking",
                content: "Enrolled students can access course content in a structured format and track their learning progress. The system maintains progress states, enabling students to resume courses بسهولة and monitor completion over time."
            },
            {
                title: "Reviews & Ratings",
                content: "Students can provide feedback on courses through ratings and reviews. This helps improve course quality, enhances trust, and assists other students in discovering valuable content."
            },
            {
                title: "Dashboards & Analytics",
                content: "Each role is supported with tailored dashboards and insights. Instructors can view course performance, enrollment statistics, and student engagement metrics. Students can track their enrolled courses and progress, while admins have a global overview of users, courses, and platform activity."
            },
            {
                title: "Admin Dashboard & Platform Control",
                content: "Admins have full control over the platform, including managing users, monitoring courses, and maintaining system integrity. They can enforce platform rules, ensure content quality, and oversee overall system usage."
            },
            {
                title: "Authentication & Security",
                content: "Authentication is implemented using JWT-based authorization with role-based access control, ensuring secure access to protected resources and enforcing permissions across all user roles."
            },
            {
                title: "Performance & Scalability",
                content: "The system is designed with scalability in mind, using efficient backend architecture and optimized database queries to handle course data, enrollments, and user interactions while maintaining performance."
            },
            {
                title: "Media & Content Management",
                content: "Course assets such as images and media are managed using Cloudinary, ensuring optimized delivery, efficient storage, and fast content loading across the platform."
            },
            {
                title: "Search & Course Discovery",
                content: "The platform provides flexible search and filtering capabilities, allowing users to find courses based on titles, categories, or keywords, improving discoverability and user experience."
            },
            {
                title: "System Architecture",
                content: "The backend follows a modular architecture with clear separation of concerns. It is structured into dedicated layers for models, services, controllers, and routes, with dependency injection handled through a centralized container. This design improves maintainability, scalability, and code organization."
            }
        ],
        cover: "/Skill-Up-SS.webp",
        screenshots: [
            "/Skill-Up-SS.webp", "/skill-up/skill-up-full-landing.webp",
            "/skill-up/all-courses-page.webp", "/skill-up/instructor-public-profile.webp",
            "/skill-up/my-profile.webp",
            "/skill-up/admin-db.webp",
            "/skill-up/admin-users.webp", "/skill-up/admin-courses.webp",
            "/skill-up/admin-requests.webp", "/skill-up/admin-msg.webp",
            "/skill-up/admin-cat.jpg", "/skill-up/admin-courses.webp",
            "/skill-up/instructor-overview.webp", "/skill-up/instructor-courses.webp",
            "/skill-up/instructor-create-course.webp", "/skill-up/instructor-students.webp",
            "/skill-up/instructor-reviews.webp", "/skill-up/instructor-analytics.webp",
            "/skill-up/std-db.webp", "/skill-up/std-my-learning.webp",
            "/skill-up/std-cert.webp", "/skill-up/std-cert-preview.webp",
        ],
        credentials: {
            Admin: {
                email: 'demo@admin.com',
                password: '123456_Ao'
            },
            Instructor: {
                email: 'yuri@gmail.com',
                password: '123456_Ao'
            },
            Student: {
                email: 'youssef@gmail.com',
                password: '123456_Ao'
            }
        }
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
        cover: "El-Mister.webp",
        screenshots: ["/El-Mister.webp"],
        detailedDesc: [
            {
                title: "Overview",
                content: "El-Mister is a comprehensive Learning Management System (LMS)  designed to support a full educational ecosystem, including students, teachers, parents, and administrators. It provides robust features for authentication, course and group management, subscriptions, and financial workflows, forming a scalable backend for modern e-learning platforms."
            },
            {
                title: "Roles & Access Control",
                content: "The system supports multiple roles including Admin, Teacher, Parent, and Student(child), each with distinct permissions and responsibilities. Role-based access control is enforced across all endpoints, ensuring secure and isolated operations for each user type."
            },
            {
                title: "Authentication & Security",
                content: "Authentication is implemented using JWT with access and refresh tokens, enabling secure session management. The system includes email verification, password reset functionality, OAuth integration with Google, and provider linking/unlinking. Additional security measures include password hashing and API rate limiting."
            },
            {
                title: "User Management & Profiles",
                content: "Users can manage their profiles, upload avatars via Cloudinary, and complete profile information. The system supports flexible account management across different roles, ensuring a personalized experience for each user type."
            },
            {
                title: "Course Management",
                content: "Teachers can create, update, and manage courses with support for thumbnails, subject categorization, and grade-level filtering. Courses can be configured as free or paid and follow a lifecycle model with statuses such as draft, published, and archived."
            },
            {
                title: "Group Management",
                content: "The platform supports the creation and management of study groups, including online, offline, and hybrid formats. Teachers can define schedules, manage capacity, and track enrollments, while controlling group availability through open and closed states."
            },
            {
                title: "Subscriptions & Billing",
                content: "The system integrates Stripe to handle recurring monthly subscriptions for group enrollment. It supports automated invoicing through webhooks and includes built-in platform fee calculation, enabling real-world subscription-based monetization."
            },
            {
                title: "Teacher Payout System",
                content: "Teachers can request payouts based on their accumulated balance, while admins review and approve or reject these requests. The system ensures accurate balance tracking and reflects all financial operations directly in teacher profiles."
            },
            {
                title: "Email & Notification System",
                content: "The platform includes a full email service powered by Nodemailer, supporting email verification, password reset flows, and system notifications, ensuring smooth communication between the platform and its users."
            },
            {
                title: "File Upload & Media Handling",
                content: "File uploads are handled באמצעות Multer, with Cloudinary integration for efficient media storage and delivery. This enables scalable handling of user avatars and course-related assets."
            },
            {
                title: "Data Validation & Integrity",
                content: "Request validation is implemented using Joi, ensuring data consistency and protecting the system from invalid inputs across all API endpoints."
            },
            {
                title: "System Architecture",
                content: "The backend follows a modular and scalable architecture built with Express.js, using a clear separation of concerns across routes, controllers, services, and models. This structure improves maintainability, readability, and ease of extension."
            },
            {
                title: "Performance & Scalability",
                content: "The system is designed to handle real-world usage scenarios, including concurrent enrollments, subscription workflows, and media handling, while maintaining performance through efficient database operations and optimized request handling."
            }
        ],
        // credentials: []
    },

    {
        id: "Ayaam",
        title: "E-Commerce",
        description: "SPA e-commerce with user authentication, Admin dashboard (Management and Stats), using only Vanilla JS. (No Frameworks)",
        tech: ["JS", "HTML5", "CSS3", "Bootstrap"],
        github: "https://github.com/Ahmed-Ossamaa/Ecommerce-ITI-Vanilla-js",
        demo: "https://e-commerce-iti-delta.vercel.app/",
        cover: "ayaam.webp",
        screenshots: [
            "/ayaam.webp", "/ayaam/all-prod.webp", "/ayaam/admin-users.webp",
            "/ayaam/admin-edit-user.webp", "/ayaam/admin-user-stats.webp",
            "/ayaam/admin-products.webp", "/ayaam/admin-product-details.webp",
            "/ayaam/admin-order-stats.webp", "/ayaam/admin-seller-stats.webp",
            "/ayaam/cust-order-track.webp", "/ayaam/seller-products.webp",
            "/ayaam/seller-add-prod.webp", "/ayaam/seller-sales-history.webp",
            "/ayaam/seller-order-tracking.webp", "/ayaam/cart.webp"
        ],
        detailedDesc: [
            {
                title: "Overview",
                content: "Ayaam E-commerce is a single-page application (SPA) built using vanilla JavaScript as a team project during ITI training. The project focuses on implementing core e-commerce functionality without relying on frameworks, emphasizing a deep understanding of frontend fundamentals and application structure."
            },
            {
                title: "Architecture & Approach",
                content: "The application was designed as a SPA using pure JavaScript, handling routing, state updates, and UI rendering manually. LocalStorage was used as a virtual database to simulate persistent data storage and manage application state."
            },
            {
                title: "User Roles & Data Management",
                content: "The system supports multiple user types including Admins, Sellers, and Customers. Separate data models were maintained for each role, enabling product management, user interactions, and administrative control within the simulated environment."
            },
            {
                title: "Product Management",
                content: "Products can be created and managed within the system, with support for categorization, search, and filtering. These features enhance usability and simulate real-world e-commerce browsing experiences."
            },
            {
                title: "Learning Outcomes",
                content: "This project strengthened core JavaScript skills, including DOM manipulation, state management, event handling, and building scalable UI logic without frameworks. It also provided hands-on experience in structuring applications and simulating backend behavior on the client side."
            }
        ],
        credentials: {
            Admin: {
                email: "osama@example.com",
                password: "123456",
            },
            Seller: {
                email: "mariam@example.com",
                password: "123456",
            }
        }
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
        cover: "/Booktracker.webp",
        screenshots: [
            "/Booktracker.webp", "/btracker/my-lib.webp", "/btracker/admin-overview.webp",
            "/btracker/admin-all-users.webp", "/btracker/admin-all-books.webp",
            "/btracker/admin-analytics.webp", "/btracker/admin-msgs.webp",

        ],
        detailedDesc: [
            {
                title: "Overview",
                content:
                    "A full-stack book tracking platform designed to help users manage their personal digital library and monitor their reading progress. The system provides a clean and intuitive experience for organizing books, tracking status, and maintaining a structured reading workflow.",
            },
            {
                title: "Authentication & Authorization",
                content:
                    "Implements secure JWT-based authentication with role-based access control (RBAC). Users can securely access their own data, while administrators have elevated permissions to manage the entire system, ensuring proper separation of concerns and data protection.",
            },
            {
                title: "Admin Dashboard & Management",
                content:
                    "Includes a dedicated admin dashboard that allows full control over users and book catalog. Admins can perform CRUD operations, monitor platform data, and maintain system integrity through centralized management tools.",
            },
            {
                title: "Backend Architecture",
                content:
                    "Built using Node.js and Express following RESTful API design principles. MongoDB is used for data persistence with Mongoose for schema modeling, enabling scalable and structured data handling across users and books.",
            },
            {
                title: "Security & Performance",
                content:
                    "Enhanced with multiple layers of security including rate limiting, data sanitization, and HTTP protection headers. The system is designed to handle requests efficiently while protecting against common vulnerabilities.",
            },
            {
                title: "Media Handling & Validation",
                content:
                    "Supports image uploads for book covers & user avatars using Cloudinary integration. Input validation is handled using Joi to ensure data consistency and reliability across all API endpoints.",
            },
        ],
        credentials: {
            Admin: {
                email: "demo@admin.com",
                password: "123456_Ao",
            },
            User: {
                email: "demo@user.com",
                password: "123456_Ao",
            }
        }
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
        cover: "/nala/home.webp",
        screenshots: [
            "/nala/browse-cars.webp", "/nala/car-details.webp",
            "/nala/admin-overview.webp",
            "/nala/admin-cars.webp", "/nala/admin-add-car.webp",
            "/nala/admin-analytics.webp", "/nala/admin-inquiry.webp",
            "/nala/admin-inquiry-details.webp",
        ],
        detailedDesc: [
            {
                title: "Overview",
                content:
                    "A dynamic full-stack automotive resale platform designed to streamline vehicle listing and buyer interaction. The system enables sellers to manage their digital inventory while providing customers with a smooth browsing and purchasing experience.",
            },
            {
                title: "Authentication & Role System",
                content:
                    "Implements secure JWT-based authentication with role-based access control (RBAC). Sellers act as administrators with full control over their listings and platform data, while customers can browse vehicles, interact with listings, and manage their accounts securely.",
            },
            {
                title: "Seller Dashboard & Inventory Management",
                content:
                    "Includes a seller-centric dashboard that allows full CRUD operations on vehicle listings. Sellers can add, update, and remove vehicles, manage pricing and details, and maintain full control over their inventory through an intuitive interface.",
            },
            {
                title: "Customer Experience",
                content:
                    "Customers can explore available vehicles through structured listings, with support for search and filtering to easily find relevant options. The platform focuses on usability and clarity to enhance the browsing and decision-making process.",
            },
            {
                title: "Backend Architecture",
                content:
                    "Built with Node.js and Express following RESTful API principles. MongoDB with Mongoose is used for structured and scalable data management, handling relationships between users, sellers, and vehicle listings efficiently.",
            },
            {
                title: "Security & Performance",
                content:
                    "Incorporates best practices such as rate limiting, data sanitization, and secure HTTP headers to protect the platform. The system is optimized for performance and reliability under typical marketplace usage.",
            },
        ],
        credentials: {
            Admin: {
                email: 'demo@admin.com',
                password: '123456_Ao'
            },
            Customer: {
                email: 'demo@customer.com',
                password: '123456_Ao'
            }
        }
    },

];
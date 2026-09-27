// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Prayoga Sungkowo",
    // og: "I'm a computer science senior with hefty experience in app development. Previously worked as a web developer at my university, where I built tools to support both students and educators. Currently, I'm developing an educational AI tool aimed at redefining how college students interact with AI.",
    message: "Previously worked as Software Engineer intern at PT Perkebunan Nusantara IV, based in Medan, Indonesia. Currently, I'm working as a freelancer and looking for new opportunities.",
    basedLocation: "Medan, Indonesia",
    resumeLink: "https://drive.google.com/file/d/1YWGni6NB-HOuky_SZQ6MTJMgMcRyMQuw/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/recentPotrait.jpeg'
}

const socialMediaLinks = {
    github: "https://github.com/yogasungkowo",
    linkedin: "https://www.linkedin.com/in/prayoga-sungkowo",
    medium: "",
    stackoverflow: "",
    xtwitter: ""
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "I’m Prayoga Sungkowo, a Fullstack Web Developer based in Medan, Indonesia. I specialize in Laravel, JavaScript, and DevOps with experience in CI/CD, Docker, and Cloudflare Tunnel. I’ve built systems like Kasirku 3RPonsel and PalmViews, focusing on performance, scalability, and data visualization. Currently, I’m exploring AI and cloud technologies to create smarter, more efficient web solutions.",
    ], // Separated items are paragraphs
    techStack: [
        "Laravel",
        "JavaScript",
        "Vue JS",
        "Python",
        "Docker",
        "Cloudflare"
    ],
    photo1Link: "images/potrait1.jpg",
    photo2Link: "images/potrait2.jpg",
    photo3Link: "images/potrait3.png"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Junior Programmer",
        company: {
            name: "Dinas Kominfostan Deli Serdang",
            link: "https://dinaskominfostan-ds.deliserdangkab.go.id/"
        },
        duration: "Mar 2026 - Present",
        content: [
            {
                sectionHeader: "",
                bulletPoints: [
                    "Developing and maintaining official government web applications, public service portals, and internal management systems for Deli Serdang Regency.",
                    "Collaborating with cross-functional teams to build reliable, secure, and scalable solutions using Laravel, PostgreSQL, MariaDB, and modern frontend frameworks.",
                ]
            }
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "PostgreSQL",
            "MariaDB",
            "JavaScript",
            "Bootstrap",
            "Tailwind CSS"
        ]
    },
    {
        position: "Web Programmer",
        company: {
            name: "Balai Besar POM di Medan",
            link: "https://medan.pom.go.id/"
        },
        duration: "Dec 2025 - Mar 2026",
        content: [
            {
                sectionHeader: "",
                bulletPoints: [
                    "Developed and maintained web applications to streamline internal administrative workflows and public service information.",
                    "Collaborated with cross-functional divisions to ensure data integrity, system performance, and responsive interfaces.",
                ]
            }
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "MySQL",
            "JavaScript",
            "Bootstrap",
            "Tailwind CSS"
        ]
    },
    {
        position: "Software Engineer",
        company: {
            name: "PT Perkebunan Nusantara IV",
            link: "http://www.ptpn4.co.id/id"
        },
        duration: "Oct 2024 - Jun 2025",
        content: [
            {
                sectionHeader: "",
                bulletPoints: [
                    "Built and maintained internal web applications using Laravel, enhancing operational efficiency across departments.",
                ]
            }
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "MySQL",
            "PostgreSQL",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap"
        ]
    },
]

// --- 🚀 Skills Section ---
const skills = [
    { name: "Laravel" },
    { name: "PHP" },
    { name: "JavaScript" },
    { name: "Vue.js" },
    { name: "Python" },
    { name: "Docker" },
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "Git" },
    { name: "Linux" },
    { name: "Cloudflare" },
    { name: "Bootstrap" },
    { name: "Tailwind CSS" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Node.js" },
    { name: "GitHub" },
    // If the icon is not available in simple-icons, add a customIcon:
    // { name: "Tech Name", customIcon: "🎯" },
]

// --- 📜 Certifications Section ---
const certifications = [
    {
        title: "Alibaba Cloud Certified Developer",
        issuer: "Alibaba Cloud",
        issueDate: "Jul 2024",
        expiryDate: "Jul 2026",
        credentialId: "ACCD0120030700011812",
        image: "images/alibaba_cert.jpeg",
        verifyLink: "",
        skills: ["Alibaba Cloud", "Cloud Computing", "Development"]
    },
    {
        title: "IBM Cloud Essentials",
        issuer: "IBM",
        issueDate: "Dec 2023",
        expiryDate: "",
        credentialId: "",
        image: "images/ibm-cloud-essentials.2.png",
        verifyLink: "https://www.credly.com/earner/earned/badge/ada4e4c4-a03e-4ae2-aeba-5bcad856594e",
        skills: ["IBM Cloud", "Cloud Computing", "Essentials"]
    },
    {
        title: "Asean Data Science Explorers - SAP Analytics Cloud & SAP Build Apps",
        issuer: "ASEAN Foundation",
        issueDate: "May 2024",
        expiryDate: "",
        credentialId: "3295.13/DSE/ASEAN/V/2024",
        image: "images/ADSE.jpg",
        verifyLink: "",
        skills: ["Data Science", "SAP Analytics Cloud", "SAP Build Apps"]
    },
    {
        title: "Junior Web Developer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        issueDate: "Dec 2023",
        expiryDate: "Dec 2026",
        credentialId: "62090 2513 3 0074669",
        image: "",
        verifyLink: "https://drive.google.com/file/d/1F7LEL1Ak0e62h0PlVebK10BtmZwPpAzX/view",
        skills: ["Web Development", "HTML", "CSS", "JavaScript", "PHP" ]
    },

]

// --- 🤝 Organisation & Community Section ---
const organisations = [
    {
        position: "Lead Community Management",
        organisation: {
            name: "Developer Community U",
            link: ""
        },
        duration: "Oct 2024 - May 2025",
        activities: [
            "Organized community events and workshops to promote tech education.",
            "Facilitated online discussions and coding sessions for members.",
        ],
        hashtags: [
            "Community",
            "Volunteering"
        ]
    },
    {
        position: "Member",
        organisation: {
            name: "Google Developer Student Clubs",
            link: "https://gdg.community.dev/gdg-medan/"
        },
        duration: "Jul 2024 - Oct 2024",
        activities: [
            "Join community events and workshops to enhance tech skills.",
            "Participated in online discussions and coding sessions for members.",
            "Know Google technologies and best practices through workshops and seminars.",
        ],
        hashtags: [
            "Community",
            "Volunteering",
            "Google",
            "Student"
        ]
    },
    {
        position: "Web Programming Division Lead",
        organisation: {
            name: "Cyber Security Community FIKTI UMSU",
            link: ""
        },
        duration: "March 2023 - January 2024",
        activities: [
            "Led the web programming division, organizing workshops and training sessions on web development technologies.",
            "Collaborated with other divisions to enhance the community's overall technical skills and knowledge.",
            "Join events and CTF competitions to improve cybersecurity skills.",
        ],
        hashtags: [
            "Community",
            "Volunteering",
            "Cybersecurity",
            "Web Development"
        ]
    },
    // Add more organisations here
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Kominfo Deli Serdang Project Management",
        yearCompleted: "2026",
        description: "Developed an internal project management system for Dinas Kominfostan Kabupaten Deli Serdang to organize, monitor, and track project lifecycles, task assignments, and progress updates across regional digital initiatives.",
        techStack: "PHP (Laravel), Metronic Template, Bootstrap, PostgreSQL",
        links: [
             {
                label: "",
                type: "external",
                url: "https://pm.deliserdangkab.go.id/"
            },
        ],
        imageLink: "images/project-management-kominfo.png",
        alignLeft: false
    },
    {
        projectName: "Kabupaten Deli Serdang Official Website",
        yearCompleted: "2026",
        description: "Developed the official web portal for the Deli Serdang Regency Government, delivering public information, regional news, government transparency, and integrated public services for the community.",
        techStack: "PHP (Laravel), JavaScript, PostgreSQL, Tailwind CSS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://deliserdangkab.go.id/"
            },
        ],
        imageLink: "images/web-deliserdang.png",
        alignLeft: true
    },
    {
        projectName: "Bapenda Deli Serdang Official Website",
        yearCompleted: "2026",
        description: "Developed the official website for the Regional Revenue Agency (BAPENDA) of Deli Serdang Regency to facilitate regional tax information, revenue transparency, regulatory updates, and public services.",
        techStack: "PHP (Laravel), JavaScript, PostgreSQL, Tailwind CSS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://bapenda-ds.deliserdangkab.go.id/"
            },
        ],
        imageLink: "images/web-bapenda.png",
        alignLeft: false
    },
    {
        projectName: "SAPA DELI - Disdukcapil Deli Serdang",
        yearCompleted: "2026",
        description: "Built SAPA DELI (Sistem Administrasi dan Pelayanan Adminduk Deli Serdang) for the Department of Population and Civil Registration, digitizing civil registry and administrative services with a fast, transparent, and integrated online system.",
        techStack: "PHP (Laravel), JavaScript, MariaDB, Tailwind CSS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://salakdeli.deliserdangkab.go.id/"
            },
        ],
        imageLink: "images/sapa-deli.png",
        alignLeft: true
    },
    {
        projectName: "Bestari - Attendance System BBPOM di Medan",
        yearCompleted: "2026",
        description: "Developed an intern attendance monitoring system for Balai Besar POM di Medan to track daily presence, work-from-office (WFO), and work-from-home (WFH) activities efficiently.",
        techStack: "PHP (CodeIgniter 3), MySQL, Bootstrap 5",
        links: [],
        imageLink: "images/bestari.png",
        alignLeft: false
    },
    {
        projectName: "Andaliman - Pendampingan UMKM BBPOM di Medan",
        yearCompleted: "2026",
        description: "Developed Andaliman, an assistance and technical guidance platform for MSMEs (UMKM) to streamline consultation and product registration at Balai Besar POM di Medan.",
        techStack: "PHP (CodeIgniter 3), MySQL, Tailwind CSS",
        links: [],
        imageLink: "images/andaliman.png",
        alignLeft: true
    },
    {
        projectName: "SI-Panggoaran BBPOM di Medan",
        yearCompleted: "2026",
        description: "Built SI-Panggoaran (Sistem Pelaporan Magang Orientasi dan Kunjungan), an informational portal and application system for internship, research, and PKPA applicants at Balai Besar POM di Medan.",
        techStack: "PHP (CodeIgniter 3), MySQL, Tailwind CSS",
        links: [],
        imageLink: "images/sipanggoaran.png",
        alignLeft: false
    },
    {
        projectName: "PalmViews Analytics Dashboard",
        yearCompleted: "2024",
        description: "Built PalmViews analytics dashboard for palm oil management, providing real-time insights on yield, resources, and environmental data. Integrated interactive visualizations using Highcharts.js to support data-driven decisions.",
        techStack: "PHP (Laravel), JavaScript (AJAX), MySQL, Highchart.js",
        links: [
            {
                label: "",
                type: "external",
                url: "https://palmviews.my.id/"
            },
        ],
        imageLink: "images/palmvies.png",
        alignLeft: true
    },
    {
        projectName: "Palmprotection Analytics Dashboard",
        yearCompleted: "2025",
        description: "Developed PalmProtection, a pest and fertilizer monitoring system for PTPN IV Regional II. Built with Laravel and PostgreSQL, the app enables supervisors to manage field reports, validate data, and monitor plantation health efficiently.",
        techStack: "PHP (Laravel), JavaScript (AJAX), MySQL, Highchart.js",
        links: [
            {
                label: "",
                type: "external",
                url: "https://protection.palmviews.my.id/"
            },
        ],
        imageLink: "images/palmprotection.png",
        alignLeft: false
    },
    {
        projectName: "3R Ponsel Kasirku System",
        yearCompleted: "2025",
        description: "Developed 3R Ponsel Kasirku System, a mobile point-of-sale application for small retailers. Built with Laravel and MySQL, the app streamlines sales processes, inventory management, and customer engagement.",
        techStack: "PHP (Laravel), JavaScript (AJAX), MySQL",
        links: [
            {
                label: "",
                type: "external",
                url: "https://3rponsel.prasunk.my.id/"
            },
        ],
        imageLink: "images/3rponsel.png",
        alignLeft: true
    },
    {
        projectName: "Pokdarwis Landing Page",
        yearCompleted: "2025",
        description: "Developed Pokdarwis Landing Page, a promotional website for the Pokdarwis tourism group. Built with Laravel and Tailwind CSS, the site showcases local attractions, events, and services.",
        techStack: "PHP (Laravel), JavaScript (AJAX), MySQL, Tailwind CSS, Alpine.js, Filament UI",
        links: [
            {
                label: "",
                type: "external",
                url: "https://pokdarwismerdeka.org/"
            },
        ],
        imageLink: "images/pokdarwis.png",
        alignLeft: false
    },
    {
        projectName: "Rumah Literasi Ranggi Website",
        yearCompleted: "2025",
        description: "Developed Rumah Literasi Ranggi Website, a platform to promote literacy and education in the community. Built with Laravel and Tailwind CSS, the site features educational resources, event information, and community engagement tools.",
        techStack: "PHP (Laravel), JavaScript (AJAX), MySQL, Tailwind CSS, Alpine.js",
        links: [
            {
                label: "",
                type: "external",
                url: "https://rumahliterasiranggi.id/"
            },
        ],
        imageLink: "images/rumahliterasiranggi.png",
        alignLeft: true
    },
]

const archiveLink = "https://github.com/yogasungkowo?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Reach out if you have any questions or want to collaborate on a project.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "prayogasungkowo12@gmail.com", // email takes precedance
            other: "https://www.linkedin.com/in/prayoga-sungkowo-2b4b25210a0b/" // any other link (linkedin, calendly, etc.)
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    skills,
    certifications,
    organisations,
    works,
    archiveLink,
    contact
}
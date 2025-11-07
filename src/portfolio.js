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
    resumeLink: "https://drive.google.com/file/d/1do5XagZ5Hmb4porbzoQ6dtLg0mC0Aarp/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
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
        position: "Software Engineer",
        company: {
            name: " PT Perkebunan Nusantara IV",
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
    // {
    //     position: "Math Tutor",
    //     company: {
    //         name: "Mathnasium",
    //         link: "https://www.mathnasium.com"
    //     },
    //     duration: "Jan 2022 - Aug 2022",
    //     bulletPoints: [
    //         "Provided math tutoring to students from elementary through high school, covering a range of topics from basic algebra to college-level calculus, using personalized teaching strategies.",
    //         "Designed and directed individualized learning plans, tailoring math topics evaluation to enhance understanding and improve performance in their school math classes."
    //     ],
    //     hashtags: [
    //         "Calc 1-2",
    //         "Algebra 1-3",
    //         "Discrete Math",
    //         "Statistics"
    //     ]
    // }
]

// --- 💻 Work Section ---
const works = [
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
        alignLeft: false
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
        alignLeft: true
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
        alignLeft: false
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
        alignLeft: true
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
        alignLeft: false
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
    works,
    archiveLink,
    contact
}
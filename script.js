$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Teacher", "Developer", "Leader", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Teacher", "Developer", "Leader", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 3,
                nav: false
            },
            1000:{
                items: 4,
                nav: false
            }
        }
    });

    // Portfolio filter functionality
    $('.filter-btn').click(function(){
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        var filterValue = $(this).attr('data-filter');
        
        if(filterValue === 'all') {
            $('.portfolio-item').removeClass('hide');
        } else {
            $('.portfolio-item').each(function(){
                var categories = $(this).attr('data-category');
                if(categories.includes(filterValue)) {
                    $(this).removeClass('hide');
                } else {
                    $(this).addClass('hide');
                }
            });
        }
    });
});

// Portfolio Modal functionality
const projectData = {
    'isi-suite': {
        title: 'ISI SURESTE - E-commerce Suite',
        type: 'Multi-Project Ecosystem',
        description: 'Comprehensive e-commerce solution developed for ISI SURESTE, including multiple online stores, centralized administration, API infrastructure, and point of sale system.',
        longDescription: 'As Web Master at ISI SURESTE, I was responsible for managing and administering a VPS Hosting environment running on CentOS Linux, overseeing 11 websites including 5 complete e-commerce platforms. This ecosystem was built from scratch to provide a unified solution for product management, inventory control, sales processing, and customer relationship management across multiple channels. My role included server administration, requirements gathering with stakeholders, and continuous platform optimization.',
        components: [
            'E-commerce Platform #1: Medical equipment and supplies',
            'E-commerce Platform #2: Industrial tools and machinery',
            'E-commerce Platform #3: Office supplies and furniture',
            'E-commerce Platform #4: Technology and electronics',
            'E-commerce Platform #5: Educational materials and resources',
            'Centralized Administrative Panel: Multi-store management',
            'RESTful API: Integration and data synchronization',
            'POS System: In-store sales processing',
            'Inventory Management: Real-time stock control',
            'Customer Management: CRM and loyalty programs',
            'VPS Server Administration: CentOS Linux environment',
            'Requirements Analysis: Stakeholder meetings and documentation'
        ],
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue.js', 'AJAX', 'JSON', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Websockets', 'CentOS Linux', 'VPS'],
        features: [
            'Multi-store product synchronization',
            'Centralized inventory management',
            'Real-time sales tracking and reporting',
            'Integrated payment gateway (PayPal, credit cards)',
            'Responsive design for mobile shopping',
            'SEO optimization for each store',
            'Customer account management',
            'Order tracking and fulfillment',
            'Admin dashboard with analytics',
            'API for third-party integrations',
            'VPS hosting management on CentOS Linux',
            'Server security and optimization',
            'Requirements gathering and analysis',
            'System documentation and training'
        ],
        status: 'Private - Security Restricted',
        role: 'Web Master & Full Stack Developer',
        year: '2019 - 2021'
    },
    'logar': {
        title: 'Constructores Logar S.A. de C.V.',
        type: 'Corporate Website & Internal Systems',
        description: 'Professional corporate website and comprehensive internal management system for a leading construction company in Yucatán, Mexico.',
        longDescription: 'During my time as IT Department Leader at Constructores Logar, I designed and developed their corporate website from scratch, along with a complete internal project management system for prospecting and tracking construction projects. Additionally, I managed the company\'s IT infrastructure, including network administration, computer equipment maintenance, and technical support for all departments.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
        components: [
            'Corporate Website: Responsive design and portfolio showcase',
            'Internal Management System: Prospect and project tracking',
            'Client Database: CRM and contact management',
            'Network Infrastructure: LAN/WAN administration',
            'IT Support: Hardware maintenance and troubleshooting',
            'Technical Documentation: System guides and training materials'
        ],
        features: [
            'Fully responsive corporate website',
            'Project portfolio showcase',
            'Contact form with email integration',
            'SEO optimized',
            'Internal prospect management system',
            'Project tracking and follow-up tools',
            'Client database management',
            'Network infrastructure administration',
            'Computer equipment maintenance',
            'IT technical support',
            'Modern and clean UI/UX',
            'Mobile-first approach',
            'Cross-browser compatibility'
        ],
        url: 'https://www.constructoreslogar.com',
        status: 'Live & Public',
        role: 'IT Department Leader & Web Developer',
        year: '2020'
    },
    'softrek': {
        title: 'SOFTREK Tourism & Telecommunications Platform',
        type: 'Web Application & Real-Time Systems',
        description: 'Comprehensive platform for tourism industry including Call In VoIP system and worldwide airport search engine.',
        longDescription: 'As a Full Stack Developer at SOFTREK, I developed multiple sophisticated systems including a tourism booking platform, Call In - a real-time VoIP telecommunications system using Websockets, SIP, and FreePBX integration, and a highly optimized worldwide airport search engine. The Call In project enables real-time telephony management with VoIP technology, while the airport search engine provides comprehensive search capabilities by IATA code, country, city, and airport name, optimized for speed and accuracy.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue.js', 'Express.js', 'Websockets', 'Node.js', 'AJAX', 'JSON', 'HTML5', 'CSS3', 'Bootstrap', 'VoIP', 'SIP', 'FreePBX'],
        components: [
            'Tourism Platform: Booking system and tour management',
            'Call In System: Real-time VoIP telephony with Websockets',
            'Airport Search Engine: Worldwide IATA database search',
            'FreePBX Integration: SIP and VoIP infrastructure',
            'Real-Time Communications: Websockets implementation',
            'Payment Gateway: Secure transaction processing'
        ],
        features: [
            'Tour booking and reservation system',
            'Real-time availability calendar',
            'Call In - VoIP telephony system',
            'Websockets for real-time communication',
            'SIP and FreePBX integration',
            'Worldwide airport search engine',
            'Search by IATA code, country, city, name',
            'Optimized database queries',
            'Customer account management',
            'Payment gateway integration',
            'Email notification system',
            'Admin panel for tour operators',
            'Reporting and analytics',
            'Multi-language support',
            'Mobile responsive interface',
            'Integration with third-party APIs'
        ],
        status: 'Private - Client Confidential',
        role: 'Full Stack Web Developer',
        year: '2021 - 2022'
    },
    'vue-dashboard': {
        title: 'Modern Dashboard Application',
        type: 'Frontend Application',
        description: 'Modern, reactive dashboard built with Vue.js for real-time data visualization and management.',
        longDescription: 'Currently working as Frontend Developer at Grupo CSI - Buzzword, I develop modern web applications using Vue.js framework. This dashboard project showcases real-time data visualization, interactive charts, and a responsive interface for business intelligence.',
        technologies: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'Vuex', 'Vue Router'],
        features: [
            'Real-time data updates',
            'Interactive charts and graphs',
            'Responsive dashboard layout',
            'User authentication and authorization',
            'Data filtering and search',
            'Export functionality (PDF, Excel)',
            'Dark/Light theme switching',
            'Customizable widgets',
            'RESTful API integration',
            'State management with Vuex'
        ],
        status: 'Private - Under Development',
        role: 'Frontend Vue Developer',
        year: '2024 - Present'
    },
    'laravel-api': {
        title: 'RESTful API with Laravel',
        type: 'Backend API',
        description: 'Robust and scalable RESTful API built with Laravel framework for mobile and web applications.',
        longDescription: 'This project demonstrates expertise in building secure and efficient backend APIs using Laravel. The API provides authentication, data management, and serves as the backbone for multiple frontend applications.',
        technologies: ['Laravel', 'PHP', 'MySQL', 'JWT', 'API REST', 'Postman'],
        features: [
            'RESTful API architecture',
            'JWT authentication',
            'Role-based access control',
            'Data validation and sanitization',
            'API versioning',
            'Rate limiting',
            'Comprehensive error handling',
            'Database migrations and seeders',
            'API documentation',
            'Unit and feature testing'
        ],
        status: 'Private - Production Ready',
        role: 'Backend Developer',
        year: '2023'
    },
    'ecommerce': {
        title: 'Custom E-commerce Platform',
        type: 'E-commerce Solution',
        description: 'Custom-built e-commerce platform with payment gateway integration and comprehensive inventory management.',
        longDescription: 'A complete e-commerce solution built from scratch, featuring a user-friendly shopping experience, secure payment processing, and powerful administrative tools for store management.',
        technologies: ['PHP', 'MySQL', 'JavaScript', 'PayPal API', 'Stripe', 'HTML5', 'CSS3', 'Bootstrap'],
        features: [
            'Product catalog management',
            'Shopping cart functionality',
            'Multiple payment gateway support',
            'Order management system',
            'Inventory tracking',
            'Customer accounts and order history',
            'Discount and coupon system',
            'Email notifications',
            'Sales reporting and analytics',
            'Responsive design',
            'SSL security implementation',
            'SEO optimized product pages'
        ],
        status: 'Private - In Production',
        role: 'Full Stack Developer',
        year: '2022'
    }
};

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    let scrollContent = `
        <div class="modal-section">
            <h3>Project Overview</h3>
            <p>${project.longDescription}</p>
        </div>
        
        <div class="modal-section">
            <h3>Technologies Used</h3>
            <div class="tech-stack">
                ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>${project.components ? 'Project Components' : 'Key Features'}</h3>
            <ul>
                ${(project.components || project.features).map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
    
    if (project.url) {
        scrollContent += `
            <div class="modal-section" style="text-align: center;">
                <a href="${project.url}" target="_blank" class="btn-view" style="display: inline-block; margin-top: 10px;">
                    <i class="fas fa-external-link-alt"></i> Visit Website
                </a>
            </div>
        `;
    }
    
    let modalContent = `
        <div class="modal-project-header">
            <h2>${project.title}</h2>
            <p class="project-type">${project.type}</p>
            <p class="project-meta"><strong>Role:</strong> ${project.role} | <strong>Year:</strong> ${project.year}</p>
            <p class="project-status"><strong>Status:</strong> ${project.status}</p>
        </div>
        <div class="modal-content-scroll">
            ${scrollContent}
        </div>
    `;
    
    document.getElementById('modalBody').innerHTML = modalContent;
    document.getElementById('projectModal').style.display = 'block';
}

// Close modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementsByClassName('close-modal')[0];
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
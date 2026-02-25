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
    'volksureste': {
        title: 'Volksureste E-commerce System',
        type: 'Full-Stack Multi-Platform Ecosystem',
        description: 'Complete automotive parts e-commerce platform with multi-branch management, shopping cart, payment processing, and automated shipping calculations.',
        longDescription: 'Full-stack e-commerce system for Volksureste, specializing in automotive parts sales. Built as a multi-repository ecosystem consisting of Frontend (Nuxt.js), Laravel API, Admin Panel (Vue.js), and POS System (Vue.js with Ant Design). Features comprehensive multi-branch inventory management, real-time stock tracking, advanced shopping cart with discount coupons, multiple payment gateway integration (PayPal, OpenPay), and automated shipping calculations with major carriers including in-store pickup options. Implements robust authentication with granular role-based permissions (profiles, menus, actions), user panel with order history, shipping/billing addresses, and order tracking. The catalog is organized by categories, brands, sections, and groups with powerful search capabilities.',
        technologies: ['Laravel', 'Nuxt.js 2.15.3', 'Vue.js 2', 'PHP', 'MySQL', 'Vuex', 'Vue Router', 'Bootstrap 4', 'Laravel Mix', 'Laravel Passport (OAuth2)', 'API RESTful', 'PayPal API', 'OpenPay', 'Google Maps API', 'reCAPTCHA', 'Ant Design', 'SweetAlert2'],
        components: [
            'E-commerce Frontend: Nuxt.js 2.15.3 SPA with server-side rendering',
            'Laravel API: RESTful backend with Laravel Passport OAuth2',
            'Admin Panel: Vue.js dashboard with comprehensive management tools',
            'POS System: Vue.js point of sale with Ant Design',
            'Multi-Branch Management: Real-time inventory across locations',
            'Payment Gateway Integration: PayPal, OpenPay, credit cards',
            'Shipping System: DIDI Envíos and multiple carrier integration'
        ],
        features: [
            'Shopping cart with discount coupons and local persistence',
            'Multi-branch inventory management with real-time stock',
            'Multiple payment methods (PayPal, OpenPay, credit cards)',
            'Automated shipping calculation and in-store pickup',
            'Granular authentication system with roles and permissions',
            'User panel with order history and address management',
            'Order tracking and delivery status',
            'Organized catalog (categories, brands, sections, groups)',
            'Advanced search and filtering system',
            'Notification system with SweetAlert2',
            'Google Maps integration for store locations',
            'reCAPTCHA security integration',
            'Responsive design across all platforms',
            'SEO optimized pages'
        ],
        images: [
            'images/volksureste/home.jpg',
            'images/volksureste/catalog.jpg',
            'images/volksureste/product-detail.jpg',
            'images/volksureste/cart.jpg',
            'images/volksureste/checkout.jpg',
            'images/volksureste/checkout2.jpg',
            'images/volksureste/payment.jpg',
            'images/volksureste/admin-dashboard.jpg',
            'images/volksureste/admin-inventory.jpg',
            'images/volksureste/pos-system.jpg',
            'images/volksureste/pos2.jpg',
        ],
        url: 'https://volksureste.com',
        status: 'Live & Public',
        role: 'Full Stack Developer',
        year: '2023 - 2024'
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
    `;
    
    // Add screenshots section if images exist
    if (project.images && project.images.length > 0) {
        scrollContent += `
            <div class="modal-section">
                <h3>Screenshots</h3>
                <div class="modal-images">
                    ${project.images.map(img => `<img src="${img}" alt="${project.title} screenshot" onclick="viewImageFullscreen('${img}')">`).join('')}
                </div>
            </div>
        `;
    }
    
    scrollContent += `
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

// Function to view image in fullscreen
function viewImageFullscreen(imageSrc) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: zoom-out;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 95%;
        max-height: 95%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 0 50px rgba(0, 163, 224, 0.5);
    `;
    
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    overlay.onclick = function() {
        document.body.removeChild(overlay);
    };
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
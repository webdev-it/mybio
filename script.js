// ============================================
// Abdumalik's Portfolio - Interactive Script

// ============================================
// LANGUAGE TRANSLATIONS
// ============================================
const translations = {
    en: {
        // Navigation
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_projects: 'Projects',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_creative: 'Creative',
        hero_designer: 'Designer',
        hero_and: '&',
        hero_developer: 'Developer',
        hero_subtitle: 'Hi! I am Abdumalik Abdumalikov and I craft minimal, modern digital experiences that inspire and engage',
        btn_contact: 'Get in Touch',
        btn_projects: 'View Work',
        scroll_explore: 'Scroll to explore',
        
        // About Section
        section_about: 'About Me',
        about_intro: 'I\'m a creative professional specializing in Web Design, Graphic Design, and 3D Visualization. Based in Tajikistan, I work with clients worldwide to bring their vision to life.',
        about_experience: 'Years Experience',
        about_projects: 'Projects Completed',
        about_clients: 'Happy Clients',
        
        // Skills
        section_skills: 'Skills & Tools',
        skill_design: 'Design',
        skill_3d_graphics: '3D & Graphics',
        skill_media_production: 'Media Production',
        skill_dev: 'Development',
        skill_media: 'Media',
        skill_3d: '3D',
        skill_proficiency_hint: 'Try hovering over skills to see proficiency levels',
        about_design_desc: 'UI/UX, Branding, and Visual Identity design in Figma',
        about_media_desc: 'Video editing, Photography, and Content creation',
        about_3d_desc: '3D modeling, Product visualization in Blender',
        about_dev_desc: 'HTML, CSS, JavaScript, Web technologies',
        
        // Projects Section
        section_projects: 'Featured Projects',
        section_experience: 'Experience',
        experience_title: 'Freelance Designer & Developer',
        experience_desc: 'Creating stunning web designs, 3D visualizations, and digital content for global clients. Specializing in UI/UX design, brand development, and product visualization.',
        
        // Contact Section
        section_contact: 'Let\'s Work Together',
        contact_intro: 'I\'m always interested in hearing about new projects and opportunities. Let\'s connect!',
        contact_email: 'Email',
        contact_telegram: 'Telegram',
        contact_location: 'Location',
        contact_also: 'Also on',
        contact_form_name: 'Your name',
        contact_form_email: 'Your email',
        contact_form_message: 'Your message',
        contact_form_submit: 'Send Message',
        
        // Footer
        footer_copyright: '© 2026 Abdumalik Abdumalikov. All rights reserved.',
        footer_made_with: 'Made with ❤️ and some magic ✨'
    },
    ru: {
        // Навигация
        nav_about: 'Обо мне',
        nav_skills: 'Навыки',
        nav_projects: 'Проекты',
        nav_contact: 'Контакт',
        
        // Hero Section
        hero_creative: 'Креативный',
        hero_designer: 'Дизайнер',
        hero_and: '&',
        hero_developer: 'Разработчик',
        hero_subtitle: 'Привет! Я Абдумалик Абдумаликов и создаю минималистичные, современные цифровые впечатления, которые вдохновляют и привлекают',
        btn_contact: 'Связаться со мной',
        btn_projects: 'Смотреть работы',
        scroll_explore: 'Прокрутите для изучения',
        
        // About Section
        section_about: 'Обо мне',
        about_intro: 'Я креативный профессионал, специализирующийся на веб-дизайне, графическом дизайне и 3D-визуализации. Базируюсь в Таджикистане, работаю с клиентами по всему миру, воплощая их видение в жизнь.',
        about_experience: 'Лет Опыта',
        about_projects: 'Завершённых Проектов',
        about_clients: 'Довольных Клиентов',
        
        // Skills
        section_skills: 'Навыки и Инструменты',
        skill_design: 'Дизайн',
        skill_3d_graphics: '3D и Графика',
        skill_media_production: 'Производство Медиа',
        skill_dev: 'Разработка',
        skill_media: 'Медиа',
        skill_3d: '3D',
        skill_proficiency_hint: 'Наведите на навык, чтобы увидеть уровень владения',
        about_design_desc: 'UI/UX дизайн, Брендинг и Фирменный стиль в Figma',
        about_media_desc: 'Видеомонтаж, Фотография и Создание контента',
        about_3d_desc: '3D моделирование, Визуализация продуктов в Blender',
        about_dev_desc: 'HTML, CSS, JavaScript, Веб-технологии',
        
        // Projects Section
        section_projects: 'Избранные Проекты',
        section_experience: 'Опыт',
        experience_title: 'Фрилансер Дизайнер и Разработчик',
        experience_desc: 'Создание потрясающих веб-дизайнов, 3D-визуализаций и цифрового контента для глобальных клиентов. Специализируюсь на дизайне UI/UX, разработке брендов и визуализации продуктов.',
        
        // Contact Section
        section_contact: 'Давайте Работать Вместе',
        contact_intro: 'Я всегда заинтересован услышать о новых проектах и возможностях. Давайте свяжемся!',
        contact_email: 'Почта',
        contact_telegram: 'Телеграм',
        contact_location: 'Местоположение',
        contact_also: 'Также в',
        contact_form_name: 'Ваше имя',
        contact_form_email: 'Ваша почта',
        contact_form_message: 'Ваше сообщение',
        contact_form_submit: 'Отправить сообщение',
        
        // Footer
        footer_copyright: '© 2026 Абдумалик Абдумаликов. Все права защищены.',
        footer_made_with: 'Сделано с ❤️ и немного магии ✨'
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateTranslations();
    updateLanguageToggle();
}

function updateTranslations() {
    const translationData = translations[currentLanguage];
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translationData[key]) {
            element.textContent = translationData[key];
        }
    });
    
    // Update form placeholders and button text
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (nameInput) nameInput.placeholder = translationData.contact_form_name || 'Your name';
    if (emailInput) emailInput.placeholder = translationData.contact_form_email || 'Your email';
    if (messageInput) messageInput.placeholder = translationData.contact_form_message || 'Your message';
    
    document.documentElement.lang = currentLanguage;
}

function updateLanguageToggle() {
    const toggle = document.getElementById('languageToggle');
    if (!toggle) return;
    
    const current = toggle.querySelector('.lang-current');
    const other = toggle.querySelector('.lang-other');
    
    if (currentLanguage === 'en') {
        current.textContent = 'EN';
        other.textContent = 'РУ';
    } else {
        current.textContent = 'РУ';
        other.textContent = 'EN';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateTranslations();
    initializePortfolio();
});

function initializePortfolio() {
    setupLanguageToggle();
    setupNavigation();
    setupThemeToggle();
    setupEasterEggs();
    setupScrollAnimations();
    setupLoadingBar();
    setupProjectCards();
    setupSkillTags();
    setupParallax();
    setupKeyboardShortcuts();
    setupEmailCopy();
}


function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}


function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    const toggleTheme = () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        themeToggle.querySelector('.toggle-icon').textContent = isDarkMode ? '🌙' : '☀️';
    };
    
    // Check saved preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('.toggle-icon').textContent = '🌙';
    }
    
    themeToggle.addEventListener('click', toggleTheme);
}

// ============================================
// LANGUAGE TOGGLE
// ============================================
function setupLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    if (!languageToggle) return;
    
    languageToggle.addEventListener('click', () => {
        const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        setLanguage(newLanguage);
    });
    
    languageToggle.style.cursor = 'pointer';
}


function setupEasterEggs() {
    
    const easterEgg = document.getElementById('easterEgg');
    const easterModal = document.getElementById('easterEggModal');
    const modalClose = document.querySelector('.modal-close');
    let easterEggClicked = false;
    
    if (easterEgg && easterModal) {
        easterEgg.addEventListener('click', () => {
            easterEggClicked = !easterEggClicked;
            if (easterEggClicked) {
                easterModal.classList.remove('hidden');
                triggerConfetti();
            }
        });
        
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                easterModal.classList.add('hidden');
            });
        }
        
        easterModal.addEventListener('click', (e) => {
            if (e.target === easterModal) {
                easterModal.classList.add('hidden');
            }
        });
    }
    
    // Easter Egg: Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (!e.key) return;
        const key = e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' ? e.key : e.key.toLowerCase();
        
        if (key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                triggerKonamiEffect();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Easter Egg: Triple click on logo
    const logo = document.querySelector('.nav-logo');
    let clickCount = 0;
    let clickTimeout;
    
    if (logo) {
        logo.addEventListener('click', () => {
            clickCount++;
            clearTimeout(clickTimeout);
            
            if (clickCount === 3) {
                triggerLogoEffect();
                clickCount = 0;
            }
            
            clickTimeout = setTimeout(() => {
                clickCount = 0;
            }, 500);
        });
    }
}


function triggerConfetti() {
    const confetti = document.getElementById('confetti');
    if (!confetti) return;
    
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.style.position = 'absolute';
        piece.style.width = '10px';
        piece.style.height = '10px';
        piece.style.background = ['#FF6B35', '#00A9CE', '#FFE66D', '#95E1D3'][Math.floor(Math.random() * 4)];
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = '-10px';
        piece.style.borderRadius = '50%';
        piece.style.pointerEvents = 'none';
        piece.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
        confetti.appendChild(piece);
        
        setTimeout(() => piece.remove(), 4000);
    }
    
    if (!document.querySelector('style[data-fall]')) {
        const style = document.createElement('style');
        style.setAttribute('data-fall', 'true');
        style.innerHTML = `
            @keyframes fall {
                to {
                    transform: translateY(300px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}


function triggerKonamiEffect() {
    const body = document.body;
    const originalFilter = body.style.filter;
    body.style.filter = 'invert(1)';
    
    setTimeout(() => {
        body.style.filter = originalFilter;
    }, 200);
    
    setTimeout(() => {
        body.style.filter = 'invert(1)';
    }, 400);
    
    setTimeout(() => {
        body.style.filter = originalFilter;
    }, 600);
}


function triggerLogoEffect() {
    const logo = document.querySelector('.nav-logo');
    if (!logo) return;
    
    logo.style.animation = 'spin 0.6s ease-in-out';
    
    setTimeout(() => {
        logo.style.animation = 'none';
    }, 600);
}



function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section, .project-card, .list-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}


function setupLoadingBar() {
    const loadingBar = document.querySelector('.loading-bar');
    if (!loadingBar) return;
    
    setTimeout(() => {
        loadingBar.style.opacity = '0';
        loadingBar.style.pointerEvents = 'none';
        loadingBar.style.transition = 'opacity 0.5s';
    }, 500);
}


function setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}


function setupSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.15) rotate(2deg)';
            tag.style.boxShadow = '0 10px 25px rgba(255, 107, 53, 0.3)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1) rotate(0)';
            tag.style.boxShadow = 'none';
        });
    });
}


function setupParallax() {
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        const orbs = document.querySelectorAll('.orb');
        orbs.forEach((orb, index) => {
            orb.style.transform = `translateY(${parallax * (0.5 + index * 0.2)}px)`;
        });
    });
}


function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('easterEggModal');
            if (modal) {
                modal.classList.add('hidden');
            }
        }
    });
}


function setupEmailCopy() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const email = link.href.replace('mailto:', '');
            navigator.clipboard.writeText(email).then(() => {
                const originalText = link.textContent;
                link.textContent = '✓ Copied!';
                
                setTimeout(() => {
                    link.textContent = originalText;
                }, 2000);
            });
        });
    });
}


console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold; color: #FF6B35;');
console.log('%cDid you know you can:', 'font-size: 14px; color: #00A9CE;');
console.log('%c1. Press the Konami Code (↑↑↓↓←→←→BA)', 'color: #95E1D3;');
console.log('%c2. Triple-click the logo for a surprise', 'color: #95E1D3;');
console.log('%c3. Click the footer easter egg message', 'color: #95E1D3;');
console.log('%c4. Toggle theme with the sun/moon button', 'color: #95E1D3;');
console.log('%c5. Click email addresses to copy them', 'color: #95E1D3;');
console.log('%cHave fun exploring! 🚀', 'font-size: 14px; font-weight: bold; color: #FFE66D;');



// ============================================
// MOBILE MENU TOGGLE
// ============================================
function setupMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!toggle || !navMenu) return;
    
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle aria-expanded
        const isExpanded = toggle.classList.contains('active');
        toggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close menu when clicking on nav links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            navMenu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !navMenu.contains(e.target)) {
            toggle.classList.remove('active');
            navMenu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggle.classList.remove('active');
            navMenu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', setupMobileMenu);

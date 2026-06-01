// ============================================
// Abdumalik's Portfolio - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
});

function initializePortfolio() {
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

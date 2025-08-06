// --- Header hide on scroll ---
let lastScroll = 0;
const header = document.querySelector('.header');
const marquee = document.querySelector('.marquee');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 80) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScroll = currentScroll;
});
// Плавная прокрутка по разделам
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in анимация при загрузке
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loader').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
            document.querySelectorAll('.section').forEach(sec => sec.classList.add('visible'));
        }, 500);
    }, 900);
});

// Пасхалка: Konami code
const konami = [38,38,40,40,37,39,37,39,66,65];
let kIndex = 0;
document.addEventListener('keydown', function(e) {
    if (e.keyCode === konami[kIndex]) {
        kIndex++;
        if (kIndex === konami.length) {
            showSecret();
            kIndex = 0;
        }
    } else {
        kIndex = 0;
    }
});
function showSecret() {
    const msg = document.getElementById('secret-message');
    msg.style.display = 'block';
    setTimeout(() => {
        msg.style.display = 'none';
    }, 3500);
}

// Логотип подпрыгивает при двойном клике
const logo = document.getElementById('logo');
logo.addEventListener('dblclick', () => {
    logo.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-30px) scale(1.2)' },
        { transform: 'translateY(0)' }
    ], {
        duration: 500,
        easing: 'cubic-bezier(.68,-0.55,.27,1.55)'
    });
});

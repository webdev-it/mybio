// Скрипт для скрытия navbar при прокрутке вниз и показа при прокрутке вверх
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 60) {
      navbar.classList.add('hide');
    } else {
      navbar.classList.remove('hide');
    }
    lastScroll = currentScroll;
  });
}

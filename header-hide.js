// Скрипт для скрытия header при прокрутке вниз и показа при прокрутке вверх
let lastScroll = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 60) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScroll = currentScroll;
});

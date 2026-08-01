const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.accordion').forEach((button) => {
  button.setAttribute('aria-expanded', 'false');
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const isOpen = button.classList.toggle('active');
    button.setAttribute('aria-expanded', String(isOpen));
    if (panel) panel.style.display = isOpen ? 'block' : 'none';
  });
});

document.querySelectorAll('[data-slideshow]').forEach((slideshow) => {
  const slides = [...slideshow.querySelectorAll('.slide')];
  const dots = [...slideshow.querySelectorAll('.slide-dot')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;
  let timer;

  const showSlide = (index) => {
    current = index;
    slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === index));
    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === index;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-pressed', String(isActive));
    });
  };

  const start = () => {
    window.clearInterval(timer);
    if (!reduceMotion && slides.length > 1) {
      timer = window.setInterval(() => showSlide((current + 1) % slides.length), 3000);
    }
  };

  dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
  start();
});

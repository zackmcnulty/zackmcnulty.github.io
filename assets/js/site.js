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

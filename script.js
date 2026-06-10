const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-links a');
const mobileToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-links');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

// Theme toggle with saved preference
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
  body.classList.remove('light-theme');
} else {
  body.classList.add('light-theme');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-theme');
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
    themeToggle.innerHTML = isLight
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
  });

  // initialize icon
  themeToggle.innerHTML = body.classList.contains('light-theme')
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';
}

// Mobile menu
if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

// Animate progress bars when they come into view
const bars = document.querySelectorAll('.progress-bar span');
const animateBars = () => {
  bars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      bar.style.width = `${bar.dataset.width}%`;
    }
  });
};

window.addEventListener('scroll', animateBars, { passive: true });
window.addEventListener('load', animateBars);

// Smooth active nav state on scroll (optional enhancement)
const sections = document.querySelectorAll('main section[id]');
const updateActive = () => {
  const current = sections.find((section) => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    return window.scrollY >= top && window.scrollY < bottom;
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', current && link.getAttribute('href') === `#${current.id}`);
  });
};
window.addEventListener('scroll', updateActive);
window.addEventListener('load', updateActive);

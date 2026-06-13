const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const yearLabel = document.getElementById('yearLabel');
const typingText = document.getElementById('typingText');
const contactForm = document.getElementById('contactForm');

function setTheme(theme) {
  document.body.classList.toggle('light-theme', theme === 'light');
  localStorage.setItem('portfolio-theme', theme);
  themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
  setTheme(nextTheme);
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

yearLabel.textContent = new Date().getFullYear();

const words = ['K. Nandini', 'a CSE Student', 'a Java & DBMS Learner', 'a Web Developer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const current = words[wordIndex];
  typingText.textContent = current.slice(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex += 1;
  } else if (isDeleting && charIndex > 0) {
    charIndex -= 1;
  } else {
    isDeleting = !isDeleting;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const speed = isDeleting ? 55 : 95;
  setTimeout(typeLoop, speed);
}

typeLoop();

const particles = document.getElementById('particles');
for (let i = 0; i < 18; i += 1) {
  const dot = document.createElement('span');
  dot.style.width = `${6 + Math.random() * 12}px`;
  dot.style.height = dot.style.width;
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.top = `${Math.random() * 100}%`;
  dot.style.animationDuration = `${8 + Math.random() * 8}s`;
  dot.style.animationDelay = `${Math.random() * 5}s`;
  particles.appendChild(dot);
}

const progressBars = document.querySelectorAll('.progress-bar span');
const reveal = () => {
  progressBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.style.width = bar.getAttribute('data-width') + '%';
    }
  });
};
window.addEventListener('scroll', reveal, { passive: true });
window.addEventListener('load', reveal);

const cards = document.querySelectorAll('.tilt-card');
cards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((0.5 - y / rect.height)) * 8;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const message = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`;
  alert('Thank you for your message!\n\n' + message);
  contactForm.reset();
});


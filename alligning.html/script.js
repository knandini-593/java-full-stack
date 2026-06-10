const root = document.documentElement;
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');
const filterChips = document.querySelectorAll('.filter-chip');
const projectCards = document.querySelectorAll('.project-card');
const progressBars = document.querySelectorAll('.progress-fill');
const statNumbers = document.querySelectorAll('[data-target]');
const testimonialCards = Array.from(document.querySelectorAll('.testimonial-card'));
const prevBtn = document.getElementById('prevTest');
const nextBtn = document.getElementById('nextTest');
const yearLabel = document.getElementById('yearLabel');

if (yearLabel) yearLabel.textContent = new Date().getFullYear();

function setTheme(mode) {
  body.classList.toggle('light', mode === 'light');
  localStorage.setItem('portfolio-theme', mode);
}

const savedTheme = localStorage.getItem('portfolio-theme');
setTheme(savedTheme || 'dark');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.contains('light');
    setTheme(isLight ? 'dark' : 'light');
  });
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      if (entry.target.classList.contains('skill-card')) {
        const fill = entry.target.querySelector('.progress-fill');
        if (fill) fill.style.width = fill.dataset.width + '%';
      }
    }
  });
}, { threshold: 0.15 });

const reveals = document.querySelectorAll('.reveal');
reveals.forEach((item) => observer.observe(item));

const animateCounters = () => {
  statNumbers.forEach((item) => {
    const target = Number(item.dataset.target);
    const suffix = item.dataset.suffix || '';
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const step = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      item.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else item.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  });
};

const counterSection = document.getElementById('achievements');
if (counterSection) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.35 });
  counterObserver.observe(counterSection);
}

filterChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    filterChips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    const category = chip.dataset.filter;
    projectCards.forEach((card) => {
      const match = category === 'all' || card.dataset.category === category;
      card.style.display = match ? 'flex' : 'none';
    });
  });
});

let currentTestimonial = 0;
function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.style.display = i === index ? 'block' : 'none';
  });
}
if (testimonialCards.length) {
  showTestimonial(currentTestimonial);
  prevBtn?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  });
  nextBtn?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  });
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  }, 5000);
}

const typingWords = ['B.Tech CSE Student', 'Java & Web Enthusiast', 'Creative Problem Solver', 'Future Software Developer'];
const typingEl = document.querySelector('.typing');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeLoop() {
  if (!typingEl) return;
  const current = typingWords[wordIndex];
  typingEl.textContent = current.slice(0, charIndex) + '|';
  if (!isDeleting && charIndex < current.length) {
    charIndex++;
  } else if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeLoop, 1200);
    return;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
  }
  setTimeout(typeLoop, isDeleting ? 60 : 120);
}
if (typingEl) typeLoop();

const canvas = document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2.4 + 1,
    dx: (Math.random() - 0.5) * 0.45,
    dy: (Math.random() - 0.5) * 0.45,
    color: Math.random() > 0.5 ? 'rgba(139,124,255,0.55)' : 'rgba(39,215,223,0.55)'
  }));

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p, i) => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const distance = Math.hypot(p.x - q.x, p.y - q.y);
        if (distance < 90) {
          ctx.strokeStyle = `rgba(139,124,255,${(1 - distance / 90) * 0.1})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  draw();
  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });
}

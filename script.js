// Scroll header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (toggle) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!header.contains(e.target)) navLinks.classList.remove('open');
  });
}

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  a.classList.toggle('active', a.getAttribute('href') === currentPage);
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => obs.observe(el));

// Contact form
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (success) { success.style.display = 'block'; }
    form.reset();
    setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
  });
}

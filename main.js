// ============================================
//   Sethum Senarathna — Portfolio Scripts
//   File: assets/js/main.js
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. Custom Cursor ──────────────────────
  const cur  = document.getElementById('cur');
  const ring = document.getElementById('cur-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  (function lerp() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(lerp);
  })();


  // ── 2. Scroll Reveal ──────────────────────
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


  // ── 3. Skill Bars ─────────────────────────
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(b => {
          b.style.width = b.dataset.w + '%';
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('[data-skillcard]').forEach(el => barObs.observe(el));


  // ── 4. Active Nav Highlight ───────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 220) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });


  // ── 5. Contact Form Feedback ──────────────
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = document.getElementById('submit-btn');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      btn.style.background = 'rgba(212,242,68,0.4)';

      // Replace this timeout with your actual form API call (e.g. Formspree)
      setTimeout(() => {
        btn.textContent = 'Message Sent ✓';
        btn.style.background = '#3a8a2a';
        btn.style.color = '#d4f244';

        setTimeout(() => {
          btn.textContent = 'Send Message →';
          btn.style.background = '#d4f244';
          btn.style.color = '#070709';
          btn.disabled = false;
          form.reset();
        }, 3000);
      }, 1200);
    });
  }


  // ── 6. Mobile Menu Toggle ─────────────────
  const menuBtn  = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close on nav link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

});

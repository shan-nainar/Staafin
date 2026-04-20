/* ============================================================
   STAAFIN HRMS — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Active Nav Link ── */
  function setActiveNav() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(function(a) {
      const href = a.getAttribute('href');
      if (href === current ||
          (current === '' && href === 'index.html') ||
          (current === 'index.html' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  /* ── Navbar scroll effect ── */
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile menu ── */
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll Reveal ── */
  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els.length) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    els.forEach(function(el, i) {
      const parent = el.parentElement;
      const siblings = parent ? Array.from(parent.querySelectorAll('.reveal, .reveal-left, .reveal-right')) : [];
      const idx = siblings.indexOf(el);
      if (idx > 0 && idx <= 6) {
        el.style.transitionDelay = (idx * 0.1) + 's';
      }
      observer.observe(el);
    });
  }

  /* ── Counter animation ── */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(ease * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-target]');
    if (!counters.length) return;
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function(c) { observer.observe(c); });
  }

  /* ── Smooth anchor scroll ── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        const id = a.getAttribute('href');
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = 72;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ── Contact form ── */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(function() {
        btn.textContent = '✓ Message sent!';
        btn.style.background = '#2dd4bf';
        btn.style.color = '#000';
        setTimeout(function() {
          btn.textContent = orig;
          btn.disabled = false;
          btn.style.background = '';
          btn.style.color = '';
          form.reset();
        }, 3000);
      }, 1200);
    });
  }

  /* ── Parallax on hero bg ── */
  function initParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;
    window.addEventListener('scroll', function() {
      heroBg.style.transform = 'translateY(' + (window.scrollY * 0.25) + 'px)';
    }, { passive: true });
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initCounters();
    initContactForm();
    initParallax();
  });

}());

document.addEventListener("DOMContentLoaded", () => {
  // 1. Scroll Animation (Fade In)
  const observerOptions = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // 2. Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(18, 18, 18, 0.98)";
      navbar.style.padding = "15px 5%";
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
      navbar.style.background = "rgba(18, 18, 18, 0.8)";
      navbar.style.padding = "20px 5%";
      navbar.style.boxShadow = "none";
    }
  });

  // 3. Mobile Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-active");
    });
  });
});

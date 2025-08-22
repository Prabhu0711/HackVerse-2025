// script.js

// Countdown Timer
const countdown = document.getElementById('countdown');
const eventDate = new Date("September 15, 2025 09:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(timer);
    countdown.innerHTML = "🚀 HackVerse 2025 has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ ${days}d ${hrs}h ${mins}m ${secs}s left`;
}, 1000);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Neon glow hover effect on sections
const sections = document.querySelectorAll("section");
sections.forEach(sec => {
  sec.addEventListener("mouseenter", () => {
    sec.style.boxShadow = "0 0 30px rgba(0,255,255,0.8)";
  });
  sec.addEventListener("mouseleave", () => {
    sec.style.boxShadow = "0 0 15px rgba(255,255,255,0.1)";
  });
});

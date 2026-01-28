// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ===== Simple Scroll Reveal Animation =====
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

// Observe all sections
document.querySelectorAll(".section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});


// ===== Resume Button Hover Effect (optional polish) =====
const resumeBtn = document.querySelector(".btn");
if (resumeBtn) {
  resumeBtn.addEventListener("mouseenter", () => {
    resumeBtn.style.transform = "scale(1.05)";
  });

  resumeBtn.addEventListener("mouseleave", () => {
    resumeBtn.style.transform = "scale(1)";
  });
}

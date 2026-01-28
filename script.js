function toggleTheme() {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "" : "dark";
}

const cards = document.querySelectorAll(".animate-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach(card => observer.observe(card));

gsap.registerPlugin(ScrollTrigger);

/* Section animations */
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section.children, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out"
  });
});

/* Gallery Lightbox */
const images = document.querySelectorAll(".grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

images.forEach(img => {
  img.onclick = () => {
    lightboxImg.src = img.src;
    gsap.to(lightbox, { opacity: 1, pointerEvents: "auto", duration: 0.3 });
  };
});

lightbox.onclick = () => {
  gsap.to(lightbox, { opacity: 0, pointerEvents: "none", duration: 0.3 });
};

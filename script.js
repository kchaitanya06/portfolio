gsap.registerPlugin(ScrollTrigger);

/* Hero animation */
gsap.from(".hero-card", {
  scale: 0.85,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

/* Floating shape */
gsap.to(".blob", {
  x: 200,
  y: -150,
  duration: 20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

/* Scroll animations */
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

/* Gallery lightbox */
const images = document.querySelectorAll(".grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

images.forEach(img => {
  img.onclick = () => {
    lightboxImg.src = img.src;
    gsap.to(lightbox, { opacity: 1, pointerEvents: "auto", duration: 0.3 });
    gsap.from(lightboxImg, { scale: 0.8, duration: 0.4 });
  };
});

lightbox.onclick = () => {
  gsap.to(lightbox, { opacity: 0, pointerEvents: "none", duration: 0.3 });
};

// Scroll reveal (lightweight, no libraries)
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function revealOnScroll() {
  if (prefersReducedMotion) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

revealOnScroll();

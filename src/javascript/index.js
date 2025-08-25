// JS progress bars + IntersectionObserver
function updateProgressBar(progressId, percentage) {
  const progressBar = document.getElementById(progressId);
  if (progressBar) progressBar.style.width = percentage + "%";
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      if (id === "progress-html") updateProgressBar(id, 80);
      if (id === "progress-css") updateProgressBar(id, 70);
      if (id === "progress-js") updateProgressBar(id, 60);
      if (id === "progress-reactt") updateProgressBar(id, 65);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.5 }
); // 50% منطقی‌تر از 1

window.addEventListener("load", () => {
  ["progress-html", "progress-css", "progress-js", "progress-reactt"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
  );
});

// نسا/فرگل اسکرول انیمیشن
document.addEventListener("DOMContentLoaded", () => {
  const nesa = document.querySelector(".nesa");
  const fargol = document.querySelector(".fargol");
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("hidden");
        entry.target.classList.add(
          entry.target.classList.contains("nesa")
            ? "animate-slide-in-left"
            : "animate-slide-in-right"
        );
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
  );

  if (nesa) io.observe(nesa);
  if (fargol) io.observe(fargol);
});

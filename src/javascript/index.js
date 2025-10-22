// ================================
// 🚀 JavaScript Portfolio Logic
// ================================

document.addEventListener("DOMContentLoaded", () => {
  /* ================================
     🔵 Progress Bars + IntersectionObserver
  ================================= */
  function updateProgressBar(progressId, percentage) {
    const progressBar = document.getElementById(progressId);
    if (progressBar) progressBar.style.width = percentage + "%";
  }

  const progressObserver = new IntersectionObserver(
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
  );

  ["progress-html", "progress-css", "progress-js", "progress-reactt"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) progressObserver.observe(el);
    }
  );

  /* ================================
     🔵 نسا / فرگل اسکرول انیمیشن
  ================================= */
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

  /* ================================
     🔵 Carousel (پروژه‌ها)
  ================================= */
  const prevButton = document.getElementById("carousel-prev");
  const nextButton = document.getElementById("carousel-next");
  const carouselItems = document.getElementById("carousel-items");
  const itemWidth = 108; // عرض هر آیتم
  const itemsToShow = 3; // تعداد آیتم‌های قابل نمایش

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -(currentIndex * itemWidth * itemsToShow);
    carouselItems.style.transform = `translateX(${offset}px)`;
  }

  if (nextButton && prevButton && carouselItems) {
    nextButton.addEventListener("click", () => {
      if (currentIndex < carouselItems.children.length - itemsToShow) {
        currentIndex++;
      }
      updateCarousel();
    });

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
      }
      updateCarousel();
    });
  }

  /* ================================
     🔵 Hamburger Menu
  ================================= */
  const hamMenu = document.querySelector(".humburger-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");

  if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });

    // بستن منو بعد از کلیک روی لینک‌ها
    const menuLinks = offScreenMenu.querySelectorAll('a[href^="#"]');
    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target)
          target.scrollIntoView({ behavior: "smooth", block: "start" });

        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
      });
    });
  }

  /* ================================
     🔵 Smooth Scroll برای لینک‌های معمولی
  ================================= */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

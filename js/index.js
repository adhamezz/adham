"use strict";

/* ======================================================
   DATA
   ====================================================== */
const skills = [
  { name: "REACT.JS", iconClass: "devicon-react-original", color: "#61dafb" },
  {
    name: "NEXT.JS",
    iconSvg: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M18.968 21.406 9.22 8.854H7.4v6.29H5.944V6.6h3.84l9.107 11.731V6.6h1.456v14.806h-1.379Z"/>
        <path fill="currentColor" d="M15.102 6.6h1.456v8.545h-1.456z"/>
      </svg>
    `,
    color: "#111111",
  },
  { name: "REDUX", iconClass: "devicon-redux-original", color: "#764abc" },
  { name: "TANSTACK QUERY", iconClass: "fas fa-database", color: "#ff4154" },
  { name: "AXIOS", iconClass: "devicon-axios-plain", color: "#5a29e4" },
  { name: "REACT HOOK FORM", iconClass: "fas fa-rectangle-list", color: "#ec5990" },
  { name: "ZOD", iconClass: "fas fa-shield-halved", color: "#3068b7" },
  { name: "REACT TOASTIFY", iconClass: "fas fa-bell", color: "#ff7a00" },
  { name: "FORMIK", iconClass: "fas fa-file-signature", color: "#2563eb" },
  { name: "HERO UI", iconClass: "fas fa-gem", color: "#8b5cf6" },
  { name: "SHADCN/UI", iconClass: "fas fa-cubes", color: "#e5e7eb" },
  { name: "HTML5", iconClass: "devicon-html5-plain", color: "#e34f26" },
  { name: "CSS3", iconClass: "devicon-css3-plain", color: "#264de4" },
  { name: "JAVASCRIPT - ES6+", iconClass: "devicon-javascript-plain", color: "#f7df1e" },
  { name: "TYPESCRIPT", iconClass: "devicon-typescript-plain", color: "#3178c6" },
  { name: "BOOTSTRAP", iconClass: "devicon-bootstrap-plain", color: "#7952b3" },
  { name: "TAILWIND CSS", iconClass: "devicon-tailwindcss-plain", color: "#38bdf8" },
  { name: "FONT AWESOME", iconClass: "fab fa-font-awesome", color: "#333333" },
  { name: "GITHUB", iconClass: "devicon-github-original", color: "#181717" },
  { name: "VERCEL", iconClass: "devicon-vercel-plain", color: "#000000" },
  { name: "STATE MANAGEMENT", iconClass: "fas fa-layer-group", color: "#ff5722" },
  { name: "API INTEGRATION", iconClass: "fas fa-network-wired", color: "#3b82f6" },
  { name: "RESPONSIVE DESIGN", iconClass: "fas fa-mobile-screen", color: "#10b981" },
  { name: "AUTHENTICATION", iconClass: "fas fa-user-shield", color: "#f97316" },
  { name: "PROXY", iconClass: "fas fa-code-branch", color: "#8b5cf6" },
  { name: "FONT OPTIMIZATION", iconClass: "fas fa-font", color: "#6366f1" },
];

const projects = [
  {
    title: "FreshCart",
    link: "https://fresh-cart-iota-nine.vercel.app/",
    image: "./images/fresh-cart-img.png",
    description:
      "Modern ecommerce storefront with product discovery, cart flow, and a polished responsive shopping experience.",
  },
  {
    title: "Grocery",
    link: "https://grocery-r10-9lro1kcaa-amr-el-rashidys-projects.vercel.app/",
    image: "./images/Grocery-img.png",
    description:
      "Responsive grocery marketplace focused on clean browsing, simple ordering, and practical UI structure.",
  },
  {
    title: "Yummy Meals API",
    link: "https://adhamezz.github.io/Yummy-App-/",
    image: "./images/yummy-app-img.png",
    description:
      "Meal discovery interface powered by API data with categories, search, and quick recipe exploration.",
  },
  {
    title: "Weather Forecast API",
    link: "https://amr-mohamed665.github.io/weather-assignment/",
    image: "./images/weatherapp-img.png",
    description:
      "Weather dashboard delivering location-based forecasts through a lightweight and readable interface.",
  },
  {
    title: "Random Quote Generator",
    link: "https://adhamezz.github.io/QuoteWise/",
    image: "./images/qoute-img.png",
    description:
      "Minimal quote generator with simple motion and instant refresh for a smooth micro-interaction.",
  },
  {
    title: "Personal Portfolio Website",
    link: "https://adhamezz.github.io/DevFolio_portfolio/",
    image: "./images/personal-protoflio-img.png",
    description:
      "Personal portfolio concept centered on strong typography, clean sections, and responsive presentation.",
  },
  {
    title: "Mealify",
    link: "https://adhamezz.github.io/mealify/",
    image: "./images/mealify-img.png",
    description:
      "Restaurant landing page with clear hierarchy, polished visuals, and mobile-friendly content flow.",
  },
  {
    title: "Social App",
    link: "https://social-app-tau-peach.vercel.app/login",
    image: "./images/social.png",
    description:
      "Social-style app experience built around posting, interaction, and an approachable interface system.",
  },
  {
    title: "DANIELS",
    link: "https://adhamezz.github.io/Daniels_portfolio/",
    image: "./images/DANIELS-img.png",
    description:
      "Creative portfolio layout showing polished sections, strong composition, and classic showcase patterns.",
  },
];

/* ======================================================
   THEME
   ====================================================== */
function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const root = document.documentElement;
  const getTheme = () => root.getAttribute("data-theme") || "dark";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    themeToggle.setAttribute(
      "aria-label",
      `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
    );
  }

  applyTheme(getTheme());

  themeToggle.addEventListener("click", () => {
    applyTheme(getTheme() === "dark" ? "light" : "dark");
  });
}

/* ======================================================
   RENDER SKILLS
   ====================================================== */
function renderSkills() {
  const container = document.getElementById("skillsContainer");
  if (!container) return;

  const skillRows = [0, 1, 2].map((rowIndex) =>
    skills.filter((_, skillIndex) => skillIndex % 3 === rowIndex),
  );

  container.innerHTML = `
    <section class="skills-marquee-shell fade-up">
      <div class="skills-marquee-header">
      </div>
      <div class="skills-marquee-stack">
        ${skillRows
          .map(
            (row, rowIndex) => `
              <div class="skills-marquee ${rowIndex === 1 ? "skills-marquee--reverse" : ""}" data-skills-marquee>
                <div class="skills-marquee-track">
                  ${row
                    .map(
                      (skill, skillIndex) => renderSkillPill(skill, skillIndex, rowIndex),
                    )
                    .join("")}
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
    `;
}

function renderSkillPill(skill, skillIndex, rowIndex) {
  const yOffsets = [
    [10, -4, 12, -8, 8, -2],
    [-6, 8, -10, 4, -8, 6],
    [8, -10, 6, -4, 10, -6],
  ];
  const offset = yOffsets[rowIndex][skillIndex % yOffsets[rowIndex].length];

  return `
    <article
      class="skill-pill"
      style="--skill-color: ${skill.color}; --skill-offset: ${offset}px;"
    >
      ${
        skill.iconSvg
          ? `<span class="skill-pill__svg">${skill.iconSvg}</span>`
          : `<i class="${skill.iconClass}"></i>`
      }
      <span>${skill.name}</span>
    </article>
  `;
}

function setupSkillsMarquee() {
  const marquees = document.querySelectorAll("[data-skills-marquee]");
  if (!marquees.length) return;

  marquees.forEach((marquee) => {
    if (marquee.dataset.enhanced === "true") return;

    const track = marquee.querySelector(".skills-marquee-track");
    if (!track) return;

    track.innerHTML += track.innerHTML;
    marquee.dataset.enhanced = "true";
  });
}

/* ======================================================
   RENDER PROJECTS
   ====================================================== */
function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  container.innerHTML = `
    <section class="projects-carousel fade-up" aria-label="Projects showcase">
      <div class="projects-carousel__frame">
        <button
          class="projects-carousel__nav projects-carousel__nav--prev"
          id="projectsPrev"
          type="button"
          aria-label="Previous project"
        >
          <i class="fas fa-arrow-left"></i>
        </button>

        <div class="projects-carousel__viewport">
          <div class="projects-carousel__track" id="projectsTrack" role="list">
            ${projects.map((project, index) => renderProjectCard(project, index)).join("")}
          </div>
        </div>

        <button
          class="projects-carousel__nav projects-carousel__nav--next"
          id="projectsNext"
          type="button"
          aria-label="Next project"
        >
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>

      <div class="projects-carousel__dots" id="projectsDots" aria-label="Project navigation">
        ${projects
          .map(
            (_, index) => `
              <button
                class="projects-carousel__dot ${index === 0 ? "is-active" : ""}"
                type="button"
                data-project-dot="${index}"
                aria-label="Go to project ${index + 1}"
              ></button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;

  setupProjectsCarousel();
}

function renderProjectCard(project, index) {
  return `
    <article class="project-card project-card--carousel" role="listitem" data-project-slide="${index}">
      <img
        class="project-card__image"
        src="${project.image}"
        alt="${project.title} preview"
        loading="lazy"
      />
      <div class="project-card__overlay">
        <div class="project-card__overlay-glow" aria-hidden="true"></div>
        <div class="project-card__panel">
          <p class="project-card__eyebrow">Featured Project</p>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__description">${project.description}</p>
          <a
            class="project-card__link project-card__link--primary"
            href="${project.link}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Live Demo</span>
            <i class="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </article>
  `;
}

function setupProjectsCarousel() {
  const track = document.getElementById("projectsTrack");
  const prevBtn = document.getElementById("projectsPrev");
  const nextBtn = document.getElementById("projectsNext");
  const dots = Array.from(document.querySelectorAll("[data-project-dot]"));
  if (!track || !prevBtn || !nextBtn || !dots.length) return;

  let currentIndex = 0;
  let autoplayId = null;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === currentIndex);
      dot.setAttribute("aria-pressed", String(index === currentIndex));
    });
  }

  function goToSlide(index) {
    currentIndex = (index + projects.length) % projects.length;
    updateCarousel();
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayId = window.setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 4200);
  }

  function stopAutoplay() {
    if (!autoplayId) return;
    window.clearInterval(autoplayId);
    autoplayId = null;
  }

  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
    startAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
    startAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      startAutoplay();
    });
  });

  track.parentElement?.addEventListener("mouseenter", stopAutoplay);
  track.parentElement?.addEventListener("mouseleave", startAutoplay);

  updateCarousel();
  startAutoplay();
}

function setupProjectModal() {
  let modal = document.getElementById("projectModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "projectModal";
    modal.className =
      "project-modal fixed inset-0 z-[1200] hidden items-center justify-center px-4";
    modal.innerHTML = `
      <div class="project-modal__backdrop absolute inset-0 bg-slate-950/35 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>
      <div class="project-modal__panel relative z-10 w-full max-w-xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl opacity-0 scale-95 transition-all duration-300 md:p-8">
        <button
          type="button"
          class="project-modal__close absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
          aria-label="Close project details"
        >
          <i class="fas fa-xmark"></i>
        </button>
        <p class="project-modal__label mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-500">
          Project Overview
        </p>
        <h3 class="project-modal__title text-3xl font-extrabold tracking-tight text-slate-900"></h3>
        <p class="project-modal__description mt-4 text-base leading-7 text-slate-600"></p>
        <a
          class="project-modal__link mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Visit Project</span>
          <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const backdrop = modal.querySelector(".project-modal__backdrop");
  const panel = modal.querySelector(".project-modal__panel");
  const title = modal.querySelector(".project-modal__title");
  const description = modal.querySelector(".project-modal__description");
  const link = modal.querySelector(".project-modal__link");
  const closeBtn = modal.querySelector(".project-modal__close");
  const triggers = document.querySelectorAll("[data-project-modal]");
  function openModal(project) {
    if (!project) return;
    title.textContent = project.title;
    description.textContent = project.description;
    link.href = project.link;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      backdrop.classList.remove("opacity-0");
      backdrop.classList.add("opacity-100");
      panel.classList.remove("opacity-0", "scale-95");
      panel.classList.add("opacity-100", "scale-100");
    });
  }

  function closeModal() {
    if (modal.classList.contains("hidden")) return;

    backdrop.classList.remove("opacity-100");
    backdrop.classList.add("opacity-0");
    panel.classList.remove("opacity-100", "scale-100");
    panel.classList.add("opacity-0", "scale-95");
    document.body.style.overflow = "";

    window.setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }, 280);
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const project = projects.find(
        (item) => item.title === trigger.getAttribute("data-project-modal"),
      );
      openModal(project);
    });
  });

  backdrop.onclick = closeModal;
  closeBtn.onclick = closeModal;
  panel.onclick = (event) => event.stopPropagation();
  modal.onclick = (event) => {
    if (event.target === modal) closeModal();
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

/* ======================================================
   CONTACT FORM
   ====================================================== */
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("sendBtn");
  const text = document.getElementById("sendBtnText");
  if (!form || !btn || !text) return;

  const clearErrors = () => {
    form.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('error');
      const input = group.querySelector('input, textarea');
      if (input) {
        input.setCustomValidity('');
        input.setAttribute('aria-invalid', 'false');
      }
    });
  };

  const setFieldError = (fieldId, message) => {
    const group = document.getElementById(fieldId)?.closest('.form-group');
    if (group) {
      group.classList.add('error');
      const input = group.querySelector('input, textarea');
      if (input) {
        input.setCustomValidity(message);
        input.setAttribute('aria-invalid', 'true');
        input.reportValidity();
      }
    }
  };

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    clearErrors();

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const name = nameField?.value.trim();
    const email = emailField?.value.trim();
    const message = messageField?.value.trim();

    let hasError = false;

    if (!name) {
      setFieldError("name", "Name is required");
      hasError = true;
    }
    if (!email) {
      setFieldError("email", "Email is required");
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setFieldError("email", "Please enter a valid email address");
        hasError = true;
      }
    }
    if (!message) {
      setFieldError("message", "Message is required");
      hasError = true;
    }

    if (hasError) {
      showToast("Please fix the errors above.", "error");
      return;
    }

    text.textContent = "Sending…";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        showToast("Message sent! I'll get back to you soon.", "success");
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const data = await response.json();
        const errMsg =
          data?.errors?.map((err) => err.message).join(", ") ||
          "Something went wrong. Please try again.";
        showToast(errMsg, "error");
      }
    } catch {
      showToast("Network error. Please check your connection.", "error");
    } finally {
      text.textContent = "Send Message";
      btn.disabled = false;
      btn.style.opacity = "";
    }
  });
}

/* ======================================================
   TOAST NOTIFICATION
   ====================================================== */
function showToast(message, type = "info") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "contact-toast";
    document.body.appendChild(toast);
  }

  toast.className = `contact-toast contact-toast--${type}`;
  toast.textContent = message;

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3500);
}

/* ======================================================
   NAVBAR - scroll & active link
   ====================================================== */
function setupNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  let lastScrollY = 0;

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;

      if (scrollY > 60) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      if (scrollY > 500) {
        if (scrollY > lastScrollY) {
          navbar.classList.add("nav-hidden");
        } else {
          navbar.classList.remove("nav-hidden");
        }
      } else {
        navbar.classList.remove("nav-hidden");
      }

      lastScrollY = scrollY;
    },
    { passive: true },
  );

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`,
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0.3 },
  );

  sections.forEach((section) => observer.observe(section));
}

/* ======================================================
   HAMBURGER MENU
   ====================================================== */
function setupHamburger() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("navMenu");
  if (!btn || !menu) return;

  function closeMenu() {
    btn.classList.remove("active");
    menu.classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");
    btn.classList.toggle("active");
    btn.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  menu.querySelectorAll(".nav-link, .nav-social").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (e) => {
    if (
      !menu.contains(e.target) &&
      !btn.contains(e.target) &&
      menu.classList.contains("active")
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      closeMenu();
      btn.focus();
    }
  });
}

/* ======================================================
   SCROLL ANIMATIONS
   ====================================================== */
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}

/* ======================================================
   INIT
   ====================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const heroName = document.querySelector(".hero-heading__name");
  const heroRole = document.querySelector(".hero-heading__role");
  const heroSubtext = document.querySelector(".hero-subtext");

  if (heroName) heroName.textContent = "Adham";
  if (heroRole) heroRole.innerHTML = "<span>Frontend Developer</span>";
  if (heroSubtext) {
    heroSubtext.textContent =
      "I build exceptional digital experiences with clean frontend architecture, responsive interfaces, and thoughtful user experiences that feel polished, fast, and easy to use.";
  }

  setupThemeToggle();
  renderSkills();
  setupSkillsMarquee();
  renderProjects();
  setupContactForm();
  setupNavbar();
  setupHamburger();

  setTimeout(setupScrollAnimations, 100);
});

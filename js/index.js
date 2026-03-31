// Skills Data
const skillsData = {
  frontend: [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "React", icon: "fab fa-react" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Next.js", icon: "fab fa-node-js" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  ],
  tools: [
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "VS Code", icon: "devicon-vscode-plain" },
    { name: "Figma", icon: "devicon-figma-plain" },
    { name: "Vercel", icon: "devicon-vercel-plain" },
  ],
};

// Projects Data
const projectsData = [
  {
    title: "FreshCart",
    link: "https://fresh-cart-iota-nine.vercel.app/",
    github: "https://github.com/adhamezz/FreshCart",
    image: "./images/pic-protoflio-img.png",
    description:
      "E-commerce platform built with React, featuring product browsing, cart management, and secure checkout.",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Mealify",
    link: "https://adhamezz.github.io/mealify/",
    github: "https://github.com/adhamezz/mealify",
    image: "./images/pic-protoflio-img.png",
    description:
      "Food recipe application with search functionality, meal details, and user-friendly interface.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Law Portfolio",
    link: "https://mohamed-sami-i58t.vercel.app/",
    github: "https://github.com/adhamezz/law-portfolio",
    image: "./images/pic-protoflio-img.png",
    description:
      "Legal portfolio showcase with professional layout, clean typography, and practice area highlights designed for law professionals.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
];

// Render Skills Section
function renderSkills() {
  const skillsContainer = document.getElementById("skillsContainer");
  if (!skillsContainer) return;

  skillsContainer.innerHTML = Object.entries(skillsData)
    .map(
      ([category, skills]) => `
    <div class="skills-category">
      <h3 class="skills-category-title">${
        category.charAt(0).toUpperCase() + category.slice(1)
      }</h3>
      <div class="skills-list">
        ${skills
          .map(
            (skill) => `
          <div class="skill-item" title="${skill.name}">
            <i class="${skill.icon}"></i>
            <span class="skill-name">${skill.name}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");
}

// Render Projects Section
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projectsData
    .map(
      (project) => `
    <div class="project-card">
      <div class="project-image-wrapper">
        <img
          src="${project.image}"
          alt="${project.title}"
          class="project-image"
        />
        <div class="project-overlay">
          <a
            href="${project.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="project-btn"
            title="View Project"
          >
            <i class="fas fa-external-link-alt"></i> View
          </a>
          <a
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
            class="project-btn"
            title="View Code"
          >
            <i class="fab fa-github"></i> Code
          </a>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

themeToggle?.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.setAttribute("aria-pressed", newTheme === "dark");
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", navMenu.classList.contains("active"));
});

// Close menu when clicking nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
});
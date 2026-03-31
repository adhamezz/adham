// Skills Marquee Carousel
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const createSkillsCarousel = () => {
    const marquee = document.createElement('div');
    marquee.classList.add('skills-carousel');
    skills.forEach(skill => {
        const skillItem = document.createElement('span');
        skillItem.textContent = skill;
        marquee.appendChild(skillItem);
    });
    document.body.appendChild(marquee);
};

// Projects Carousel
const projects = [
    { title: 'Project 1', url: 'https://example.com/project1' },
    { title: 'Project 2', url: 'https://example.com/project2' },
];

const createProjectsCarousel = () => {
    const carousel = document.createElement('div');
    carousel.classList.add('projects-carousel');
    projects.forEach(project => {
        const projectItem = document.createElement('a');
        projectItem.textContent = project.title;
        projectItem.href = project.url;
        carousel.appendChild(projectItem);
    });
    document.body.appendChild(carousel);
};

createSkillsCarousel();
createProjectsCarousel();
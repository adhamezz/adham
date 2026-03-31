// Skills Marquee Carousel
const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
    'Webpack',
    'TypeScript',
    'Python',
    'Django'
];

const skillsCarousel = () => {
    const marquee = document.getElementById('skills-marquee');
    skills.forEach(skill => {
        const skillItem = document.createElement('span');
        skillItem.innerText = skill;
        marquee.appendChild(skillItem);
    });
};

// Projects Carousel
const projects = [
    { title: 'Project 1', link: '#', description: 'Description of Project 1.' },
    { title: 'Project 2', link: '#', description: 'Description of Project 2.' },
    { title: 'Project 3', link: '#', description: 'Description of Project 3.' },
    { title: 'Project 4', link: '#', description: 'Description of Project 4.' },
    { title: 'Project 5', link: '#', description: 'Description of Project 5.' },
    { title: 'Project 6', link: '#', description: 'Description of Project 6.' },
    { title: 'Project 7', link: '#', description: 'Description of Project 7.' },
    { title: 'Project 8', link: '#', description: 'Description of Project 8.' },
    { title: 'Project 9', link: '#', description: 'Description of Project 9.' }
];

const projectsCarousel = () => {
    const projectsContainer = document.getElementById('projects-carousel');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(projectItem);
    });
};

// Initialize Carousels
window.onload = () => {
    skillsCarousel();
    projectsCarousel();
};

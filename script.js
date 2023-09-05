// script.js
// JavaScript
// Array of projects
const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1.",
        link: "https://github.com/saddamsaddam/OnlineExamSystem",
    },
    {
        title: "Project 2",
        description: "Description of Project 2.",
        link: "https://github.com/saddamsaddam/IncomeTaxBd",
    },
    // Add more projects as needed
];

// Function to render projects
function renderProjects() {
    const projectsSection = document.getElementById("projects");

    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;

        projectsSection.appendChild(projectCard);
    });
}

// Call the function to render the projects
renderProjects();

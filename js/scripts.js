import projects from "../data/projects.js";

//populate and create cards with data

const projectsContainer = document.querySelector(".projects");

projects.forEach((project) => {
	const card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" />
    <div class="content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank" class="btn">View Project</a>
    </div>
    `;
	projectsContainer.appendChild(card);
});

//inject current year in footer
const date = new Date();
document.querySelector("#year").textContent = date.getFullYear().toString();

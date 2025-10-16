import projects from "../data/projects.js";

console.log(projects);

//populate and create cards with data

const projectsContainer = document.querySelector(".projects");

projects.forEach((project) => {
	const card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = `
    <picture>
		<source srcset="${project.img || "./images/placeholder"}.avif"/>
		<source srcset="${project.img || "./images/placeholder"}.webp"/>
		<img src="${project.img || "./images/placeholder"}.jpg"/>
	</picture>
    <div class="content">
        <h3 class='name'>${project.title}</h3>
        <p class='description'>${project.description}</p>
        <a href="${project.url || "#five"}" target="_self" class="btn ${
		project.url === null ? "disabled" : ""
	}">${project.url === null ? "Coming Soon" : "View Project"}</a>
    </div>
    `;
	projectsContainer.appendChild(card);
});

//inject current year in footer
const date = new Date();
document.querySelector("#year").textContent = date.getFullYear().toString();

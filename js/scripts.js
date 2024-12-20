import projects from "../data/projects.js";

console.log(projects);

//populate and create cards with data

const projectsContainer = document.querySelector(".projects");

projects.forEach((project) => {
	const card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = `
    <picture>
		<source srcset="${project.img}.avif"/>
		<source srcset="${project.img}.webp"/>
		<img src="${project.img}.jpg"/>
	</picture>
    <div class="content">
        <h3 class='name'>${project.title}</h3>
        <p class='description'>${project.description}</p>
        <a href="${project.url}" target="_self" class="btn">View Project</a>
    </div>
    `;
	projectsContainer.appendChild(card);
});

//inject current year in footer
const date = new Date();
document.querySelector("#year").textContent = date.getFullYear().toString();

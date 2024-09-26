//inject current year in footer
const date = new Date();
document.querySelector("#year").textContent = date.getFullYear().toString();

import { about } from "./about.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import "./reset.css";
import "./style.css";

const DOMElements = (function () {
	const homeDiv = document.getElementById("home");
	const menuDiv = document.getElementById("menu");
	const aboutDiv = document.getElementById("about");

	homeDiv.addEventListener("click", () => {
		homeDiv.classList.add("selected");
		menuDiv.classList.remove("selected");
		aboutDiv.classList.remove("selected");
		home();
	});

	menuDiv.addEventListener("click", () => {
		menuDiv.classList.add("selected");
		homeDiv.classList.remove("selected");
		aboutDiv.classList.remove("selected");
		menu();
	});

	aboutDiv.addEventListener("click", () => {
		aboutDiv.classList.add("selected");
		menuDiv.classList.remove("selected");
		homeDiv.classList.remove("selected");
		about();
	});
})();

DOMElements();

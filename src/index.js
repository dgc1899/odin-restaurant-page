import {landingPage} from "./landing";
import { aboutPage } from "./about";
import {menuPage} from "./menu"
import "./styles.css";
import "../hero.jpg";

const buttonContainer = document.querySelector(".nav-container")
const divContent = document.querySelector("#content");

buttonContainer.addEventListener("click", displayPage)

divContent.innerHTML  = landingPage;

function displayPage(event) {
    if(event.target.id == "btnAbout") {
        divContent.innerHTML = aboutPage;
    }
    else if (event.target.id == "btnMenu") {
        divContent.innerHTML = menuPage;

    }
    else if (event.target.id == "btnHome") {
        divContent.innerHTML  = landingPage;
    }
}
import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

const content = document.getElementById("content");

const homeBtn = document.getElementById("homeBtn");

const menuBtn = document.getElementById("menuBtn");

const aboutBtn = document.getElementById("aboutBtn");

function switchTabs(newTab) {
  content.innerHTML = "";
  content.appendChild(newTab);
}

/* Set home to be the first thing displayed*/
content.appendChild(menu);

homeBtn.addEventListener("click", () => {
  switchTabs(home);
});

menuBtn.addEventListener("click", () => {
  switchTabs(menu);
});

aboutBtn.addEventListener("click", () => {
  switchTabs(about);
});

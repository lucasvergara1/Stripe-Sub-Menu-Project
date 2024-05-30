import sublinks from "./data.js";

const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sideWrapper = document.querySelector(".side-wrapper");
const sidebar = document.querySelector(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

//hide/show side bar
toggleBtn.addEventListener("click", () => {
  sideWrapper.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sideWrapper.classList.remove("show");
});

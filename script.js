const topSection = document.querySelector(".Top-section");
const mainHeading = document.querySelector("#main-heading");

const pinkBtn = document.querySelector("#pink");
const blueBtn = document.querySelector("#blue");
const purpleBtn = document.querySelector("#purple");
const greenBtn = document.querySelector("#green");
const yellowBtn = document.querySelector("#yellow");


pinkBtn.addEventListener("click" , () => {
    topSection.style.backgroundColor = "#FD1857";
    mainHeading.style.color = "#FD1857";
});

blueBtn.addEventListener("click" , () => {
    topSection.style.backgroundColor = "#3498DB";
    mainHeading.style.color = "#3498DB";
});

purpleBtn.addEventListener("click" , () => {
    topSection.style.backgroundColor = "#9B59B6";
    mainHeading.style.color = "#9B59B6";
});

greenBtn.addEventListener("click" , () => {
    topSection.style.backgroundColor = "#2ECC71";
    mainHeading.style.color = "#2ECC71";
});

yellowBtn.addEventListener("click" , () => {
    topSection.style.backgroundColor = "#F1C40F";
    mainHeading.style.color = "#F1C40F";
});
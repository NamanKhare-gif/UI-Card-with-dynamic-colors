const topSection = document.querySelector(".Top-section");
const mainHeading = document.querySelector("#main-heading");
const tertText = document.querySelectorAll(".tert-text");
const priBtbn = document.querySelector(".Primary-btn");
const secBtn = document.querySelector(".Secondary-btn");

const pinkBtn = document.querySelector("#pink");
const blueBtn = document.querySelector("#blue");
const purpleBtn = document.querySelector("#purple");
const greenBtn = document.querySelector("#green");
const yellowBtn = document.querySelector("#yellow");


pinkBtn.addEventListener("click" , () => {
    topSection.style.backgroundColor = "#FD1857";
    mainHeading.style.color = "#FD1857";
    tertText.forEach((box) => {
        box.style.color = "#FD1857";
    });
    priBtbn.style.backgroundColor = "#FD1857";
    secBtn.style.borderColor = "#FD1857";
    secBtn.style.color = "#FD1857";
});

blueBtn.addEventListener("click" , () => {
    topSection.style.backgroundColor = "#3498DB";
    mainHeading.style.color = "#3498DB";
    tertText.forEach((box) => {
        box.style.color = "#3498DB";
    });
    priBtbn.style.backgroundColor = "#3498DB";
    secBtn.style.borderColor = "#3498DB";
    secBtn.style.color = "#3498DB";
});

purpleBtn.addEventListener("click" , () => {
    topSection.style.backgroundColor = "#9B59B6";
    mainHeading.style.color = "#9B59B6";
    tertText.forEach((box) => {
        box.style.color = "#9B59B6";
    });
    priBtbn.style.backgroundColor = "#9B59B6";
    secBtn.style.borderColor = "#9B59B6";
    secBtn.style.color = "#9B59B6";
});

greenBtn.addEventListener("click" , () => {
    topSection.style.backgroundColor = "#2ECC71";
    mainHeading.style.color = "#2ECC71";
    tertText.forEach((box) => {
        box.style.color = "#2ECC71";
    });
    priBtbn.style.backgroundColor = "#2ECC71";
    secBtn.style.borderColor = "#2ECC71";
    secBtn.style.color = "#2ECC71";
});

yellowBtn.addEventListener("click" , () => {
    topSection.style.backgroundColor = "#F1C40F";
    mainHeading.style.color = "#F1C40F";
    tertText.forEach((box) => {
        box.style.color = "#F1C40F";
    });
    priBtbn.style.backgroundColor = "#F1C40F";
    secBtn.style.borderColor = "#F1C40F";
    secBtn.style.color = "#F1C40F";
});
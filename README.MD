# 🎨 Dynamic Color Card Design

A simple and interactive **Dynamic Color Card** built using **HTML, CSS, and JavaScript**.

The project demonstrates how JavaScript can dynamically change the styling of multiple HTML elements when the user selects a color. The card has five different theme colors, and clicking a color button instantly updates the card's visual theme.

---

## 🚀 Features

*  Five different color themes
*  Interactive color selection buttons
*  Dynamic styling using JavaScript
*  Profile card UI
*  Changes multiple elements simultaneously
*  Clean and simple interface
*  Modern card design with rounded corners and shadows
*  Beginner-friendly JavaScript DOM manipulation project

---

## 🎨 Available Themes

The project currently includes five color themes:

| Theme     | Color     |
| --------- | --------- |
| 🩷 Pink   | `#FD1857` |
| 🔵 Blue   | `#3498DB` |
| 🟣 Purple | `#9B59B6` |
| 🟢 Green  | `#2ECC71` |
| 🟡 Yellow | `#F1C40F` |

Each theme changes the main accent color of the card.

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the card
* **CSS3** – Styling and layout
* **JavaScript** – Dynamic theme switching
* **Google Fonts** – Poppins, Montserrat and Playfair

---

## 📂 Project Structure

```text
Dynamic-Color-Card/
│
├── Preview
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

The card contains different elements whose colors are controlled dynamically using JavaScript.

The color buttons are selected using JavaScript:

```javascript
const pinkBtn = document.querySelector("#pink");
const blueBtn = document.querySelector("#blue");
const purpleBtn = document.querySelector("#purple");
const greenBtn = document.querySelector("#green");
const yellowBtn = document.querySelector("#yellow");
```

When a user clicks a color button, JavaScript changes the styles of different card elements.

For example, the Pink theme changes the card to the pink color:

```javascript
pinkBtn.addEventListener("click", () => {
    topSection.style.backgroundColor = "#FD1857";
    mainHeading.style.color = "#FD1857";

    tertText.forEach((box) => {
        box.style.color = "#FD1857";
    });

    priBtbn.style.backgroundColor = "#FD1857";

    secBtn.style.borderColor = "#FD1857";
    secBtn.style.color = "#FD1857";
});
```

The same concept is applied to the Blue, Purple, Green, and Yellow themes.

---

## 🧠 JavaScript Concepts Practiced

This project helped practice several important JavaScript concepts:

* `document.querySelector()`
* `document.querySelectorAll()`
* DOM manipulation
* Event listeners
* `addEventListener()`
* Arrow functions
* `forEach()`
* Changing CSS properties using JavaScript
* Working with multiple DOM elements
* Dynamic UI styling

---

## 🎯 What Changes When a Theme Is Selected?

When the user clicks a color button, JavaScript updates:

* Card top section background
* Main heading color
* Followers text color
* Following text color
* Follow button background
* Message button border
* Message button text

This creates a complete theme change rather than changing only one element.

---

## 🖥️ Project Preview

The interface contains:

1. A profile card
2. Profile information
3. Followers and following statistics
4. Follow and Message buttons
5. A color selection panel

The user can click any color button below the card to change its theme.

you can see the short-video of the project in - 

```text
Preview
├── Main-theme.png
└── Preview-video.mp4
```

----

## 📸 Themes

### 🩷 Pink Theme

The default theme uses a vibrant pink accent.

### 🔵 Blue Theme

Clicking the blue button changes the card's accent color to blue.

### 🟣 Purple Theme

The purple button applies a purple accent to the card.

### 🟢 Green Theme

The green button changes the card's accent color to green.

### 🟡 Yellow Theme

The yellow button applies a yellow accent to the card.

---

## ▶️ How to Run

1. Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

2. Open the project folder.

3. Open `index.html` in your browser.

That's it! No additional dependencies or installation are required.

---

## 💡 Learning Objective

The main purpose of this project is to understand how **JavaScript interacts with CSS through the DOM**.

Instead of creating separate HTML cards for every theme, JavaScript dynamically modifies the existing card based on the user's selection.

This is a useful foundation for building:

* Theme switchers
* Dark/light mode
* Color customization systems
* Interactive UI components
* Dynamic dashboards
* Personalized interfaces

---

## 🔮 Future Improvements

Some improvements that can be added in the future:

* [ ] Add Dark/Theme Mode
* [ ] Add more color themes
* [ ] Add smooth color transition animations
* [ ] Use CSS variables instead of directly changing individual styles
* [ ] Make the card fully responsive
* [ ] Add a custom color picker
* [ ] Save the selected theme using `localStorage`
* [ ] Refactor the JavaScript to use one reusable function for all themes

---

## 👨‍💻 Author

**Naman Khare**

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

### 📌 Project Type

**Frontend Mini Project**

Built with ❤️ using **HTML, CSS & JavaScript**

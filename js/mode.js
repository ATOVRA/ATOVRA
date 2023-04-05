const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

function toggleDark() {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
}

// get LocalStorage
const mode = localStorage.getItem("darkMode");
if (mode) {
  toggleDark()
}

// Dark Mode Btn
darkBtn.addEventListener("click", () => {
  toggleDark();
  localStorage.setItem("darkMode", "dark-mode");
});

// Light Mode Btn
lightBtn.addEventListener("click", () => {
  toggleDark();
  localStorage.setItem("darkMode", "");
});

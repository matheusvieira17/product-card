const changeThemeBtn = document.querySelector("#change-theme");
let body = document.body;

function toggleDarkMode() {
  body.classList.toggle("dark");
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark");
  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", changeTheme);

function changeTheme() {
  toggleDarkMode();
  localStorage.removeItem("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
}

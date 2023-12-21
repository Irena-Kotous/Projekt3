const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] == "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});
const image1 = document.querySelector(".image1");

image1.addEventListener("mouseenter", () => {
  image1.style.transform = "scale(1.1)";
});

image1.addEventListener("mouseleave", () => {
  image1.style.transform = "scale(1)";
});
const image2 = document.querySelector(".image2");

image2.addEventListener("mouseenter", () => {
  image2.style.transform = "scale(1.1)";
});

image2.addEventListener("mouseleave", () => {
  image2.style.transform = "scale(1)";
});
const image3 = document.querySelector(".image3");

image3.addEventListener("mouseenter", () => {
  image3.style.transform = "scale(1.1)";
});

image3.addEventListener("mouseleave", () => {
  image3.style.transform = "scale(1)";
});
const registrationForm = document.getElementById("registration-form");
const passwordMatchMessage = document.getElementById("password-match");
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;

function showPasswordMatch() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  if (password === confirmPassword) {
    document.getElementById("password-match").innerHTML = "Hesla se shodují.";
  } else {
    document.getElementById("password-match").innerHTML =
      "Hesla nejsou stejná.";
  }
}
document
  .getElementById("confirm-password")
  .addEventListener("input", showPasswordMatch);
const toggleButton = document.getElementById("toggleButton");
const documentElement = document.documentElement;

toggleButton.addEventListener("click", function () {
  if (documentElement.getAttribute("data-theme") === "dark") {
    documentElement.setAttribute("data-theme", "light");
  } else {
    documentElement.setAttribute("data-theme", "dark");
  }
});
window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;

  if (Math.ceil(scrolled) === scrollable) {
    let toTop = document.querySelector(".top-page");
    toTop.style.display = "block";

    toTop.addEventListener("click", function () {
      toTop.style.display = "none";
    });
  }
});

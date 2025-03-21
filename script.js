// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dynamic Title Animation
const titles = [
  "Java Developer",
  "Python Developer",
  "Web Developer",
  "Full Stack Developer",
];
let index = 0;
const dynamicTitle = document.getElementById("dynamic-title");

function changeTitle() {
  dynamicTitle.textContent = titles[index];
  index = (index + 1) % titles.length;
}

setInterval(changeTitle, 2000);

// Form Submission (Basic Alert for Demo)
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message, Jaya Vardhan will get back to you soon!");
  form.reset();
});

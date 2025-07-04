//  Smooth Typing Effect di Jumbotron
const text = "Fullstack Developer | UI & UX Designer";
let index = 0;
function typeText() {
  const typedText = document.getElementById("typed-text");
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // kecepatan ketik
  }
}
typeText();

// Navbar Fade-in Saat Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

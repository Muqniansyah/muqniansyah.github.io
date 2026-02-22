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

  // Aktifkan link sesuai scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

//  Play on klik
const btn = document.getElementById("play-audio-btn");
const audio = document.getElementById("bg-music");

btn.addEventListener("click", () => {
  audio
    .play()
    .then(() => {
      btn.style.display = "none";
    })
    .catch((err) => {
      console.error("Audio play error:", err);
    });
});

// Inisialisasi EmailJS
(function () {
  emailjs.init("csttgHJPWOiqCnmix"); // Ganti dengan Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z76vz0b", // Ganti Service ID
        "template_0sxrr0y", // Ganti Template ID
        this
      )
      .then(function () {
        alert("Pesan berhasil dikirim!");
        form.reset();
      })
      .catch(function (error) {
        alert("Gagal mengirim pesan.");
        console.log(error);
      });
  });
});

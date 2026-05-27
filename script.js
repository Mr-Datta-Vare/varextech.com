const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple animation on scroll
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    let position = card.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if(position < screen - 100){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

function toggleMenu() {
  const menu = document.getElementById("navLinks");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Simple animation on scroll
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let position = card.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if (position < screen - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll('.contact-info, .contact-form').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";

  setTimeout(() => {
    el.style.transition = "1s";
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  }, 300);
});


function goToSolutions() {
  document.getElementById("solutions").scrollIntoView({
    behavior: "smooth"
  });
}

// ===== NAVIGATION & MOBILE TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Old toggleMenu support (if called inline)
function toggleMenu() {
  const navLinksList = document.getElementById("nav-links");
  if (navLinksList) {
    navLinksList.classList.toggle("active");
  }
}

// ===== SCROLL ANIMATIONS (CARDS FADE IN) =====
const handleScrollAnimation = () => {
  const cards = document.querySelectorAll(".card, .step, .project-card, .services-box");
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 80) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "all 0.6s ease-out";
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation);
// Run once on load to show elements already in view
window.addEventListener("DOMContentLoaded", () => {
  handleScrollAnimation();
  
  // Set initial styles for elements to animate
  const cards = document.querySelectorAll(".card, .step, .project-card, .services-box");
  cards.forEach(card => {
    if (card.getBoundingClientRect().top >= window.innerHeight - 80) {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
    }
  });
});

// ===== CONTACT PAGE ANIMATIONS & WHATSAPP REDIRECT =====
document.addEventListener("DOMContentLoaded", () => {
  const contactElements = document.querySelectorAll('.contact-info, .contact-form');
  contactElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  });

  // Contact Form Submission Handler to WhatsApp Redirect
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subjectInput = document.getElementById("subject");
      const subject = subjectInput ? subjectInput.value.trim() : "General Inquiry";
      const message = document.getElementById("message").value.trim();
      
      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Format WhatsApp Message (Markdown style)
      const textMessage = `Hello VareX Tech Solutions,\n\n` +
                          `*New Inquiry received via Website Contact Form*\n` +
                          `-----------------------------------------\n` +
                          `👤 *Name:* ${name}\n` +
                          `✉️ *Email:* ${email}\n` +
                          `📝 *Subject:* ${subject}\n\n` +
                          `💬 *Message:*\n${message}`;
                          
      const whatsappNumber = "919511954660"; // Pune, India phone number from footer
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(textMessage)}`;
      
      // Redirect to WhatsApp
      window.open(whatsappUrl, "_blank");
    });
  }
});

// ===== HERO BUTTON ACTION =====
function goToSolutions() {
  const solutionsSection = document.getElementById("solutions");
  if (solutionsSection) {
    solutionsSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}

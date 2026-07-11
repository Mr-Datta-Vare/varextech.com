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

// ===== STAGGERED SCROLL-IN ANIMATIONS (INTERSECTION OBSERVER) =====
document.addEventListener("DOMContentLoaded", () => {
  const animContainers = document.querySelectorAll(".services, .steps, .portfolio-container, .features, .cards, .bottom-features, .project-details");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px", // triggers slightly before elements enter view
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate children with stagger delay
        const children = entry.target.querySelectorAll(".card, .step, .project-card, .services-box, .feature-box, .preview-box, .feature");
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = "1";
            child.style.transform = "translateY(0)";
            child.style.transition = "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
          }, index * 100); // 100ms stagger interval
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animContainers.forEach(container => {
    const children = container.querySelectorAll(".card, .step, .project-card, .services-box, .feature-box, .preview-box, .feature");
    if (children.length > 0) {
      children.forEach(child => {
        child.style.opacity = "0";
        child.style.transform = "translateY(30px)";
      });
      observer.observe(container);
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

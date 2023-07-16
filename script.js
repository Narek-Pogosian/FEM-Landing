//* --------------- Header -----------
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#primary-navigation");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  mobileMenu.ariaExpanded = true;
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  mobileMenu.ariaExpanded = false;
});

//* ----------- Intersection API ----------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;

      if (intersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { rootMargin: "20px", threshold: 1 }
);

const sections = document.querySelectorAll(".animated");

sections.forEach((section) => {
  observer.observe(section);
});

//* --------- Tabs ------------
const tabButtons = document.querySelectorAll(".tab-buttons button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;

    if (id) {
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);

      element.classList.add("active");
    }
  });
});

//* ------------- Accordion ------------
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.add("active");

    const panel = accordion.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.paddingBottom = "0px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + 10 + "px";
      panel.style.paddingBottom = "10px";
    }
  });
});

//* ----------- Contact -----------
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

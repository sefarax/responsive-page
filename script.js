// toggle navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");

navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// smooth scroll
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href");
    const element = document.querySelector(id);
    const fixedNav = navbar.classList.contains("navbar--fixed");
    let position = element.offsetTop - navbarHeight;
    if (!fixedNav) {
      position -= navbarHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    navbarMenu.classList.remove("open");
  });
});

// typing animation
const aboutSection = document.querySelector(".about");
const aboutTitle = document.querySelector(".about__title");

const typewriter = new Typewriter(aboutTitle, {
  loop: true,
});

typewriter
  .typeString("I'm a Web Developer.")
  .pauseFor(1000)
  .deleteChars(15)
  .typeString("Designer.")
  .pauseFor(1000)
  .deleteChars(9)
  .typeString("Freelancer.")
  .pauseFor(1000)
  .deleteChars(11)
  .start();

// projects filter
const filterBtns = document.querySelectorAll(".project-filter__btn");
const projects = document.querySelectorAll(".project__card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;

    // filter projects
    projects.forEach((project) => {
      if (category === "all") {
        project.style.display = "block";
      } else if (
        !project.classList.contains(category) &&
        project.style.display !== "none"
      ) {
        project.style.display = "none";
      } else if (
        project.classList.contains(category) &&
        project.style.display === "none"
      ) {
        project.style.display = "block";
      }
    });

    // toggle active class
    filterBtns.forEach((btn) => {
      if (btn === e.currentTarget) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  });
});

// reveal on scroll
const sections = document.querySelectorAll(".reveal");
const revealSections = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove("reveal");
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.2,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});

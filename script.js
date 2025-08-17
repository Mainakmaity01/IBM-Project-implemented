let slideIndex = 0;
showSlides();

// Auto slideshow
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4s
}

// Manual controls
function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Back to top button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
});



// Navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
/*
// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
*/

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop - 50, // offset if you have sticky nav
      behavior: "smooth"
    });
  });
});

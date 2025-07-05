import "./styles.css";
import { showSlides, nextSlides, prevSlides } from "./slideControl";

showSlides(1);

const imageCarousel = document.querySelector(".slideshow-wrapper");

imageCarousel.addEventListener("click", (event) => {
  if (event.target.classList.contains("dot")) {
    showSlides(event.target.value);
  }
  if (event.target.classList.contains("arrow")) {
    event.target.value === "right" ? nextSlides() : prevSlides();
  }
});

let slideIndex = 1;

export function showSlides(n) {
  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dot");

  slideIndex = n;
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("grey"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("grey");
}

export function nextSlides() {
  showSlides(slideIndex + 1);
}

export function prevSlides() {
  showSlides(slideIndex - 1);
}

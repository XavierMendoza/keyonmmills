const testimonials = document.querySelectorAll(".testimonial");
let testimonialIndex = 0;

setInterval(() => {
  testimonials[testimonialIndex].classList.remove("active");
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  testimonials[testimonialIndex].classList.add("active");
}, 14000);

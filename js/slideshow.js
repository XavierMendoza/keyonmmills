const heroImages = [
  "assets/images/hero/hero-1.jpg",
  "assets/images/hero/hero-2.jpg",
  "assets/images/hero/hero-3.jpg",
  "assets/images/hero/hero-4.jpg",
  "assets/images/hero/hero-5.jpg"
];

let currentIndex = 0;
const hero = document.querySelector(".hero");

// preload images (important for smooth fades)
heroImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

// set initial background
hero.style.backgroundImage = `url(${heroImages[0]})`;

setInterval(() => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url(${heroImages[currentIndex]})`;
}, 6000);

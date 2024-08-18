// Initialize slide index
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

// Function to show the slide at a given index
function showSlide(index) {
    // Ensure the index is within bounds
    slideIndex = (index + totalSlides) % totalSlides;

    // Apply transformation to each slide based on the current index
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - slideIndex) * 100}%)`;
    });
}

// Function to show the previous slide
function prevSlide() {
    showSlide(slideIndex - 1);
}

// Function to show the next slide
function nextSlide() {
    showSlide(slideIndex + 1);
}

// Initialize the carousel by showing the first slide
showSlide(slideIndex);

// Optional: Add event listeners to buttons (if you have them)
document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);
document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);

document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function showSlide(index) {
        const offset = -index * 100; // Use negative value to shift left
        slides.forEach((slide) => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }

    function prevSlide() {
        slideIndex = (slideIndex > 0) ? slideIndex - 1 : totalSlides - 1;
        showSlide(slideIndex);
    }

    function nextSlide() {
        slideIndex = (slideIndex < totalSlides - 1) ? slideIndex + 1 : 0;
        showSlide(slideIndex);
    }

    // Initialize the first slide
    showSlide(slideIndex);

    // Swipe functionality
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const hammertime = new Hammer(carousel);

        hammertime.on('swipeleft', () => {
            nextSlide();
        });

        hammertime.on('swiperight', () => {
            prevSlide();
        });
    }
});

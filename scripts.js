document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
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
            console.log('Swipe left detected'); // Debugging log
            nextSlide();
        });

        hammertime.on('swiperight', () => {
            console.log('Swipe right detected'); // Debugging log
            prevSlide();
        });
    } else {
        console.error('Carousel element not found');
    }
});

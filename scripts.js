let index = 0;
let startX = 0;

function showSlide(i) {
    const slides = document.querySelectorAll('.carousel-inner img');
    const totalSlides = slides.length;
    index = (i + totalSlides) % totalSlides;
    document.querySelector('.carousel-inner').style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Swipe detection
document.querySelector('.carousel').addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
});

document.querySelector('.carousel').addEventListener('touchend', function(event) {
    const endX = event.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 30) { // Swipe threshold
        if (diffX > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
});

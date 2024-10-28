let currentIndex = 0;
const images = document.querySelectorAll('.scroll-image');
const totalImages = images.length;

function scrollImages() {
    currentIndex = (currentIndex + 1) % totalImages;
    const carousel = document.querySelector('.scroll-carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Start automatic scrolling every 3 seconds
setInterval(scrollImages, 3000);

document.addEventListener('DOMContentLoaded', () => {

    const myCarousel = document.getElementById('trendingCarousel');

    const carousel = new bootstrap.Carousel(myCarousel, {
        pause: 'hover',
        wrap: true,
        interval: 5000,
        keyboard: true
    });

    myCarousel.querySelectorAll('.carousel-item img').forEach((img) => {
        let src = img.getAttribute('data-src');
        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
        }
    });

    let startX, endX; // questa è una feature per mobile e tablet che ho trovato in giro, non so se effettivamente funzioni o sia utile
    myCarousel.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });
    myCarousel.addEventListener('touchmove', (event) => {
        endX = event.touches[0].clientX;
    });
    myCarousel.addEventListener('touchend', () => {
        if (startX - endX > 50) {
            carousel.next();
        }
        if (endX - startX > 50) {
            carousel.prev();
        }
    });

});
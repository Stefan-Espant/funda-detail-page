let currentSlide = 1;

function changeSlide(direction) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (direction === -1 && currentSlide > 1) {
        currentSlide--;
    } else if (direction === 1 && currentSlide < totalSlides) {
        currentSlide++;
    } else if (direction === 1 && currentSlide === totalSlides) {
        // Als de huidige dia de laatste is en de gebruiker op "Next" drukt,
        // ga terug naar de eerste dia.
        currentSlide = 1;
    }

    const translateValue = -100 * (currentSlide - 1);
    slider.style.transform = `translateX(${translateValue}%)`;
}

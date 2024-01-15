let currentSlide = 1;

function changeSlide(direction) {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (direction === -1 && currentSlide > 1) {
        currentSlide--;
    } else if (direction === 1 && currentSlide < totalSlides) {
        currentSlide++;
    } else if (direction === 1 && currentSlide === totalSlides) {
        currentSlide = 1;
    }

    // Als je op de derde dia bent, verander de afbeelding van de rechterpijl
    if (currentSlide === 2, 3) {
        nextButton.innerHTML = '<img src="assets/arrowRightBlack.png" alt="Right Arrow">';
        // prevButton.innerHTML = '<img src="assets/arrowLeftBlack.png" alt="Right Arrow">';
    } if (currentSlide === 1) {
        // Als je niet op de derde dia bent, gebruik de standaard afbeelding van de rechterpijl
        nextButton.innerHTML = '<img src="assets/arrowWhiteRight.png" alt="Right Arrow">';
        // prevButton.innerHTML = '<img src="assets/arrowLeftWhite.png" alt="Right Arrow">';
    }

    const translateValue = -100 * (currentSlide - 1);
    slider.style.transform = `translateX(${translateValue}%)`;
}

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

// Progressbar function

// line color function
let reset = true;
let line1Active = false;
let line2Active = false;
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let button1 = document.getElementById('progressBar1');
let button2 = document.getElementById('progressBar2');
let button3 = document.getElementById('progressBar3');

//  Step 1 functions
// turns the right boolean to true
function step1() {
    line1Active = false;
    reset = true;
    line2Active = false;
}
// removes lineActive class from all elements (changes the colors)
function step1ColorChange() {
    if (reset===true){
        line1.classList.remove('lineActive');
        line2.classList.remove('lineActive');
        button2.classList.remove('lineActive');
        button3.classList.remove('lineActive');
    }
}
// activates all functions
function step1Handler(){
    step1();
    step1ColorChange();
}

// step 2 functions
// set right boolean to true
function step2() {
    line1Active = true;
    reset = false;
    line2Active = false;
    console.log(line1Active, reset, line2Active)
}
// removes and adds lineactive on the right classes (changes the colors)
function step2ColorChange() {
   if (line1Active===true){
       line1.classList.add('lineActive');
       button2.classList.add('lineActive');

       line2.classList.remove('lineActive');
       button3.classList.remove('lineActive');
    
       console.log('ik werk');
   }
}
//activates all the functions
function step2Handler(){
    step2();
    step2ColorChange();
}

// step 3 functions
// set right boolean to true
function step3() {
    line1Active = false;
    reset = false;
    line2Active = true;
}
// add lineActive class to the elements (changes the colors)
function step3ColorChange() {
    if (line2Active===true){
        line1.classList.add('lineActive');
        line2.classList.add('lineActive');
        button2.classList.add('lineActive');
        button3.classList.add('lineActive');
    }
}
//activates all the functions
function step3Handler(){
    step3();
    step3ColorChange();
}






// Button1
button1.addEventListener('click', step1Handler);

// Button 2
button2.addEventListener('click', step2Handler);

// Button 3
button3.addEventListener('click', step3Handler);

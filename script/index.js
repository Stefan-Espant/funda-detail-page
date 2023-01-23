// const productHero = document.querySelector('product-hero')

// productHero.addEventListener('mousemove', () => {

// } )

// const showVideo = document.querySelector('.showVideo')
// const dialogVideo = document.querySelector('#dialogVideo')

// const show360 = document.querySelector('.show360')
// const dialog360 = document.querySelector('#dialog360')

// const showPlan = document.querySelector('.showPlan')
// const dialogPlan = document.querySelector('#dialogPlan')

// dialog for images
// const showImage = document.querySelector('#show-images')
// const dialogImage = document.querySelector('#dialog-images')

// showImage.addEventListener('click', function() {
//     window.dialog.show()
// })

// dialog for video's


// dialog for 360 images


// dialog for ground plan images

// test openai
const openDialogFotos = document.querySelector(".open-dialog-fotos");
const dialog = document.querySelector(".dialog");
const closeDialogFotos = document.querySelector(".close-button");

openDialogFotos.addEventListener("click", function() {
  dialog.showModal();
});

closeDialogFotos.addEventListener("click", function() {
  dialog.close();
});




const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const thumbnails = document.querySelectorAll(".thumbnail");

let currentIndex = 0;
const carouselItems = document.querySelectorAll(".carousel-item");
const totalItems = carouselItems.length;

prevButton.addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  carousel.style.transform = `translateX(-${currentIndex * 20}em)`;
  updateThumbnail();
});

nextButton.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
    }
    carousel.style.transform = `translateX(-${currentIndex * 20}em)`;
    updateThumbnail();
  });
  
  function updateThumbnail() {
    thumbnails.forEach(function(thumbnail) {
      thumbnail.classList.remove("active");
    });
    thumbnails[currentIndex].classList.add("active");
  }
  
  thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener("click", function() {
      currentIndex = index;
      carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`;
      updateThumbnail();
    });
  });
  

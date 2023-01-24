// Button for increasing contrast
const increaseContrast = document.querySelector('body')
const contrastButton = document.querySelector('#contrast-increaser')

contrastButton.addEventListener('click', () => {
    increaseContrast.classList.toggle('increase-contrast');
})




// // dialog for video's
// const openDialogVideo = document.querySelector(".open-dialog-video");
// const dialogVideo = document.querySelector("dialog-video");
// const closeDialogVideo = document.querySelector(".close-button");

// openDialogVideo.addEventListener("click", function() {
//   dialogVideo.showModal();
// });

// closeDialogVideo.addEventListener("click", function() {
//   dialog.close();
// });

// // dialog for 360 images
// const openDialog360Img = document.querySelector(".open-dialog-360");
// const dialog360 = document.querySelector("dialog-360");
// const closeDialog360Img = document.querySelector(".close-button");

// openDialog360Img.addEventListener("click", function() {
//   dialog.showModal();
// });

// closeDialog360Img.addEventListener("click", function() {
//   dialog.close();
// });

// // dialog for ground plan images
// const openDialogGroundPlan = document.querySelector(".open-dialog-ground-plan");
// const dialogGroundPlan = document.querySelector("dialog-ground-plan");
// const closeDialogGroundPlan = document.querySelector(".close-button");

// openDialogVideo.addEventListener("click", function() {
//   dialog.showModal();
// });

// closeDialogVideo.addEventListener("click", function() {
//   dialog.close();
// });


// Settings for the image carousel with thumbnails

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
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateThumbnail();
});

nextButton.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
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
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateThumbnail();
    });
  });

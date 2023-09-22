// const item = 7; // item kita ada 7
// let currentIndex = 0 // start di nol

// const carouselContainer = document.querySelector('.carousel-container')

// function updateCarousel() {
//     console.log(currentIndex)
//     if (currentIndex === 0) {
//       carouselContainer.style.tranform = `translateX(-25%)`      
//     }
//     carouselContainer.style.transform = `translateX(-${currentIndex * 25}%)`;
// }

// function autoMove() {
//   currentIndex = (currentIndex + 1) % item;
//   updateCarousel()
// }

// setInterval(autoMove, 3000);

$(window).load(function() {
  $('#myCarousel').carousel({
    interval: 4000
  })
});
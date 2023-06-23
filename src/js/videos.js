const videos = document.querySelectorAll(".video__category");
console.log(videos);
videos.forEach((video) => {
  video.addEventListener("click", () => {
    videos.forEach(v => v.classList.remove("video__category--active"))
    video.classList.add("video__category--active");
  });
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 6,
//   spaceBetween: 0,
//   // centeredSlides: true,

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     455: {
//       slidesPerView: 1,
//     },
//     900: {
//       slidesPerView: 3,
//     },
//     1300: {
//       slidesPerView: 4,
//     },
//   },
// });

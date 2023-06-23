new Swiper(".clients-swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      1000: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      600: {
        slidesPerView: 3
      },
      420: {
        slidesPerView: 2
      },
    }
});

const clients = document.querySelector(".swiper-wrapper")
async function fetchclients(){
  await fetch ("http://localhost:8000/api/clients")
  .then((res) => res.json())
  .then((res) => (data=res.clients));
  console.log(res);
  data.forEach(ele => {
    clients.innerHTML += `
    <div class="swiper-slide">
        <img src=${ele.image} />
    </div>
    `
    
  });
}
fetchclients();
new Swiper(".specialized-in-swiper", {
  spaceBetween: 100,
	pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
  
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1224: {
			slidesPerView: 3,
		},
	},
});
let contianarr =  document.querySelector(".swiper-wrapper")

function appenNewprodact(description,title){
	let titlee = document.createElement("h1")
    titlee.classList.add("fq-title")
    titlee.innerText = title
   
    let descriptionn = document.createElement("p")
      descriptionn.classList.add("fq-descrip")
      descriptionn.innerText = description
   
    let fqswiper = document.createElement("div")
    fqswiper.classList.add("fq-card")
    fqswiper.appendChild(titlee)
    fqswiper.appendChild(descriptionn)
  
    let continar = document.createElement("div")
    continar.classList.add("swiper-slide")
  
    continar.appendChild(fqswiper)
    contianarr.appendChild(continar)
}
async function fetchcards(start,end) {
    await fetch("http://127.0.0.1:8000/api/specializations")
    .then((result) => result.json())
    .then((result) => (data=result.products));
    for( i = start; i < end; i++ ) { 
        let item = data[i];
        appenNewprodact( item.description , item.title);
}}
    function topteen(start,end){
        fetchcards(start ,end)
    }
    topteen(start = 0, end = 13);
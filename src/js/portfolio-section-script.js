new Swiper(".portfolio-swiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	spaceBetween: 60,
	breakpoints: {
		600: {
			slidesPerView: 1,
		},
		800: {
			slidesPerView: 2,
		},
		1250: {
			slidesPerView: 3,
		},
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const father = document.querySelector(".swiper-wrapper-portfolio");
var container = document.querySelector(".port-redu");
var btns = container.querySelectorAll(".redu");
const subSection = document.querySelector(".redu.active");
let lastRes;
let currentSection  = subSection.innerText.toLowerCase().replaceAll(' ','-');//to fit with sections values from back-end
if(currentSection === "photos-taken-by-me") { // also to fit 
  lastRes = "photos";
}else {
  lastRes = currentSection;
}
console.log(lastRes);

fetch("http://127.0.0.1:8000/api/portfolios").then((result)=>{
  let myData = result.json();
  return myData;
}).then((myData) => {
  const res = myData.portfolios.filter(it => it.section === lastRes
    
    
    );
  console.log(res)
  return res;
}).then((res) => {
  console.log(res)
  if(res.length === 0) {
    console.log("no portfolios");
  }else{
    res.forEach(element => {
      console.log(element)
      const s1 = document.createElement("div");
      s1.classList.add("swiper-slide");
      const s2 = document.createElement("div");
      s2.classList.add("port-c-cont");
      s1.append(s2);
      const im = document.createElement("img");
      im.setAttribute("src",`${element.image_url}`);
      s2.append(im);
      const s3 = document.createElement("div");
      s3.classList.add("port-card-text");
      s2.append(s3);
      const p1 = document.createElement("p");
      p1.innerText = `${element.name}`;
      s3.append(p1);
      const a1 = document.createElement("a");
      a1.setAttribute("href",`${element.link}`);
      a1.innerText = "view >";
      s3.append(a1);
      const father = document.querySelector(".swiper-wrapper");
      father.append(s1)
    });
  }
})



// acive and disactive in port-redu links
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    while (father.hasChildNodes()) {
      father.removeChild(father.firstChild);
    }
    currentSection  = this.innerText.toLowerCase().replaceAll(' ','-');
    console.log(currentSection)
  if(currentSection === "photos-taken-by-me") { // also to fit 
  lastRes = "photos";
}else {
  lastRes = currentSection;
}
  fetch("http://127.0.0.1:8000/api/portfolios").then((result)=>{
  let myData = result.json();
  return myData;
}).then((myData) => {
  const res = myData.portfolios.filter(it => it.section === lastRes
    
    
    );
  console.log(res)
  return res;
}).then((res) => {
  console.log(res)
  if(res.length === 0) {
    console.log("no portfolios");
  }else{
    res.forEach(element => {
      console.log(element)
      const s1 = document.createElement("div");
      s1.classList.add("swiper-slide");
      const s2 = document.createElement("div");
      s2.classList.add("port-c-cont");
      s1.append(s2);
      const im = document.createElement("img");
      im.setAttribute("src",`${element.image_url}`);
      s2.append(im);
      const s3 = document.createElement("div");
      s3.classList.add("port-card-text");
      s2.append(s3);
      const p1 = document.createElement("p");
      p1.innerText = `${element.name}`;
      s3.append(p1);
      const a1 = document.createElement("a");
      a1.setAttribute("href",`${element.link}`);
      a1.innerText = "view >";
      s3.append(a1);

      father.append(s1)
    });
  }
})
  });
}

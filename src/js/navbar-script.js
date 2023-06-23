const hum = document.querySelector(".hidden-menu-nav");
const linksMob = document.querySelector(".links-list-nav-mobile");
const st = document.querySelectorAll(".hidden-menu-nav .st");
const navbar = document.querySelector("nav");
const moblieLinks = document.querySelectorAll("header .link-nav-mob");


hum.addEventListener("click", () => {
    linksMob.classList.toggle("trans-0");
    st.forEach(s => {
        s.classList.toggle("w-40");
    });
    handleNavbarColor();
});

moblieLinks.forEach(link => {
    link.addEventListener("click", () => {
        linksMob.classList.remove("trans-0");
    })
})

window.addEventListener("scroll", handleNavbarColor);
handleNavbarColor();

function handleNavbarColor() {
    if (window.scrollY !== 0 && !linksMob.classList.contains("trans-0")) {
        navbar.style.backgroundColor = "var(--clr-background)";
    } else {
        navbar.style.backgroundColor = null;
    }
}
const sections = document.querySelectorAll("section[id]");
console.log(sections)
      window.addEventListener("scroll", navHighlighter);
          
      function navHighlighter() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 200;
          let sectionId = current.getAttribute("id");
                if (
                  scrollY > sectionTop &&
                  scrollY <= sectionTop + sectionHeight
                  ){
                    console.log(sectionId)
                    document.querySelectorAll("a[href*=" + sectionId + "]").forEach(element => {
                        element.parentElement.classList.add("active-nav");
                        element.parentElement.classList.add("active-mobile");
                    });
                  } else {
                    document.querySelectorAll("a[href*=" + sectionId + "]").forEach(element => {
                        if(element.parentElement.classList.contains("active-nav"))
                        element.parentElement.classList.remove("active-nav");
                        if(element.parentElement.classList.contains("active-mobile"))
                        element.parentElement.classList.remove("active-mobile");
                  })
                }
            })}
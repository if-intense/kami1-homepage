const hamburger = document.querySelector(".toggle-custom-nav");
const navLinks = document.querySelector(".nav-custom-links");
const links = document.querySelectorAll(".nav-custom-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
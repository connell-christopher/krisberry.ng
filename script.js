
// ==========================
// HERO SLIDESHOW
// ==========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}, 5000);


// ==========================
// MOBILE MENU
// ==========================

const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});


// ==========================
// CLOSE MENU WHEN LINK CLICKED
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function(){

        navLinks.classList.remove("active");

    });

});


// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 80){

        navbar.style.background = "rgba(0,0,0,.9)";

        navbar.style.padding = "18px 8%";

    }

    else{

        navbar.style.background = "rgba(0,0,0,.55)";

        navbar.style.padding = "22px 8%";

    }

});


// ==========================
// BACK TO TOP BUTTON
// ==========================




// ==========================
// SIMPLE SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll("section");

function reveal(){

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(top < screenHeight - 100){

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ==========================
// GALLERY IMAGE PREVIEW
// ==========================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("click", function(){

        const popup = document.createElement("div");

        popup.style.position = "fixed";

        popup.style.top = "0";

        popup.style.left = "0";

        popup.style.width = "100%";

        popup.style.height = "100%";

        popup.style.background = "rgba(0,0,0,.9)";

        popup.style.display = "flex";

        popup.style.justifyContent = "center";

        popup.style.alignItems = "center";

        popup.style.zIndex = "9999";

        const largeImage = document.createElement("img");

        largeImage.src = this.src;

        largeImage.style.maxWidth = "90%";

        largeImage.style.maxHeight = "90%";

        largeImage.style.borderRadius = "15px";

        popup.appendChild(largeImage);

        document.body.appendChild(popup);

        popup.addEventListener("click", function(){

            popup.remove();

        });

    });

});



const categories = document.querySelectorAll(".menu-category");

categories.forEach(category => {

    const button = category.querySelector(".menu-title");

    button.addEventListener("click", () => {

        category.classList.toggle("active");

    });

});

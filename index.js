const slideBtns = document.querySelectorAll(".arrows>div");
const slideContent = document.querySelectorAll(".slide-show>div");
const backgroundChange = document.querySelectorAll(".item");

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

let slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
    console.log(slideIndex);
};

function showSlide(n) {
    let i;
    if (n > slideContent.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slideContent.length };
    for (i = 0; i < slideContent.length; i++) {
        slideContent[i].style.display = "none";
    }
    slideContent[slideIndex - 1].style.display = "block";
    backgroundChange[0].style.backgroundImage = "url('images/desktop-image-hero-" + slideIndex + ".jpg')";
}

menuBtn.addEventListener("click", () => {
    document.querySelector(".nav-btn").classList.add("show-menu");
    document.querySelector("section").classList.add("fade-page");
});

closeBtn.addEventListener("click", () => {
    document.querySelector(".nav-btn").classList.remove("show-menu");
    document.querySelector("section").classList.remove("fade-page");
});
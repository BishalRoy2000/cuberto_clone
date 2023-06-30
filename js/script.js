// Global Variable.....
var curser = document.querySelector("#curser");
var main = document.querySelector("#main");
var menu = document.querySelector(".menu");
var menu2 = document.querySelector(".menu2");
const lerp = (x, y, a) => x * (1 - a) + y * a;

// Curser move effect...
main.addEventListener("mousemove", function (dets) {
    curser.style.left = dets.x + "px";
    curser.style.top = dets.y + "px";
})

// Move curser play vedio effect.....
document.querySelector("#overlay1").addEventListener("mousemove", function (dets) {
    document.querySelector("#elem1 img").style.scale = 1;
    document.querySelector("#elem1 img").style.opacity = 1;
    curser.style.opacity = 0;
    document.querySelector("#elem1 img").style.left = (dets.x - 440) + "px";
    document.querySelector("#elem1 img").style.top = (dets.y - 390) + "px";
})
document.querySelector("#overlay1").addEventListener("mouseleave", function (dets) {
    document.querySelector("#elem1 img").style.scale = 0;
    document.querySelector("#elem1 img").style.opacity = 0;
    curser.style.opacity = 1;
})
document.querySelector("#overlay2").addEventListener("mousemove", function (dets) {
    document.querySelector("#elem2 img").style.scale = 1;
    document.querySelector("#elem2 img").style.opacity = 1;
    curser.style.opacity = 0;
    document.querySelector("#elem2 img").style.left = (dets.x - 775) + "px";
    document.querySelector("#elem2 img").style.top = (dets.y - 390) + "px";
})
document.querySelector("#overlay2").addEventListener("mouseleave", function (dets) {
    document.querySelector("#elem2 img").style.scale = 0;
    document.querySelector("#elem2 img").style.opacity = 0;
    curser.style.opacity = 1;
})
document.querySelector("#overlay3").addEventListener("mousemove", function (dets) {
    document.querySelector("#elem3 img").style.scale = 1;
    document.querySelector("#elem3 img").style.opacity = 1;
    curser.style.opacity = 0;
    document.querySelector("#elem3 img").style.left = (dets.x - 1110) + "px";
    document.querySelector("#elem3 img").style.top = (dets.y - 390) + "px";
})
document.querySelector("#overlay3").addEventListener("mouseleave", function (dets) {
    document.querySelector("#elem3 img").style.scale = 0;
    document.querySelector("#elem3 img").style.opacity = 0;
    curser.style.opacity = 1;
})

// Add Effect after hover on "about"...
menu.addEventListener("mousemove", function (dets) {

    var dims = menu.getBoundingClientRect();

    var xstart = dims.x;
    var xend = dims.x + dims.width;
    var ystart = dims.y;
    var yend = dims.y + dims.height;

    var zeroonex = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    var zerooney = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

    gsap.to(curser, {
        scale: 8,
        duration: 0.1
    })
    gsap.to(".menu span", {
        color: "#fff",
        duration: .3,
        // y: "-5vh",
    })
    gsap.to(".menu span", {
        x: lerp(-10, 10, zeroonex),
        y: lerp(-10, 10, zerooney),
        duration: .3
    })
})
menu.addEventListener("mouseleave", function (dets) {
    gsap.to(curser, {
        scale: 1,
        duration: 0.1
    })
    gsap.to(".menu span", {
        color: "#000",
        duration: .3,
        y: 0
    })
    gsap.to(".menu span", {
        x: 0,
        duration: .3
    })
})

// Add Effect after hover on "menu"...
menu2.addEventListener("mousemove", function (dets) {

    var dims = menu2.getBoundingClientRect();

    var xstart = dims.x;
    var xend = dims.x + dims.width;
    var ystart = dims.y;
    var yend = dims.y + dims.height;

    var zeroonex = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    var zerooney = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

    gsap.to(curser, {
        scale: 8,
        duration: 0.1
    })
    gsap.to(".menu2 span", {
        color: "#fff",
        duration: .3,
        y: "-5vh"
    })
    gsap.to(".menu2 span", {
        x: lerp(-10, 10, zeroonex),
        // y: lerp(-10, 10, zerooney),
        duration: .3
    })
})

menu2.addEventListener("mouseleave", function (dets) {
    gsap.to(curser, {
        scale: 1,
        duration: 0.1
    })
    gsap.to(".menu2 span", {
        color: "#000",
        duration: .3,
        y: 0
    })
    gsap.to(".menu2 span", {
        x: 0,
        duration: .3
    })
})


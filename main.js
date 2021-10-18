// Chnage Background Color Of container header

let bgColor = document.getElementById('bgcolor');

let randomColor = ["#F5F5F5", "#fafafa", "#eee", "#e0e0e0", "#e1ff5fe", "#ffcdd2", "#fff8e1"];

function changeBg(bgColor, randomColor) {
    let change = Math.floor(Math.random() * randomColor.length);

    console.log(randomColor[change]);

    bgColor.style.backgroundColor = randomColor[change];
}

changeBg(bgColor, randomColor);

// Active Li

// let allLi = document.querySelectorAll(".allli li");

// allLi.forEach(function(ele) {

//     ele.onclick = function() {
//         allLi.forEach(function(ele) {
//             // Remove Class Active
//             ele.classList.remove("active");
//         });
//         ele.classList.add("active");
//     };
// })

// Chnage Image Every 4 secondes

let myImg = document.getElementById('my-img');

let images = [
    "images/image_1.png",
    "images/image_2.png",
    "images/image_3.png",
];

function changeImg(myImg, images) {
    setInterval(function() {
        let myRandom = Math.floor(Math.random() * images.length);

        myImg.src = images[myRandom];
    }, 4000);
}

changeImg(myImg, images);

// Change Background Color

document.body.classList.add(localStorage.getItem('aboutColor') || "white");

let smallContainer = document.getElementsByClassName("small-container");


let ul = document.querySelectorAll(".switch-color li");

let className = [];

for (let i = 0; i < ul.length; i++) {
    className.push(ul[i].getAttribute('data-color'));

    ul[i].addEventListener("click", function() {

        document.body.classList.remove(...className);
        document.body.classList.add(this.getAttribute('data-color'));

        localStorage.setItem('aboutColor', this.getAttribute('data-color'));
    }, false);
}

console.log(localStorage.getItem('aboutColor'));

let about = document.getElementById('about');

about.onclick = function() {
    window.scroll({
        top: 600,
        behavior: 'smooth'
    });
}

let services = document.getElementById('services');

services.onclick = function() {

    window.scroll({
        top: 1000,
        behavior: 'smooth'
    });
}

let contact = document.getElementById('contact');

contact.onclick = function() {
    window.scroll({
        top: 1600,
        behavior: 'smooth'
    });
}

// Menu Toggle Navbar

let navBar = document.getElementById('navbar');

let menuToggle = document.getElementById('menuToggle');

menuToggle.onclick = function() {
    navBar.style.display = "block";
}

let removeNav = document.getElementById('removeNav');

removeNav.onclick = function() {
    navBar.style.display = "none";
}
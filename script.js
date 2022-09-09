const burger = document.querySelector('.burger');
const adaptiveMenu = document.querySelector('.adaptive-menu');
const navList = document.querySelector('.nav-list');



    burger.addEventListener('click', () => {
        adaptiveMenu.classList.toggle('menu');
        if (adaptiveMenu.classList.contains('menu')) {
        }
        burger.classList.toggle('is-active')
        
});

navList.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
        adaptiveMenu.classList.remove('menu');
        burger.classList.toggle('is-active');
    }
});

// change theme

let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let body = document.querySelector('body')
let sectionTitleText = document.querySelectorAll('.section-title')
let changeColorItems = document.querySelectorAll('.change-color')
let portfolioButton = document.querySelectorAll('.portfolio-button')
let heroText = document.querySelector(".hero-text")

moon.addEventListener('click', () => {
    sun.classList.add('sun-active')
    moon.classList.remove('moon-active')
    moon.classList.add('moon-no-active')
    sun.classList.remove('sun-no-active')
    body.classList.add('white-theme')
    sectionTitleText.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "black"
    })
    changeColorItems.forEach((item) => {
        item.style.color = "black"
    })
    portfolioButton.forEach((item) => {
        item.classList.add("white-button")
    })
    if(screen.width <= 320) {
        heroText.style.color = "#bdae82"
    } else {
        heroText.style.color = "white"
    }


})
sun.addEventListener('click', () => {
    sun.classList.add('sun-no-active')
    moon.classList.remove('moon-no-active')
    moon.classList.add('moon-active')
    sun.classList.remove('sun-active')
    body.classList.remove('white-theme')
    sectionTitleText.forEach((item) => {
        item.style.backgroundColor = "black";
        item.style.color = "#bdae82";
    })
    changeColorItems.forEach((item) => {
        item.style.color = "white"
    })
    portfolioButton.forEach((item) => {
        item.classList.remove("white-button")
    })
    heroText.style.color = "white"


     
})


window.addEventListener('resize', () => {
if (body.className === "white-theme") {
    if(screen.width <= 446) {
        heroText.style.color = "#bdae82"
    } else {
        heroText.style.color = "white"
    }
        
    }
})

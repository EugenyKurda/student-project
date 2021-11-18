//-------------- HEADER -------------------//
window.onscroll = function () { myFunction() };

const header = document.getElementById("header"),
    menu = document.getElementById('menu-nav');

let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        menu.style.backgroundColor = '#F4EC98'
    } else {
        header.classList.remove("sticky");
        menu.style.backgroundColor = '#ffff'
    }
}

//-------------- BURGER -------------------//
const navMenu = document.getElementById('menu-nav'),
    navToggle = document.getElementById('toggle'),
    activeBurger = document.querySelector('.active-burger'),
    isClass = navToggle.classList.contains('active-burger');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active-burger')
        navMenu.classList.toggle('display__block')
    })
} else if (isClass === false) {
    navToggle.addEventListener('click', () => {
        navMenu.style.display = 'none'
    })
}

//-------------- ABOUT US -------------------//
const aboutUs = document.getElementById('about-us'),
    aboutBlocks = document.querySelector('.about__blocks');

if (aboutUs) {
    aboutUs.addEventListener('click', () => {
        aboutUs.classList.toggle('arrow-rotate')
        aboutBlocks.classList.toggle('display__block')
    })
}

//-------------- SERVICES -------------------//

let serviceArrow = document.getElementById('service-arrow'),
    servicesBlock = document.querySelector('.services__blocks'),
    servicesBtn = document.querySelector('.services__button'),
    serviceBlock = document.querySelector('.services__block'),
    activeBlock = document.querySelectorAll('.active');

if (serviceArrow) {
    serviceArrow.addEventListener('click', () => {
        serviceArrow.classList.toggle('arrow-rotate')
        servicesBlock.classList.toggle('display__block')
        servicesBtn.classList.toggle('display__block')
    })
}
for (let item of activeBlock) {
    if (servicesBtn) {
        servicesBtn.addEventListener('click', () => {
            item.style.display = 'block'
        })
    }
}


//-------------- PRICE -------------------//

const pricesArrow = document.getElementById('price-arrow'),
    priceCards = document.querySelector('.price__cards'),
    arrow1 = document.getElementById('price-1'),
    card1 = document.getElementById('card-1'),
    arrow2 = document.getElementById('price-2'),
    card2 = document.getElementById('card-2'),
    arrow3 = document.getElementById('price-3'),
    card3 = document.getElementById('card-3');


if (pricesArrow) {
    pricesArrow.addEventListener('click', () => {
        pricesArrow.classList.toggle('arrow-rotate')
        priceCards.classList.toggle('display__block')
    })
}

if (arrow1) {
    arrow1.addEventListener('click', () => {
        arrow1.classList.toggle('arrow-rotate')
        card1.classList.toggle('display__block')
    })
}
if (arrow2) {
    arrow2.addEventListener('click', () => {
        arrow2.classList.toggle('arrow-rotate')
        card2.classList.toggle('display__block')
    })
}
if (arrow3) {
    arrow3.addEventListener('click', () => {
        arrow3.classList.toggle('arrow-rotate')
        card3.classList.toggle('display__block')
    })
}

//-------------- TEAM -------------------//

const teamArrow = document.getElementById('team-arrow'),
    teamCards = document.querySelector('.team__cards'),
    pagination = document.querySelector('.team__pagination');


if (teamArrow) {
    teamArrow.addEventListener('click', () => {
        teamArrow.classList.toggle('arrow-rotate')
        teamCards.classList.toggle('display__block')
        pagination.classList.toggle('display__block')
    })
}

//-------------- BLOCK -------------------//

const blogArrow = document.getElementById('blog-arrow'),
    blogArticle = document.querySelector('.blog__articles');

if (blogArrow) {
    blogArrow.addEventListener('click', () => {
        blogArrow.classList.toggle('arrow-rotate')
        blogArticle.classList.toggle('display__block')
    })
}

//-------------- CONTACT -------------------//

const contactArrow = document.getElementById('contact-arrow'),
    form = document.querySelector('.contact__form'),
    contactActive = document.querySelector('.contact-active');


if (contactArrow) {
    contactArrow.addEventListener('click', () => {
        contactArrow.classList.toggle('arrow-rotate')
        contactActive.classList.toggle('display__block')
        form.classList.toggle('display__block')
    })
}

let navmenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navmenu.classList.add("show-menu")
    });
};
if(navClose) {
    navClose.addEventListener('click', () => {
        navmenu.classList.remove("show-menu");
    });
};


let navlink = document.querySelectorAll("li .nav-link");
let linkAction = () => {
    let navmenu = document.getElementById("nav-menu");
    navmenu.classList.remove("show-menu");
};
navlink.forEach(i => i.addEventListener('click', linkAction));


let blurHeader = () => {
    let header = document.getElementById("header");
    // When the scroll greater than 50 viewport height , add blur-header class to the header
    this.scrollY >= 50 ? header.classList.add("blur-header"): header.classList.remove("blur-header"); 
};
window.addEventListener('scroll', blurHeader);


let scrollup = () => {
    let scrollup = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollup.classList.add("show-scroll"):scrollup.classList.remove("show-scroll");
}
window.addEventListener('scroll', scrollup);

let sections = document.querySelectorAll("section[id]");
let scrollActive = () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        let sectionsHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href*="' + sectionId + '"]');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionsHeight) {
            sectionsClass.classList.add("active-link");
        }else {
            sectionsClass.classList.remove("active-link");
        };
    });
};
window.addEventListener('scroll', scrollActive);

// Dark / Light Theme 
let themeButton = document.getElementById("theme-button");
let darkTheme = 'dark-theme';
let iconTheme = 'ri-sun-line';

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");

let currentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-contrast-2-fill' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-contrast-2-fill' ? 'add' : 'remove'](iconTheme);
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', currentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true //Animations Reeat
})
sr.reveal('.home-data, .list-container, .testimonials-container, .join-container, .footer-container')
sr.reveal('.home-img', {origin: 'bottom'});
sr.reveal('.health-image, .routine-images, .follow-img3', {origin: 'left'});
sr.reveal('.health-data, .routine-data, .follow-img4', {origin: 'right'});
sr.reveal('.folow-data, .follow-content-1 img', {interval: 100});
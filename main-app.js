//Manipulate Navebar & Logo
let navbar = document.querySelector('.nav')
let logo = document.querySelector(".nav__logo")
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = "rgb(33, 37, 41)";
        navbar.style.padding = '.5rem 3rem'
        logo.style.fontSize = "1.8rem";
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.padding = '1.5rem 3rem'
        logo.style.fontSize = "2.2rem";
    }
}
//End Manipulate Navbar & Logo
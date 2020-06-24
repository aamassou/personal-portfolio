var about = document.getElementById("about-text");
var menuHeadings = document.getElementsByClassName('menu-heading');
var aboutMenus = document.getElementById("about-menus");
var subMenus = document.getElementsByClassName('sub-menu');

var sPos = 0;
var slider = document.getElementById("slider");
var navBars = document.getElementsByClassName("quick-nav");

var subMenuShown = false;

function toggleSubMenu(menu) {
    var heading = document.getElementById(menu+'-menu');
    if(heading.classList.contains("menu-active")) {
        hideSubMenu()
    }

    else {
        showSubMenu(menu)
    }
}

function showSubMenu(menu) {
    
    about.querySelector('h3').style.opacity = 0;
    about.querySelector('h5').style.opacity = 0;
    
    about.style.transform = "translate(0, -130px)"
    aboutMenus.style.transform = "translate(0, -130px)"
    for(let i=0; i<subMenus.length; i++) {
        subMenus[i].style.opacity = 0;
    }
    
    var subMenu = document.getElementById(menu);
    subMenu.style.opacity = 1;
    
    for(let i=0; i<menuHeadings.length;i++) {
        menuHeadings[i].classList.remove('menu-active')
    }
    
    var heading = document.getElementById(menu+'-menu');
    heading.classList.add('menu-active');
    
    if(mobileMenuShown) {
        showHeaderMenu();
    }
    
    subMenuShown = true;
}

function hideSubMenu() {
    about.style.transform = "translate(0, 0)"
    aboutMenus.style.transform = "translate(0, 0)"
    
    about.querySelector('h3').style.opacity = 1;
    about.querySelector('h5').style.opacity = 1;
    
    for(let i=0; i<subMenus.length; i++) {
        subMenus[i].style.opacity = 0;
    }
    
    for(var i=0; i<menuHeadings.length;i++) {
            menuHeadings[i].classList.remove('menu-active')
        }

    subMenuShown = false;
    }

function slideChange(val) {
    sPos += val;

    if(sPos > 0) {
        sPos = -200;
    }

    else if(sPos < -200) {
        sPos = 0;
    }

    jumpSlide(sPos);
}

function jumpSlide(pos) {
    sPos = Number(pos);
    slider.style.transform = `translate(${sPos}%, 0)`;
    updateNav();
}

function updateNav() {
    
    for(let j=0; j<navBars.length;j++) {
        navBars[j].classList.remove('nav-active');
    }

    var i = (sPos/-100);
    navBars[i].classList.add('nav-active');
}

setInterval(function() {
    sPos -= 100;
    if(sPos < -200) {
        sPos = 0;
    }

    jumpSlide(sPos);
}, 3000)

var expOne = document.getElementById("expOne");
var expTwo = document.getElementById("expTwo");
var expThree = document.getElementById("expThree");

var projOne = document.getElementById("projOne");
var projTwo = document.getElementById("projTwo");
var projThree = document.getElementById("projThree");
window.addEventListener('scroll', function() {
    if(window.scrollY >= (expOne.offsetTop) - 700) {
        expOne.style.opacity = 1;
        expOne.style.animation = 'fadeInExperience 2s';

        setTimeout(function() {
            expTwo.style.opacity = 1;
            expTwo.style.animation = 'fadeInExperience 2s';
            // expTwo.style.animationDelay = '1s';
        }, 750)
        
        setTimeout(function() {
            expThree.style.opacity = 1;
            expThree.style.animation = 'fadeInExperience 2s';
            // expThree.style.animationDelay = '2s';
        },1500);
        
    }

    if(window.scrollY >= (projOne.offsetTop) - 700) {
        projOne.style.opacity = 1;
        projOne.style.animation = 'fadeInProject 2s';
    }

    if(window.scrollY >= (projTwo.offsetTop) - 700) {
        projTwo.style.opacity = 1;
        projTwo.style.animation = 'fadeInProject 2s';
    }

    if(window.scrollY >= (projThree.offsetTop) - 700) {
        projThree.style.opacity = 1;
        projThree.style.animation = 'fadeInProject 2s';
    }
});


var mobileMenuShown = false;
var mobileMenu = document.getElementById("mobile-sub-menu");

function showHeaderMenu() {
    if(subMenuShown) {
        hideSubMenu();
    }

    if(mobileMenuShown) {
        mobileMenu.style.opacity = 0;
        mobileMenu.style.pointerEvents = "none";

        document.getElementById("mobile-hide").style.display = 'none';
        document.getElementById("mobile-hide").style.opacity = 0;

        document.getElementById("mobile-show").style.opacity = 1;
        document.getElementById("mobile-show").display = 'block';
        
        mobileMenuShown = false;
    }
    
    else {
        mobileMenu.style.opacity = 1;
        mobileMenu.style.pointerEvents = "all";
    
        document.getElementById("mobile-hide").style.display = 'block';
        document.getElementById("mobile-hide").style.opacity = 1;

        document.getElementById("mobile-show").display = 'none';
        document.getElementById("mobile-show").style.opacity = 0;
        mobileMenuShown = true;
    }
}

function showModal() {
    document.getElementById("modal").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("header").style.zIndex = 0;
}

function hideModal() {
    document.getElementById("modal").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("header").style.zIndex = 4;
}

function sendMsg() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var msgInput = document.getElementById("message");

    nameInput.value = "";
    emailInput.value = "";
    msgInput.value = "";
}
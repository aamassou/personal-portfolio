var about = document.getElementById("about-text");
var menuHeadings = document.getElementsByClassName('menu-heading');
var aboutMenus = document.getElementById("about-menus");
var subMenus = document.getElementsByClassName('sub-menu');
var mobileFace = document.getElementById("mobile-face");

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
    mobileFace.style.opacity = 0;
    
    about.style.transform = "translate(0, -130px)";
    aboutMenus.style.transform = "translate(0, -130px)";
    mobileFace.style.transform = "translate(0, -130px)";
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
    mobileFace.style.transform = "translate(0, 0)"
    
    about.querySelector('h3').style.opacity = 1;
    about.querySelector('h5').style.opacity = 1;
    mobileFace.style.opacity = 1;
    
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

var workHeading = document.getElementById("work-heading");
var contactHeading = document.getElementById("contact-heading");

var workUnderline = document.getElementById("work-underline");
var contactUnderline = document.getElementById("contact-underline");

var experienceHeading = document.getElementById("experience-heading");
var projectsHeading = document.getElementById("projects-heading");
var resumeHeading = document.getElementById("resume-heading");
var resumeImg = document.getElementById("resume").querySelector("img");

var expOne = document.getElementById("expOne");
var expTwo = document.getElementById("expTwo");
var expThree = document.getElementById("expThree");

var projOne = document.getElementById("projOne");
var projTwo = document.getElementById("projTwo");
var projThree = document.getElementById("projThree");
window.addEventListener('scroll', function() {

    if(window.scrollY >= (workHeading.offsetTop) - 600) {
        workHeading.style.opacity = 1;
        workHeading.style.animation = 'slideInWork 0.5s';

        setTimeout(function() {
            workUnderline.style.opacity = 1;
            workUnderline.style.animation = 'slideInWork 0.5s'
        }, 500);
    }

    if(window.scrollY >= (experienceHeading.offsetTop) - 600) {
        experienceHeading.style.opacity = 1;
        experienceHeading.style.animation = 'slideInExpHeading 0.5s';
    }
    
    if(window.scrollY >= (expOne.offsetTop) - 600) {
        expOne.style.opacity = 1;
        expOne.style.animation = 'fadeInExperience 1.5s';

        setTimeout(function() {
            expTwo.style.opacity = 1;
            expTwo.style.animation = 'fadeInExperience 1.5s';
        }, 750)
        
        setTimeout(function() {
            expThree.style.opacity = 1;
            expThree.style.animation = 'fadeInExperience 1.5s';
        },1500);
        
    }

    if(window.scrollY >= (projectsHeading.offsetTop) - 600) {
        projectsHeading.style.opacity = 1;
        projectsHeading.style.animation = 'slideInExpHeading 0.5s';
    }

    if(window.scrollY >= (projOne.offsetTop) - 600) {
        projOne.style.opacity = 1;
        projOne.style.animation = 'fadeInProject 1.2s';
    }

    if(window.scrollY >= (projTwo.offsetTop) - 600) {
        projTwo.style.opacity = 1;
        projTwo.style.animation = 'fadeInProject 1.2s';
    }

    if(window.scrollY >= (resumeHeading.offsetTop) - 600) {
        resumeHeading.style.opacity = 1;
        resumeHeading.style.animation = 'slideInExpHeading 0.5s';
    }

    if(window.scrollY >= (resumeImg.offsetTop) - 400) {
        resumeImg.style.opacity = 1;
    }

    if(window.scrollY >= (projThree.offsetTop) - 600) {
        projThree.style.opacity = 1;
        projThree.style.animation = 'fadeInProject 1.2s';
    }

    if(window.scrollY >= (contactHeading.offsetTop) - 600) {
        contactHeading.style.opacity = 1;
        contactHeading.style.animation = 'slideInWork 0.5s';

        setTimeout(function() {
            contactUnderline.style.opacity = 1;
            contactUnderline.style.animation = 'slideInWork 0.5s'
        }, 500);
    }


});


var mobileMenuShown = false;
var mobileMenu = document.getElementById("mobile-sub-menu");

function toggleHeaderMenu() {
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
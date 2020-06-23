var sPos = 0;
var subMenus = document.getElementsByClassName('sub-menu');
var menuHeadings = document.getElementsByClassName('menu-heading');

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
    var about = document.getElementById("about-text");
    
    about.querySelector('h3').style.opacity = 0;
    about.querySelector('h5').style.opacity = 0;
    
    about.style.transform = "translate(0, -130px)"
    document.getElementById("about-menus").style.transform = "translate(0, -130px)"
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

    // setTimeout(function() {
    //     document.getElementById('exit-menu').style.opacity = 1;
    // },500);
    
    if(mobileMenuShown) {
        showHeaderMenu();
    }
    
    subMenuShown = true;
}

function hideSubMenu() {
    var about = document.getElementById("about-text");
    about.style.transform = "translate(0, 0)"
    document.getElementById("about-menus").style.transform = "translate(0, 0)"
    
    about.querySelector('h3').style.opacity = 1;
    about.querySelector('h5').style.opacity = 1;
    
    for(let i=0; i<subMenus.length; i++) {
        subMenus[i].style.opacity = 0;
    }
    
    for(var i=0; i<menuHeadings.length;i++) {
            menuHeadings[i].classList.remove('menu-active')
        }

    // document.getElementById('exit-menu').style.opacity = 0;
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
    document.getElementById("slider").style.transform = `translate(${sPos}%, 0)`;
    updateNav();
}

function updateNav() {
    
    var navBars = document.getElementsByClassName("quick-nav");
    for(let j=0; j<navBars.length;j++) {
        navBars[j].classList.remove('nav-active');
    }

    var i = (sPos/-100);
    navBars[i].classList.add('nav-active');
}

function sendMsg() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var msgInput = document.getElementById("message");

    nameInput.value = "";
    emailInput.value = "";
    msgInput.value = "";
}

var mobileMenuShown = false;
function showHeaderMenu() {
    if(subMenuShown) {
        hideSubMenu();
    }

    var mobileMenu = document.getElementById("mobile-sub-menu");

    if(mobileMenuShown) {
        mobileMenu.style.opacity = 0;
        mobileMenu.style.pointerEvents = "none";

        document.getElementById("times").style.display = 'none';
        document.getElementById("times").style.opacity = 0;

        document.getElementById("bars").style.opacity = 1;
        document.getElementById("bars").display = 'block';
        
        mobileMenuShown = false;
    }
    
    else {
        mobileMenu.style.opacity = 1;
        mobileMenu.style.pointerEvents = "all";
    
        document.getElementById("times").style.display = 'block';
        document.getElementById("times").style.opacity = 1;

        document.getElementById("bars").display = 'none';
        document.getElementById("bars").style.opacity = 0;
        mobileMenuShown = true;
    }
}
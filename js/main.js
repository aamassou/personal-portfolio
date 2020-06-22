var sPos = 0;
var subMenus = document.getElementsByClassName('sub-menu');
var menuHeadings = document.getElementsByClassName('menu-heading');

function showSubMenu(menu) {
    var about = document.getElementById("about-text");
    about.style.transform = "translate(0, -130px)"

    about.querySelector('h3').style.opacity = 0;
    about.querySelector('h5').style.opacity = 0;

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

    setTimeout(function() {
        document.getElementById('exit-menu').style.opacity = 1;
    },500);
    
}

function hideSubMenu() {
    var about = document.getElementById("about-text");
    about.style.transform = "translate(0, 0)"
    
    about.querySelector('h3').style.opacity = 1;
    about.querySelector('h5').style.opacity = 1;
    
    for(let i=0; i<subMenus.length; i++) {
        subMenus[i].style.opacity = 0;
    }
    
    for(var i=0; i<menuHeadings.length;i++) {
            menuHeadings[i].classList.remove('menu-active')
        }

    document.getElementById('exit-menu').style.opacity = 0;

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
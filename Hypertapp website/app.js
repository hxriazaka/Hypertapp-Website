var typed = new Typed(".typing", {
    strings: ["DEDICATED", "SOFTWARE", "REMOTE", "SKILLED", "TOP 5%"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// SCROLL NAV-BAR ANIMATION

const header = document.querySelector('.navbar');

document.addEventListener('scroll', ()=> {
    var scroll_position = window.scrollY;
    if (scroll_position > 30) {
        header.style.backgroundColor = '#0097ff';
    } else {
        header.style.backgroundColor = 'transparent'
    };
});

// SCROLL ITEMS ANIMATION

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
        }else{
            reveals[i].classList.remove('active')
        }
    }
}
window.addEventListener('scroll', reveal2);

function reveal2(){
    var reveals = document.querySelectorAll('.reveal2');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
        }else{
            reveals[i].classList.remove('active')
        }
    }
}


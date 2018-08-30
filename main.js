// --- hamburger --- 

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

// --- circle progress bar --- 

const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

function setProgress(percent, object) {
    const offset = circumference - percent / 100 * circumference;
    object.style.strokeDashoffset = offset;
}

const allCircles = document.querySelectorAll('.progress-ring__circle');
const percents = [50, 35, 80];

for(let i = 0; i < allCircles.length; i++) {
    allCircles[i].style.strokeDasharray = `${circumference} ${circumference}`;
    allCircles[i].style.strokeDashoffset = `${circumference}`;

    setProgress(percents[i], allCircles[i]);
}

// --- gallery ---

const close = document.querySelector('.close');
const next = document.querySelector('.right-arrow');
const prev = document.querySelector('.left-arrow');
const images = document.querySelectorAll('.portfolio-img');
const modal = document.querySelector('.modal');
const gallery_img = document.querySelector('.gallery-img');
let position;

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        modal.classList.add('open');
        gallery_img.src = images[i].src;
        position = i;
});}

close.addEventListener('click', function() {
    modal.classList.remove('open');
});

function checkPosition() {
    if(position < 0) {
        position = images.length - 1;
    } else if(position > images.length - 1) {
        position = 0;
    }
}

next.addEventListener('click', function() {
    position++;
    checkPosition();
    gallery_img.src = images[position].src;
});

prev.addEventListener('click', function() {
    position--;
    checkPosition();
    gallery_img.src = images[position].src;
});

// --- smooth scroll ---

function smoothScroll(anchor) {
    $('html, body').animate({
        scrollTop: $(anchor).offset().top - 60
    }, 1000);
}

const menu_el_length = $('.menu-el').length;

for(let i = 1; i <= menu_el_length; i++) {
    $(`.el-${i}`).click(function() {
        smoothScroll(`.anchor-${i}`);
    })
}

$('.arrow').click(function() {
    smoothScroll('.charts');
})

$('.logo-link').click(function() {
    smoothScroll('.welcome');
})

// --- sticky menu ---
const header = document.querySelector('.page-header');
const headerHeight = header.offsetHeight;

window.onscroll = () => header.classList.toggle('scrolled', window.pageYOffset > headerHeight);

// --- socials menu ---

const socials_menu = document.querySelector('.socials-menu');
const social_icons = document.querySelector('.social-icons');

socials_menu.addEventListener('click', function() {
    social_icons.classList.toggle('is-active');
    socials_menu.classList.toggle('is-active');
})


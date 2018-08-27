// --- hamburger --- 

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
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

const all_circles = document.querySelectorAll('.progress-ring__circle');
const percents = [50, 35, 80];

for(let i = 0; i < all_circles.length; i++) {
    all_circles[i].style.strokeDasharray = `${circumference} ${circumference}`;
    all_circles[i].style.strokeDashoffset = `${circumference}`;

    setProgress(percents[i], all_circles[i]);
}

// --- gallery ---

const close = document.querySelector('.close');
      next = document.querySelector('.right-arrow');
      prev = document.querySelector('.left-arrow');
      images = document.querySelectorAll('.portfolio-img');
      modal = document.querySelector('.modal');
      gallery_img = document.querySelector('.gallery-img');
let position;

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        modal.style.display = "flex";
        gallery_img.src = images[i].src;
        position = i;
});}

close.addEventListener('click', function() {
    modal.style.display = "none";
   
});

function checkPosition() {
    if(position < 0) {
        position = images.length - 1;
    } else if(position > images.length -1) {
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

for(let i = 1; i <= $('.menu-el').length; i++) {
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

$(window).scroll(function() {
    const header = $('.page-header');

    if(pageYOffset > header.height()) {
        header.addClass('scrolled');
    } else {
        header.removeClass('scrolled');
    }
})


// --- socials menu ---

socials_menu = document.querySelector('.socials-menu');
social_icons = document.querySelector('.social-icons');

socials_menu.addEventListener('click', function() {
    social_icons.classList.toggle('is-active');
    socials_menu.classList.toggle('is-active');
})


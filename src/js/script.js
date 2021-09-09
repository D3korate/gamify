const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints:{
        1140:{
            slidesPerView: 3, 
        },
        1065:{
            slidesPerView: 3, 
        },
        771:{
            slidesPerView: 2,
            spaceBetween: 1,
        },
        720:{
            slidesPerView: 2,
            spaceBetween: 50,
        },
        650:{
            slidesPerView: 1,
            
        },
        649:{
            slidesPerView: 1,
            
        },
        451:{
            slidesPerView: 1,
        },
        320:{
            slidesPerView: 3,
            direction: 'vertical',
            spaceBetween: 20,
        }

        
    },
    

  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.review__wrapper-next',
      prevEl: '.review__wrapper-prew',
    },
  
    
  });





  let tab1 = document.querySelector("#tab1");
  let tab2 = document.querySelector("#tab2");
  let tabs = document.querySelectorAll(".tab");
  let content = document.querySelectorAll(".content");
  
  tab1.onclick = () => {
    if (tab1.checked) {
      content[0].style.display = "block";
      content[1].style.display = "none";
      tabs[0].classList.add("plus");
      tabs[1].classList.remove("plus");
    }
  };
  
  tab2.onclick = () => {
    if (tab2.checked) {
      content[0].style.display = "none";
      content[1].style.display = "block";
     
      tabs[1].classList.add("plus");
      tabs[0].classList.remove("plus");
     
    }
  };

const burger = document.querySelector('.header__burger');
const burgerContent = document.querySelector('.header__burger-ul');




burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    burgerContent.classList.toggle('active');
});

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });



 

// Main Slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-item");
    let dots = document.getElementsByClassName("dots__item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}


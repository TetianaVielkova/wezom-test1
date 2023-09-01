// ==========Swiper mobile===============
document.addEventListener("DOMContentLoaded", function () {
  const swiperMobile = new Swiper(".swiper-container", {
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

//===========Slider Desktop========================================

const containers = document.querySelectorAll(".carousel__container");
containers.forEach((container) => {
  const mainSlider = container.querySelector(".carousel");
  const mainPreview = container.querySelector(".carousel__preview");

  let galleryThumbs = new Swiper(mainPreview, {
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
    direction: "vertical",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  let galleryTop = new Swiper(mainSlider, {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    thumbs: {
      swiper: galleryThumbs,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: container.querySelector(".swiper-button-next"),
      prevEl: container.querySelector(".swiper-button-prev"),
    },
  });
});


//==============Show element===================================

const showElements = document.querySelectorAll('.js-open-info');
const termsText = document.querySelectorAll('.js-info-text');
termsText.forEach((element) => {
    element.style.display = 'none';
});

showElements.forEach((element) => {
  element.addEventListener('click', () => {
    const termsText = element.nextElementSibling;
    const arrowIcon = element.querySelector('.js-show-icon');

    if (termsText.style.display === 'none') {
      termsText.style.display = 'block';
      arrowIcon.classList.add('button__icon-flip');
    } else {
      termsText.style.display = 'none';
      arrowIcon.classList.remove('button__icon-flip');
    }
  });
});
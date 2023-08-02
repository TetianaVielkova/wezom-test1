//==========Swiper mobile===============
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

//===========Slider Desktop========================================
let thumbnails = document.getElementsByClassName('thumbnail');
let activeImage = document.getElementById('featured');
let lastClickedThumbnail = null;
let thumbnailClicked = false;

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('mouseenter', function() {
    if (!thumbnailClicked) {
      activeImage.src = this.src;
    }
});

thumbnails[i].addEventListener('click', function() {
  if (lastClickedThumbnail) {
    lastClickedThumbnail.classList.remove('active');
  }

    this.classList.add('active');
    lastClickedThumbnail = this;
    thumbnailClicked = true;
});
}

let slider = document.getElementById('slider');
let buttonTop = document.getElementById('slideTop');
let buttonBottom = document.getElementById('slideBottom');

function updateArrowOpacity() {
  if (slider.scrollTop === 0) {
    buttonTop.style.opacity = '0.5';
      buttonTop.classList.add('inactive'); 
    } else {
      buttonTop.style.opacity = '1';
      buttonTop.classList.remove('inactive'); 
  }

  if (slider.scrollTop + slider.offsetHeight >= slider.scrollHeight) {
    buttonBottom.style.opacity = '0.5';
    buttonBottom.classList.add('inactive');
  } else {
    buttonBottom.style.opacity = '1';
    buttonBottom.classList.remove('inactive');
  }
}
  buttonTop.addEventListener('click', function() {
    document.getElementById('slider').scrollTop -= 130;
    updateArrowOpacity()
  });

  buttonBottom.addEventListener('click', function() {
    document.getElementById('slider').scrollTop += 130;
    updateArrowOpacity()
  });

  document.getElementById('slide-wrapper').addEventListener('mouseleave', function() {
    if (lastClickedThumbnail && !thumbnailClicked) {
      activeImage.src = lastClickedThumbnail.src;
    }

});
  activeImage.addEventListener('mouseleave', function() {
    thumbnailClicked = false;
});

  function setInitialActiveThumbnail() {
    lastClickedThumbnail = document.querySelector('.thumbnail.active');
      if (lastClickedThumbnail) {
        activeImage.src = lastClickedThumbnail.src;
      }
  }
  window.addEventListener('load', function() {
    setInitialActiveThumbnail();
    updateArrowOpacity(); 
    });
    slider.addEventListener('mousemove', function(e) {
      if (!thumbnailClicked) {
        let thumbnail = e.target.closest('.thumbnail');
          if (thumbnail) {
            activeImage.src = thumbnail.src;
          }
      }
    });



//==============Show element===================================

const showElements = document.querySelectorAll('.services__info-show');
const termsTextElements = document.querySelectorAll('.services__text');
termsTextElements.forEach((element) => {
    element.style.display = 'none';
});

showElements.forEach((element) => {
  element.addEventListener('click', () => {
    const termsText = element.nextElementSibling;
    const arrowIcon = element.querySelector('.arrow-icon');

    if (termsText.style.display === 'none') {
      termsText.style.display = 'block';
      arrowIcon.classList.add('services__icon-flip');
    } else {
      termsText.style.display = 'none';
      arrowIcon.classList.remove('services__icon-flip');
    }
  });
});
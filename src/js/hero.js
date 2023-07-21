const thumbnailSlider = document.querySelector('.thumbnail-slider');
const thumbnailImages = document.querySelector('.thumbnail-images');
const mainImage = document.querySelector('.main-image img');
const thumbnailPrev = document.querySelector('.thumbnail-prev');
const thumbnailNext = document.querySelector('.thumbnail-next');

let currentSlide = 0;

function updateMainImage() {
    const selectedThumbnail = thumbnailImages.children[currentSlide];
    const imgSrc = selectedThumbnail.getAttribute('src');
    mainImage.setAttribute('src', imgSrc);

    const thumbnailSlides = thumbnailImages.children;
    for (let i = 0; i < thumbnailSlides.length; i++) {
        thumbnailSlides[i].classList.remove('selected');
    }

    selectedThumbnail.classList.add('selected');
}

function updateThumbnailSliderPositionWithLoop() {
    const numThumbnails = thumbnailImages.children.length;
    const offset = currentSlide * 80;

    if (currentSlide === 0) {
        currentSlide = numThumbnails - 1;
    } else if (currentSlide === numThumbnails - 1) {
        currentSlide = 0;
    }
    thumbnailImages.style.transform = `translateY(-${currentSlide * 80}px)`;
}

thumbnailPrev.addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    updateThumbnailSliderPositionWithLoop();
});

thumbnailNext.addEventListener('click', () => {
    const numThumbnails = thumbnailImages.children.length;
    currentSlide = Math.min(currentSlide + 1, numThumbnails - 1);
    updateThumbnailSliderPositionWithLoop();
});

thumbnailImages.addEventListener('click', (event) => {
    const thumbnailIndex = Array.from(thumbnailImages.children).indexOf(event.target);
    if (thumbnailIndex !== -1) {
        currentSlide = thumbnailIndex;
        updateMainImage(); 
        updateThumbnailSliderPositionWithLoop();
    }
});

updateMainImage();

//======================================================

import reviewsData from './../data/reviews.json';

function calculateAverageRating(reviews) {
  const totalRatings = reviews.reduce((sum, review) => sum + parseInt(review.rating), 0);
  return Math.round(totalRatings / reviews.length);
}

function generateAverageRatingHTML(averageRating) {
  const maxRating = 5;
  const fullStars = Math.min(averageRating, maxRating);
  const emptyStars = maxRating - fullStars;

  const filledStarHTML = `
    <svg viewBox="0 0 34 32" width="14px" height="14px" fill="#FFA800">
      <path  d="M6.836 31.998c-0.125 0-0.251-0.038-0.356-0.115-0.187-0.135-0.28-0.363-0.24-0.588l1.872-10.831-7.929-7.67c-0.165-0.16-0.224-0.399-0.153-0.616s0.261-0.376 0.489-0.409l10.956-1.58 4.9-9.854c0.102-0.206 0.313-0.335 0.543-0.335s0.442 0.13 0.543 0.335l4.9 9.854 10.957 1.58c0.228 0.033 0.417 0.191 0.489 0.409 0.071 0.217 0.012 0.456-0.153 0.616l-7.929 7.671 1.872 10.831c0.039 0.225-0.055 0.453-0.24 0.588-0.186 0.136-0.434 0.153-0.638 0.046l-9.8-5.113-9.801 5.113c-0.088 0.046-0.185 0.068-0.282 0.068z"></path>
    </svg>
  `;
  const emptyStarHTML = `
    <svg viewBox="0 0 34 32" width="14px" height="14px" fill="#FFA800" style="opacity: 0.5;">
      <path  d="M6.836 31.998c-0.125 0-0.251-0.038-0.356-0.115-0.187-0.135-0.28-0.363-0.24-0.588l1.872-10.831-7.929-7.67c-0.165-0.16-0.224-0.399-0.153-0.616s0.261-0.376 0.489-0.409l10.956-1.58 4.9-9.854c0.102-0.206 0.313-0.335 0.543-0.335s0.442 0.13 0.543 0.335l4.9 9.854 10.957 1.58c0.228 0.033 0.417 0.191 0.489 0.409 0.071 0.217 0.012 0.456-0.153 0.616l-7.929 7.671 1.872 10.831c0.039 0.225-0.055 0.453-0.24 0.588-0.186 0.136-0.434 0.153-0.638 0.046l-9.8-5.113-9.801 5.113c-0.088 0.046-0.185 0.068-0.282 0.068z"></path>
    </svg>
  `;

  let ratingHTML = filledStarHTML.repeat(fullStars);
  ratingHTML += emptyStarHTML.repeat(emptyStars);
  return ratingHTML;
}
const averageRating = calculateAverageRating(reviewsData);

const averageRatingElement = document.getElementById('averageRating');
averageRatingElement.innerHTML = generateAverageRatingHTML(averageRating);

function getTotalReviewsCount(reviews) {
  return reviews.length;
}
const totalReviewsCount = getTotalReviewsCount(reviewsData);
const totalReviewsElement = document.getElementById('totalReviews');
totalReviewsElement.textContent = totalReviewsCount;


//=================================================

const showElements = document.querySelectorAll('.info__box-terms-show');

const termsTextElements = document.querySelectorAll('.terms__text');
termsTextElements.forEach((element) => {
    element.style.display = 'none';
});

showElements.forEach((element) => {
  element.addEventListener('click', () => {
    const termsText = element.nextElementSibling;
    const arrowIcon = element.querySelector('.arrow-icon');

    if (termsText.style.display === 'none') {
      termsText.style.display = 'block';
      arrowIcon.classList.add('flip');
    } else {
      termsText.style.display = 'none';
      arrowIcon.classList.remove('flip');
    }
  });
});
import reviewsData from './../data/reviews.json';

const productReviews = document.querySelector('.js-reviews-list');
const showAllBtn = document.querySelector('.js-show-all'); 
const showMoreBtn = document.querySelector('.js-show-more');

let reviewsToShow = 2;
let currentReviews = reviewsToShow;
let allReviewsDisplayed = false;

function toggleReviewsDisplay() {
    const spanElement = showAllBtn.querySelector('span');

    if (allReviewsDisplayed) {
        currentReviews = reviewsToShow;
        showMoreBtn.style.display = 'block';
        spanElement.textContent = 'Все отзывы';
    } else {
        currentReviews = reviewsData.length;
        showMoreBtn.style.display = 'none';
        spanElement.textContent = 'Скрыть все';
    }
    allReviewsDisplayed = !allReviewsDisplayed;
    displayProductReviews(reviewsData);
}
function displayProductReviews(reviews) {
    let reviewsHtml = '';

    reviews.slice(0, currentReviews).forEach((review) => {
        reviewsHtml += `
        <div class="review-card">
            <div class="row mb-1 align-items-center">
            <div class="col-auto">
                <div class="text text--big-size text--dark-blue text--bold">${review.name} 
                    <span class="text">&nbsp / &nbsp${review.date}</span>
                </div>
            </div>
            <div class="col">
                <div class="stars" data-rating="${review.rating}">
                    <div class="stars__item">
                        <svg viewBox="0 0 34 32" width="14px" height="14px">
                            <path d="M6.836 31.998c-0.125 0-0.251-0.038-0.356-0.115-0.187-0.135-0.28-0.363-0.24-0.588l1.872-10.831-7.929-7.67c-0.165-0.16-0.224-0.399-0.153-0.616s0.261-0.376 0.489-0.409l10.956-1.58 4.9-9.854c0.102-0.206 0.313-0.335 0.543-0.335s0.442 0.13 0.543 0.335l4.9 9.854 10.957 1.58c0.228 0.033 0.417 0.191 0.489 0.409 0.071 0.217 0.012 0.456-0.153 0.616l-7.929 7.671 1.872 10.831c0.039 0.225-0.055 0.453-0.24 0.588-0.186 0.136-0.434 0.153-0.638 0.046l-9.8-5.113-9.801 5.113c-0.088 0.046-0.185 0.068-0.282 0.068z"></path>
                        </svg>
                    </div>
                    <div class="stars__item">
                        <svg viewBox="0 0 34 32" width="14px" height="14px">
                            <path  d="M6.836 31.998c-0.125 0-0.251-0.038-0.356-0.115-0.187-0.135-0.28-0.363-0.24-0.588l1.872-10.831-7.929-7.67c-0.165-0.16-0.224-0.399-0.153-0.616s0.261-0.376 0.489-0.409l10.956-1.58 4.9-9.854c0.102-0.206 0.313-0.335 0.543-0.335s0.442 0.13 0.543 0.335l4.9 9.854 10.957 1.58c0.228 0.033 0.417 0.191 0.489 0.409 0.071 0.217 0.012 0.456-0.153 0.616l-7.929 7.671 1.872 10.831c0.039 0.225-0.055 0.453-0.24 0.588-0.186 0.136-0.434 0.153-0.638 0.046l-9.8-5.113-9.801 5.113c-0.088 0.046-0.185 0.068-0.282 0.068z"></path>
                        </svg>
                    </div> 
                    <div class="stars__item">
                        <svg viewBox="0 0 34 32" width="14px" height="14px">
                            <path  d="M6.836 31.998c-0.125 0-0.251-0.038-0.356-0.115-0.187-0.135-0.28-0.363-0.24-0.588l1.872-10.831-7.929-7.67c-0.165-0.16-0.224-0.399-0.153-0.616s0.261-0.376 0.489-0.409l10.956-1.58 4.9-9.854c0.102-0.206 0.313-0.335 0.543-0.335s0.442 0.13 0.543 0.335l4.9 9.854 10.957 1.58c0.228 0.033 0.417 0.191 0.489 0.409 0.071 0.217 0.012 0.456-0.153 0.616l-7.929 7.671 1.872 10.831c0.039 0.225-0.055 0.453-0.24 0.588-0.186 0.136-0.434 0.153-0.638 0.046l-9.8-5.113-9.801 5.113c-0.088 0.046-0.185 0.068-0.282 0.068z"></path>
                        </svg>
                    </div> 
                    <div class="stars__item">
                        <svg viewBox="0 0 34 32" width="14px" height="14px">
                            <path  d="M6.836 31.998c-0.125 0-0.251-0.038-0.356-0.115-0.187-0.135-0.28-0.363-0.24-0.588l1.872-10.831-7.929-7.67c-0.165-0.16-0.224-0.399-0.153-0.616s0.261-0.376 0.489-0.409l10.956-1.58 4.9-9.854c0.102-0.206 0.313-0.335 0.543-0.335s0.442 0.13 0.543 0.335l4.9 9.854 10.957 1.58c0.228 0.033 0.417 0.191 0.489 0.409 0.071 0.217 0.012 0.456-0.153 0.616l-7.929 7.671 1.872 10.831c0.039 0.225-0.055 0.453-0.24 0.588-0.186 0.136-0.434 0.153-0.638 0.046l-9.8-5.113-9.801 5.113c-0.088 0.046-0.185 0.068-0.282 0.068z"></path>
                        </svg>
                    </div> 
                    <div class="stars__item">
                        <svg viewBox="0 0 34 32" width="14px" height="14px">
                            <path  d="M6.836 31.998c-0.125 0-0.251-0.038-0.356-0.115-0.187-0.135-0.28-0.363-0.24-0.588l1.872-10.831-7.929-7.67c-0.165-0.16-0.224-0.399-0.153-0.616s0.261-0.376 0.489-0.409l10.956-1.58 4.9-9.854c0.102-0.206 0.313-0.335 0.543-0.335s0.442 0.13 0.543 0.335l4.9 9.854 10.957 1.58c0.228 0.033 0.417 0.191 0.489 0.409 0.071 0.217 0.012 0.456-0.153 0.616l-7.929 7.671 1.872 10.831c0.039 0.225-0.055 0.453-0.24 0.588-0.186 0.136-0.434 0.153-0.638 0.046l-9.8-5.113-9.801 5.113c-0.088 0.046-0.185 0.068-0.282 0.068z"></path>
                        </svg>
                    </div> 
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12">
                    <div class="text text--big-size">${review.text}</div>
                </div>
                <div class="col-12 mb-3 mt-4">
                    <div class="line"></div>
                </div>
            </div>
        </div>
        `;
    });
    productReviews.innerHTML = reviewsHtml;

    if (currentReviews >= reviewsData.length) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'block'; 
    }
}

showAllBtn.addEventListener('click', toggleReviewsDisplay);

showMoreBtn.addEventListener('click', () => {
    currentReviews += 2;
    displayProductReviews(reviewsData);
});

displayProductReviews(reviewsData.slice(0, reviewsToShow));

//=================Total reviews===============================================

const totalReviews = document.querySelector('.js-reviews-total');
function getTotalReviewsCount(reviews) {
    return reviews.length;
}
const totalReviewsCount = getTotalReviewsCount(reviewsData);
totalReviews.textContent = totalReviewsCount;

const totalReviewsElements = document.querySelectorAll('.js-reviews-total');
totalReviewsElements.forEach((element) => {
    element.textContent = totalReviewsCount;
});


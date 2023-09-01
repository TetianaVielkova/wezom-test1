//====Desktop open CategoryList========================
document.addEventListener('DOMContentLoaded', () => {
    const headerBtnMenu = document.querySelector('.js-btn-menu');
    const catalog = document.querySelector('.js-category');
    const iconMenu = document.querySelector('.js-menu-icon');
    const iconClose = document.querySelector('.js-close-icon');

    headerBtnMenu.addEventListener('click', (e) => {
        catalog.classList.toggle('category--active');
        iconMenu.classList.toggle('js-hidden'); 
        iconClose.classList.toggle('js-hidden'); 
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.js-close-category')) {
            catalog.classList.remove('category--active');
            iconMenu.classList.remove('js-hidden');
            iconClose.classList.add('js-hidden');
        }
    });
});

//========Mobile open Catalog List===================================
document.addEventListener('DOMContentLoaded', () => {
    const topBtnMenu = document.querySelector('.js-open-category');
    const catalogItems = document.querySelector('.js-category-mobile');

    topBtnMenu.addEventListener('click', (e) => {
        catalogItems.classList.toggle('category--mobile-show');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.js-open-category') && !e.target.closest('.js-category-mobile') || e.target.closest('.js-category-item')) {
            catalogItems.classList.remove('category--mobile-show');
        }
    });
});
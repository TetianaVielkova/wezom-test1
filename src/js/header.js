//====Desktop open CategoryList========================
document.addEventListener('DOMContentLoaded', () => {
    const headerBtnMenu = document.querySelector('.js-btn-menu');
    const catalog = document.querySelector('.js-category');
    const iconMenu = document.querySelector('.icon__menu');
    const iconClose = document.querySelector('.icon__close');

    headerBtnMenu.addEventListener('click', (e) => {
        catalog.classList.toggle('category--active');
        iconMenu.classList.toggle('hidden'); 
        iconClose.classList.toggle('hidden'); 
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.js-close-category')) {
            catalog.classList.remove('category--active');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
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
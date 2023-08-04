//====Desktop open CategoryList========================
document.addEventListener('DOMContentLoaded', () => {
    const headerBtnMenu = document.querySelector('.header__btn-menu');
    const catalog = document.querySelector('.category__list');
    const iconMenu = document.querySelector('.icon__menu');
    const iconClose = document.querySelector('.icon__close');

    headerBtnMenu.addEventListener('click', (e) => {
        catalog.classList.toggle('category__list-active');
        iconMenu.classList.toggle('hidden'); 
        iconClose.classList.toggle('hidden'); 
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header__box-category')) {
            catalog.classList.remove('category__list-active');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
        }
    });
});

//========Mobile open Catalog List===================================
document.addEventListener('DOMContentLoaded', () => {
    const topBtnMenu = document.querySelector('.menu__btn-category');
    const catalogItems = document.querySelector('.category__list-mobile');

    topBtnMenu.addEventListener('click', (e) => {
        catalogItems.classList.toggle('category__list-mobile-show');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu__btn-category') && !e.target.closest('.category__list-mobile') || e.target.closest('.category__item')) {
            catalogItems.classList.remove('category__list-mobile-show');
        }
    });
});
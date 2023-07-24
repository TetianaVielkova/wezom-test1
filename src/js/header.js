//====Desktop open Catalog List========================
document.addEventListener('DOMContentLoaded', () => {
    const headerBtnMenu = document.querySelector('.header__btn-menu');
    const catalog = document.querySelector('.catalog__items');
    const iconMenu = document.querySelector('.icon__menu');
    const iconClose = document.querySelector('.icon__close');

    headerBtnMenu.addEventListener('click', (e) => {
        catalog.classList.toggle('catalog__items-active');
        iconMenu.classList.toggle('hidden'); 
        iconClose.classList.toggle('hidden'); 
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header__category-block')) {
            catalog.classList.remove('catalog__items-active');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
        }
    });
});

//========Mobile open Catalog List===================================
document.addEventListener('DOMContentLoaded', () => {
    const topBtnMenu = document.querySelector('.menu__catalog');
    const cataloglist = document.querySelector('.category__items');
    const iconMenu = document.querySelector('.menu__icon');

    topBtnMenu.addEventListener('click', (e) => {
        cataloglist.classList.toggle('category__items-active');
        iconMenu.classList.toggle('hidden'); 
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu')) {
            cataloglist.classList.remove('category__items-active');
            iconMenu.classList.remove('hidden');
        }
    });
});

//========Mobile open Menu==============================================

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtnMenu = document.querySelector('.menu__btn-burger');
    const catalogItems = document.querySelector('.menu__list');
    const iconMenu = document.querySelector('.menu__icon');
    const iconClose = document.querySelector('.close__icon');

    burgerBtnMenu.addEventListener('click', (e) => {
        catalogItems.classList.toggle('menu__list-active');
        iconMenu.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu')) {
            catalogItems.classList.remove('menu__list-active');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
        }
    });
});
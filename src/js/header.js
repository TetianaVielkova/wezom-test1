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

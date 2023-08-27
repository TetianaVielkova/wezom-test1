//===========Toggle name button==========

const button = document.querySelector('.js-characteristics-button');
const characteristicsItems = document.querySelectorAll('.js-characteristics');

button.addEventListener('click', () => {
    for (let i = 3; i < characteristicsItems.length; i++) {
        characteristicsItems[i].classList.toggle('js-show');
    }
    const buttonText = button.querySelector('span');
    if (buttonText.textContent === 'Все характеристики') {
        buttonText.textContent = 'Скрыть характеристики';
    } else {
        buttonText.textContent = 'Все характеристики';
    }
});
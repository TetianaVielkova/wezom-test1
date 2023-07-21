const button = document.querySelector('.reviews__btn-total');


const characteristicsItems = document.querySelectorAll('.characteristics__item');

button.addEventListener('click', () => {

    for (let i = 3; i < characteristicsItems.length; i++) {
        characteristicsItems[i].classList.toggle('show');
    }

  // Change the text of the button based on the current state
    const buttonText = button.querySelector('span');
    if (buttonText.textContent === 'Все характеристики') {
        buttonText.textContent = 'Скрыть характеристики';
    } else {
        buttonText.textContent = 'Все характеристики';
    }
});
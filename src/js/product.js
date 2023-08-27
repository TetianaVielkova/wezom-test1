const favoriteBtns = document.querySelectorAll('.js-btn-heart');

favoriteBtns.forEach(function(favoriteBtn) {
    favoriteBtn.addEventListener('click', function() {
        this.classList.toggle('active'); 
        const heartIcon = this.querySelector('svg');
        if (this.classList.contains('active')) {
            heartIcon.style.fill = '#219653'; 
        } else {
            heartIcon.style.fill = '#33485D';
        }
    });
});





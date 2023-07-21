const favoriteBtns = document.querySelectorAll('.product__btn-favorite');

favoriteBtns.forEach(function(favoriteBtn) {
    favoriteBtn.addEventListener('click', function() {
        this.classList.toggle('active'); 
        const heartIcon = this.querySelector('svg.icon-heart');
        if (this.classList.contains('active')) {
            heartIcon.style.fill = '#219653'; 
        } else {
            heartIcon.style.fill = '#33485D';
        }
    });
});





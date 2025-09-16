document.addEventListener('DOMContentLoaded', () => {
 
    const shareButton = document.querySelector('.share-btn');
    const cardFooter = document.querySelector('.card__footer');

    shareButton.addEventListener('click', () => {
    
        cardFooter.classList.toggle('active');
    });
});
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.firstElementChild.classList.add('hover');
    });
    card.addEventListener('mouseout', () => {
        card.firstElementChild.classList.remove('hover');
    })
});

// ========================================
// Scripts spécifiques pour programmes.html
// ========================================

console.log('Page programmes.html chargée');

document.addEventListener('DOMContentLoaded', function() {
    // Animation des cartes de programmes
    const programCards = document.querySelectorAll('.program-card');
    
    programCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Programme sélectionné:', this.querySelector('h3').textContent);
        });
    });
});

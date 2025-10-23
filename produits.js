// ========================================
// Scripts spécifiques pour produits.html
// ========================================

console.log('Page produits.html chargée');

document.addEventListener('DOMContentLoaded', function() {
    // Animation des cartes produits au survol
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

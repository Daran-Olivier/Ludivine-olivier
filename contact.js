// ========================================
// Scripts spécifiques pour contact.html
// ========================================

console.log('Page contact.html chargée');

document.addEventListener('DOMContentLoaded', function() {
    // Affichage dynamique des champs selon le choix
    const choixRadios = document.querySelectorAll('input[name="choixContact"]');
    const rdvFields = document.getElementById('rdv-fields');
    const messageFields = document.getElementById('message-fields');
    const confirmationBlock = document.getElementById('confirmation-block');
    
    function updateFields() {
        if(confirmationBlock) confirmationBlock.style.display = 'none';
        if(document.querySelector('input[name="choixContact"]:checked').value === 'rdv') {
            rdvFields.style.display = '';
            rdvFields.querySelectorAll('input').forEach(function(i){ i.required = true; });
            if(messageFields) messageFields.style.display = 'none';
        } else {
            rdvFields.style.display = 'none';
            rdvFields.querySelectorAll('input').forEach(function(i){ i.required = false; });
            if(messageFields) messageFields.style.display = '';
        }
    }
    
    choixRadios.forEach(function(radio){
        radio.addEventListener('change', updateFields);
    });
    
    updateFields();
    
    // Gestion de la soumission du formulaire
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            var confirmationTitle = document.getElementById('confirmation-title');
            var appointmentSummary = document.getElementById('appointmentSummary');
            var confirmationActions = document.getElementById('confirmationActions');
            var nextSteps = document.getElementById('nextSteps');
            var choix = document.querySelector('input[name="choixContact"]:checked').value;
            
            confirmationBlock.style.display = 'block';
            
            if(choix === 'rdv') {
                confirmationTitle.innerHTML = 'Votre rendez-vous est confirmé !';
                appointmentSummary.innerHTML = '<strong>Date :</strong> ' + document.getElementById('rdvDate').value + '<br><strong>Heure :</strong> ' + document.getElementById('rdvTime').value;
                confirmationActions.innerHTML = '<button class="btn btn-primary" onclick="addToCalendar()"><i class="fas fa-calendar-plus"></i> Ajouter à mon calendrier</button> <button class="btn btn-secondary" onclick="resetBooking()"><i class="fas fa-plus"></i> Prendre un autre RDV</button>';
                nextSteps.innerHTML = '<h4>Prochaines étapes :</h4><ul><li><i class="fas fa-envelope"></i> Vous recevrez un email de confirmation</li><li><i class="fas fa-phone"></i> Nous vous appellerons la veille pour confirmer</li><li><i class="fas fa-video"></i> Le RDV peut se faire en visio ou au téléphone</li></ul>';
            } else {
                confirmationTitle.innerHTML = 'Votre message est envoyé !';
                appointmentSummary.innerHTML = '';
                confirmationActions.innerHTML = '';
                nextSteps.innerHTML = '<h4>Prochaines étapes :</h4><ul><li><i class="fas fa-envelope"></i> Nous vous répondrons dans les plus brefs délais</li></ul>';
            }
            
            this.reset();
            document.querySelector('input[name="choixContact"][value="message"]').checked = true;
            updateFields();
        };
    }
});

// Fonction pour ouvrir/fermer les questions FAQ
function toggleFaq(element) {
    const faqAnswer = element.nextElementSibling;
    const chevron = element.querySelector('.fa-chevron-down');
    
    // Fermer toutes les autres réponses
    document.querySelectorAll('.faq-answer').forEach(answer => {
        if (answer !== faqAnswer) {
            answer.classList.remove('active');
            answer.style.maxHeight = '0';
            answer.style.paddingTop = '0';
        }
    });
    
    // Retirer la classe active de toutes les questions
    document.querySelectorAll('.faq-question').forEach(question => {
        if (question !== element) {
            question.classList.remove('active');
            const otherChevron = question.querySelector('.fa-chevron-down');
            if (otherChevron) {
                otherChevron.style.transform = 'rotate(0deg)';
            }
        }
    });
    
    // Toggle la question actuelle
    element.classList.toggle('active');
    faqAnswer.classList.toggle('active');
    
    if (faqAnswer.classList.contains('active')) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 50 + 'px';
        faqAnswer.style.paddingTop = '1rem';
        if (chevron) {
            chevron.style.transform = 'rotate(180deg)';
        }
    } else {
        faqAnswer.style.maxHeight = '0';
        faqAnswer.style.paddingTop = '0';
        if (chevron) {
            chevron.style.transform = 'rotate(0deg)';
        }
    }
}

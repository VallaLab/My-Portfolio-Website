// Seleziono tutti i quadretti dei linguaggi
const skillCards = document.querySelectorAll(".skill-card");

// Aggiungo un piccolo effetto quando passo sopra con il mouse
skillCards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {
        card.classList.add("active");
    });

    card.addEventListener("animationend", function() {
        card.classList.remove("active");
    });

});
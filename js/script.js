// Seleziono tutte le card delle skill
const skillCards = document.querySelectorAll(".skill-card");

// Su computer funziona già con hover.
// Questo serve soprattutto per telefono/tablet: tocchi la card e compare la percentuale.
skillCards.forEach(function(card) {

    card.addEventListener("click", function() {

        skillCards.forEach(function(otherCard) {
            if (otherCard !== card) {
                otherCard.classList.remove("show-percent");
            }
        });

        card.classList.toggle("show-percent");

    });

});
// Galleria fotografia scorrevole
const photoGallery = document.getElementById("photoGallery");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

if (photoGallery && scrollLeftBtn && scrollRightBtn) {

    scrollLeftBtn.addEventListener("click", function() {
        photoGallery.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    });

    scrollRightBtn.addEventListener("click", function() {
        photoGallery.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    });
    // Lightbox per aprire le foto della galleria
const galleryImages = document.querySelectorAll(".photo-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {
        lightbox.classList.add("active");
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
    });

});

lightboxClose.addEventListener("click", function() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
});

// Chiude la foto cliccando sullo sfondo scuro
lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
        lightboxImg.src = "";
    }
});

// Chiude la foto premendo ESC
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        lightbox.classList.remove("active");
        lightboxImg.src = "";
    }
});

}
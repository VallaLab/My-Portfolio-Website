"use strict";

document.querySelectorAll(".project-items[data-popup]").forEach(function (project) {
    const popUp = document.getElementById(project.dataset.popup);
    const returnBack = popUp.querySelector("[data-close-popup]");
    const goSite = popUp.querySelector("[data-go-site]");

    function closePopup() {
        popUp.style.display = "none";
        project.focus();
    }

    project.addEventListener("click", function (event) {
        event.preventDefault();
        const destination = project.getAttribute("href").trim();
        goSite.disabled = !destination || destination === "#";
        popUp.style.display = "flex";
        returnBack.focus();
    });

    goSite.addEventListener("click", function () {
        if (!goSite.disabled) {
            window.open(project.href, "_blank", "noopener,noreferrer");
        }
    });

    returnBack.addEventListener("click", closePopup);

    popUp.addEventListener("click", function (event) {
        if (event.target === popUp) {
            closePopup();
        }
    });

    popUp.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });
});

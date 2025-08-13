document.addEventListener("DOMContentLoaded", () => {
    const cardsWrapper = document.getElementById("cards");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function getCardWidth() {
        const card = document.querySelector(".card");
        if (!card) return 0;
        const style = window.getComputedStyle(card);
        const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
        return card.offsetWidth + margin + 20; // 20px = gap
    }

    // Scroll on button click
    prevBtn.addEventListener("click", () => {
        cardsWrapper.scrollBy({
            left: -getCardWidth(),
            behavior: "smooth"
        });
    });

    nextBtn.addEventListener("click", () => {
        cardsWrapper.scrollBy({
            left: getCardWidth(),
            behavior: "smooth"
        });
    });

    // Scroll to clicked card
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            card.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            });
        });
    });
});

const fighterCards = document.querySelectorAll(".fighter-images")
function fighterCard() {
    fighterCards.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.border = '1px solid yellow'
            })
        element.addEventListener('mouseout', () => {
            element.style.border = `none`
        })
    });
}
fighterCard()
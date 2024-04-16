const url = "http://localhost:3000/fighters"
const fighterCards = document.querySelectorAll(".fighter-images")
function fighterCard() {
    let imageOne = document.getElementById("image-player-1")
    fighterCards.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.border = '1px solid yellow'
            })
        element.addEventListener('mouseout', () => {
            element.style.border = `none`
        })
        element.addEventListener('click', () => {
            console.log(imageOne)
        })
    });
}
fighterCard()

fetch(url)
    .then((resp) => resp.json())
    .then((data) => renderFighterInfo(data))
function renderFighterInfo(fighters){
    const cardObj = []
    fighters.forEach((fighterObj) => {
        cardObj.push(fighterObj)
    })
    return cardObj
}


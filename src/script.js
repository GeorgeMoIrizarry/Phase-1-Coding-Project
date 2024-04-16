const imagePlayOne = document.querySelector("#image-player-1")

const imagePlayTwo = document.querySelector("#image-player-2")

const playerOneName = document.querySelector("#introduce-player1")

const playerTwoName = document.querySelector("#introduce-player2")

const url = "http://localhost:3000/fighters"

const popFighterInfo = (images) => {
    let imgTar = images.target
    console.log(imagePlayOne.src)
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => placeCards(data))
function placeCards(fighters) {
    fighters.forEach((fighterInfo) => {
            if (imgTar.id == fighterInfo.id && imagePlayOne.src == "file://wsl.localhost/Ubuntu/home/moji_mo-jo/Development/code/phase-1/Phase-1-Coding-Project/images/crystalBall.png" ) {
                imagePlayOne.src = imgTar.src
                playerOneName.textContent = fighterInfo.name

            } else if (imgTar.id == fighterInfo.id && imagePlayTwo.src == "file://wsl.localhost/Ubuntu/home/moji_mo-jo/Development/code/phase-1/Phase-1-Coding-Project/images/crystalBall.png" ) {
                imagePlayTwo.src = imgTar.src
                playerTwoName.textContent = fighterInfo.name

            }
        })
}
}
    

const fighterCards = document.querySelectorAll(".fighter-images")
const fighterCard = () => {
    fighterCards.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.border = '1px solid yellow'
            })
        element.addEventListener('mouseout', () => {
            element.style.border = `none`
        })
        element.addEventListener('click', popFighterInfo)
        element.addEventListener('click', () => {
            element.style.border = '4px solid yellow'
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


// console.log(imgTar.id)

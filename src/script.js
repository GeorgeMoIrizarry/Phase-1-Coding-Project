const imagePlayOne = document.querySelector("#image-player-1")
let selected = 0
const imagePlayTwo = document.querySelector("#image-player-2")

const playerOneName = document.querySelector("#introduce-player1")
const playerOneNameStats = document.querySelector("#introduce-player1-stats")


const playerTwoName = document.querySelector("#introduce-player2")
const playerTwoNameStats = document.querySelector("#introduce-player2-stats")

console.log(imagePlayOne.src)
const url = "http://localhost:3000/fighters"

const popFighterInfo = (images) => {
    let imgTar = images.target
    console.log(imagePlayOne.src)
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => placeCards(data))
function placeCards(fighters) {
    const planetOriginOne = document.querySelector("#planet-origin")
    const planetOriginTwo = document.querySelector("#planet-origin2")
    fighters.forEach((fighterInfo) => {
        
            if (imgTar.id == fighterInfo.id && selected === 0 ) {
                selected++
                imagePlayOne.src = imgTar.src
                playerOneName.textContent = fighterInfo.name
                playerOneNameStats.textContent = fighterInfo.powerlevel
                planetOriginOne.textContent = fighterInfo.planetoforigin
                imagePlayOne.id = fighterInfo.id
            } else if (imgTar.id == fighterInfo.id && selected === 1  ) {
                selected++
                imagePlayTwo.src = imgTar.src
                playerTwoName.textContent = fighterInfo.name
                playerTwoNameStats.textContent = fighterInfo.powerlevel
                planetOriginTwo.textContent = fighterInfo.planetoforigin
                imagePlayTwo.id = fighterInfo.id
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
// const fightBtn = document.querySelector("#launch-battle")
// fightBtn.addEventListener("click", () => {
//     fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => renderFighterAttacks(data))
//     function renderFighterAttacks(fighterInfo) {
//     fighterInfo.forEach((fighterObj) => {

//     })
//     }
// })

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


console.log(selected)
const fightBtn = document.querySelector("#launch-battle")
fightBtn.addEventListener("click", () => {
    if(selected === 2){
        if(playerOneNameStats.textContent >= playerTwoNameStats.textContent){
            console.log(playerOneNameStats.textContent)
            console.log(playerTwoNameStats.textContent)
            alert(`${playerOneName.textContent} wins!`)
            
        } else {
            alert(`${playerTwoName.textContent} wins`)
            
        }
    } else return false
})
const imagePlayOne = document.querySelector("#image-player-1")

let selected = 0

const imagePlayTwo = document.querySelector("#image-player-2")

const playerOneName = document.querySelector("#introduce-player1")

const playerOneNameStats = document.querySelector("#introduce-player1-stats")

const playerOneNameCard = document.querySelector("#card-player1")

const playerTwoName = document.querySelector("#introduce-player2")

const playerTwoNameStats = document.querySelector("#introduce-player2-stats")

const playerTwoNameCard = document.querySelector("#card-player2")

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
            let dropdown = document.createElement('select')
            dropdown.id = "select1"
            playerOneNameCard.appendChild(dropdown)
            selected++
            imagePlayOne.src = imgTar.src
            playerOneName.textContent = fighterInfo.name
            playerOneNameStats.textContent = fighterInfo.powerlevel
            planetOriginOne.textContent = fighterInfo.planetoforigin
            imagePlayOne.id = fighterInfo.id
            let opt1 = document.createElement('option')
            let opt2 = document.createElement('option')
            let opt3 = document.createElement('option')
            opt1.id = 1
            opt2.id = 2
            opt3.id = 3
            opt1.textContent = fighterInfo.attacks[0]
            opt2.textContent = fighterInfo.attacks[1]
            opt3.textContent = fighterInfo.attacks[2]
            dropdown.append(opt1, opt2, opt3)
         } else if (imgTar.id == fighterInfo.id && selected === 1  ) {
            let dropdown2 = document.createElement('select')
            dropdown2.id = "select2"
            playerTwoNameCard.appendChild(dropdown2)
            selected++
            imagePlayTwo.src = imgTar.src
            playerTwoName.textContent = fighterInfo.name
            playerTwoNameStats.textContent = fighterInfo.powerlevel
            planetOriginTwo.textContent = fighterInfo.planetoforigin
            imagePlayTwo.id = fighterInfo.id
            let opt1 = document.createElement('option')
            let opt2 = document.createElement('option')
            let opt3 = document.createElement('option')
            opt1.id = 4
            opt2.id = 5
            opt3.id = 6
            opt1.textContent = fighterInfo.attacks[0]
            opt2.textContent = fighterInfo.attacks[1]
            opt3.textContent = fighterInfo.attacks[2]
            dropdown2.append(opt1, opt2, opt3)
        }
            
    })
}
}
const mouseOver = (element) => {
    element.target.style.border = '1px solid yellow'
}    

const fighterCards = document.querySelectorAll(".fighter-images")
const fighterCard = () => {
    fighterCards.forEach(element => {
        element.addEventListener('mouseover', mouseOver)
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
function isEven (number) {
    return number % 2 === 0;
  }
const handleAtk = () => {
    let evenCheck = 0
    let select1 = document.querySelector('#select1')
    let select2 = document.querySelector('#select2')
    select1.addEventListener('change', (e) => {
        console.log(e.target.value)
        if(isEven(evenCheck)){
            evenCheck++
            switch (e.target.value) {
                case 'Punch' :
                    //function
                    break;
                case 'Ki blast' :
                    //function
                    break;
                case 'Kamehameha wave' :
                    //function
                    break;
                case 'Final flash' :
                    //function
                    break;
                case 'Kikoukenjutsu sword style' :
                    //function
                    break;
                case 'Masenko' :
                    //function
                    break;
                case 
            }
        }
    })

}
const fightBtn = document.querySelector("#launch-battle")
fightBtn.addEventListener('click', handleAtk)







// const fightBtn = document.querySelector("#launch-battle")
// fightBtn.addEventListener("click", () => {
//     if(selected === 2){
//         if(playerOneNameStats.textContent >= playerTwoNameStats.textContent){
//             console.log(playerOneNameStats.textContent)
//             console.log(playerTwoNameStats.textContent)
//             alert(`${playerOneName.textContent} wins!`)
            
//         } else {
//             alert(`${playerTwoName.textContent} wins`)
            
//         }
//     } else return false
// })
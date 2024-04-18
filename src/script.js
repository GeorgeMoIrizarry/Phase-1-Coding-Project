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

function alertFunc1(one, atk, two, dmg) {
    alert(`${one} ${atk} ${two} for ${dmg} damage! `)
    if(playerTwoNameStats.textContent <= 0) {
        alert(`${one} wins!`)
    } else return false
}
function alertFunc2(two, atk, one, dmg) {
    alert(`${two} ${atk} ${one} for ${dmg} damage! `)
    if(playerOneNameStats.textContent <= 0) {
        alert(`${two} wins!`)
    } else return false 
}

// Attack functions
function punchOne(i, oppPlayerStats, name1, name2) {
    let random = Math.floor(Math.random() * 1000)
    let punchMulti = random * 35
    let newStats = oppPlayerStats.textContent
    oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
    if (i == 1){
    alertFunc1(name1, "punched", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "punched", name2, punchMulti)
    }
}
function kiBlastOne(i, oppPlayerStats, name1, name2) {
    let random = Math.floor(Math.random() * 1000)
    let punchMulti = random * 45
    let newStats = oppPlayerStats.textContent
    oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
    if (i == 1){
    alertFunc1(name1, "blasted", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "blasted", name2, punchMulti)
    }
}
function kamahamahaWaveOne(i, oppPlayerStats, name1, name2) { 
    let random = Math.floor(Math.random() * 1000)
    let punchMulti = random * 90
    let newStats = oppPlayerStats.textContent
    oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
    if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "blasted", name2, punchMulti)
    }
  
}
function finalFlashOne(i, oppPlayerStats, name1, name2) {
    if(playerOneName.textContent == 'Goku' || playerTwoName.textContent == 'Goku'){
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 140
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "destroyed", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "destroyed", name2, punchMulti)
    }
    } else if (playerOneName.textContent == 'MajinBuu' || playerTwoName.textContent == 'MajinBuu') {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 140
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "destroyed", name2, punchMulti)
   
     } else {
        alertFunc2(name1, "destroyed", name2, punchMulti)
     }
    } else {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 80
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
        } else if (i == 2) {
          alertFunc2(name1, "blasted", name2, punchMulti)
        }
    }
}
function kikoukenjutsuSwordStyleOne(i, oppPlayerStats, name1, name2) {
    if(playerOneName.textContent == 'Android 18' || playerTwoName.textContent == 'Android 18'){
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 140
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "destroyed", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "destroyed", name2, punchMulti)
    }
    } else if (playerOneName.textContent == 'Cell' || playerTwoName.textContent == 'Cell') {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 140
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "destroyed", name2, punchMulti)
   
     } else {
        alertFunc2(name1, "destroyed", name2, punchMulti)
     }
    } else {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 80
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "sliced", name2, punchMulti)
        } else if (i == 2) {
          alertFunc2(name1, "sliced", name2, punchMulti)
        }
    }
}
function masenkoOne(i, oppPlayerStats, name1, name2) {
    if(playerOneName.textContent == 'Android 18' || playerTwoName.textContent == 'Android 18'){
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 120
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "destroyed", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "destroyed", name2, punchMulti)
    }
    } else if (playerOneName.textContent == 'Cell' || playerTwoName.textContent == 'Cell') {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 150
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "destroyed", name2, punchMulti)
   
     } else {
        alertFunc2(name1, "destroyed", name2, punchMulti)
     }
    } else {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 65
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
        } else if (i == 2) {
          alertFunc2(name1, "blasted", name2, punchMulti)
        }
    }
}

function specialBeamOne(i, oppPlayerStats, name1, name2) {
    if(playerOneName.textContent == 'Goku' || playerTwoName.textContent == 'Goku'){
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 115
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "destroyed", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "destroyed", name2, punchMulti)
    }
    } else {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 65
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
        } else if (i == 2) {
          alertFunc2(name1, "blasted", name2, punchMulti)
        }
    }
}

function spiritBombOne(i, oppPlayerStats, name1, name2) {
    if(playerOneName.textContent == 'Goku' || playerTwoName.textContent == 'Goku'){
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 200
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "destroyed", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "destroyed", name2, punchMulti)
    }
    } else if (playerOneName.textContent == 'Gohan' || playerTwoName.textContent == 'Gohan') {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 60
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
   
     } else {
        alertFunc2(name1, "blasted", name2, punchMulti)
     }
    } else {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 60
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
        } else if (i == 2) {
          alertFunc2(name1, "blasted", name2, punchMulti)
        }
    }
}

function angryExplosionOne(i, oppPlayerStats, name1, name2) { 
    let random = Math.floor(Math.random() * 1000)
    let punchMulti = random * 110
    let newStats = oppPlayerStats.textContent
    oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
    if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "blasted", name2, punchMulti)
    }
  
}

function triBeamOne(i, oppPlayerStats, name1, name2) {
    if(playerOneName.textContent == 'Vegeta' || playerTwoName.textContent == 'Vegeta'){
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 150
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "destroyed", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "destroyed", name2, punchMulti)
    }
    } else if (playerOneName.textContent == 'Cell' || playerTwoName.textContent == 'Cell') {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 120
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
   
     } else {
        alertFunc2(name1, "blasted", name2, punchMulti)
     }
    } else {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 60
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
        } else if (i == 2) {
          alertFunc2(name1, "blasted", name2, punchMulti)
        }
    }
}
function destructoDiskOne(i, oppPlayerStats, name1, name2) { 
    let random = Math.floor(Math.random() * 1000)
    let punchMulti = random * 105
    let newStats = oppPlayerStats.textContent
    oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
    if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "blasted", name2, punchMulti)
    }
  
}

function hyperBlitzOne(i, oppPlayerStats, name1, name2) {
    if(playerOneName.textContent == 'Gohan' || playerTwoName.textContent == 'Gohan'){
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 200
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "destroyed", name2, punchMulti)
    } else if (i == 2) {
        alertFunc2(name1, "destroyed", name2, punchMulti)
    }
    } else if (playerOneName.textContent == 'Trunks' || playerTwoName.textContent == 'Trunks') {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 160
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
   
     } else {
        alertFunc2(name1, "blasted", name2, punchMulti)
     }
    } else {
        let random = Math.floor(Math.random() * 1000)
        let punchMulti = random * 60
        let newStats = oppPlayerStats.textContent
        oppPlayerStats.textContent = parseInt(newStats, 10) - punchMulti
        if (i == 1){
        alertFunc1(name1, "blasted", name2, punchMulti)
        } else if (i == 2) {
          alertFunc2(name1, "blasted", name2, punchMulti)
        }
    }
}
let evenCheck = 2
function isEven(number) {
    return (number & 1) === 0;
  }
const handleAtk = () => {
    
    let select1 = document.querySelector('#select1')
    let select2 = document.querySelector('#select2')
    select1.addEventListener('change', (e) => {
        console.log(e.target.value)
        if(isEven(evenCheck)){
            
            switch (e.target.value) {
                case 'Punch' :
                    punchOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Ki blast' :
                    kiBlastOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Kamehameha wave' :
                    kamahamahaWaveOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Final flash' :
                    finalFlashOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Kikoukenjutsu sword style' :
                    kikoukenjutsuSwordStyleOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Masenko' :
                    masenkoOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Special beam cannon' :
                    specialBeamOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Spirit bomb' :
                    spiritBombOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Angry explosion' :
                    angryExplosionOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Tribeam' :
                    triBeamOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Destructo disk' :
                    destructoDiskOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                case 'Hyper blitz' :
                    hyperBlitzOne(1, playerTwoNameStats, playerOneName.textContent, playerTwoName.textContent)
                    evenCheck++
                    break;
                default :
                    console.log('fail')
            } 
           
        } else {
            return false
        }
    
    })
    select2.addEventListener('change', (e) => {
        console.log(e.target.value)
        if(isEven(evenCheck) == false){
            
            switch (e.target.value) {
                case 'Punch' :
                    punchOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Ki blast' :
                    kiBlastOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Kamehameha wave' :
                    kamahamahaWaveOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Final flash' :
                    finalFlashOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Kikoukenjutsu sword style' :
                    kikoukenjutsuSwordStyleOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Masenko' :
                    masenkoOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Special beam cannon' :
                    specialBeamOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Spirit bomb' :
                    spiritBombOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Angry explosion' :
                    angryExplosionOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Tribeam' :
                    triBeamOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Destructo disk' :
                    destructoDiskOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                case 'Hyper blitz' :
                    hyperBlitzOne(2, playerOneNameStats, playerTwoName.textContent, playerOneName.textContent)
                    evenCheck++
                    break;
                default :
                    console.log('fail')
            } 
           
        } else {
            console.log('fail')
        }
    } )


    
}
const fightBtn = document.querySelector("#launch-battle")
fightBtn.addEventListener('click', handleAtk)
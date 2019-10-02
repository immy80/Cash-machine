let gameFootball = (timeOfGame) =>{
    console.log(`game is a ${timeOfGame}`)
}
let match = (time, game) => {
    if (time < 12) {
        game("morning kick off")
    }else if (time < 17) {
        game("afternoon kick off")
    }else {
        game("evening kick off")
    }

}

match(18, gameFootball)



// let myFunction =()=>{
//     return() =>{
//         console.log("hello")
//     }
// }

// myFunction()()

// myNew()
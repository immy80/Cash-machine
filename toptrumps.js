//top trumps
// car spec's

class trumpCards{
    constructor(name,bhp,topSpeed,accel,torque){
        this.name=name;
        this.bhp=bhp;
        this.topSpeed=topSpeed;
        this.accel=accel;
        this.torque=torque;
        
    }
}

let card = [new trumpCards("audiRs6",552,155,3.8,516),
new trumpCards("nissanGtr",542,196,2.6,466),
new trumpCards("bmwM3",424,155,4.2,406),
new trumpCards("bmwM4",424,155,4.2,406),
new trumpCards("focusSt",182,135,7.8,295),
new trumpCards("hondaNsx",572,191,3.8,476),
new trumpCards("mercedesC63",469,155,4,479),
new trumpCards("golfGti",261,155,6.1,258),
new trumpCards("bentleyGt",626,207,3.7,663),
new trumpCards("lamboLp750",740,218,2.9,508),
new trumpCards("ferrari488",661,210,3,560),
new trumpCards("paganiZonda",669,218,3.4,575)
]

// function play(){
     let num = Math.floor(Math.random()*card.length);
//     console.log(num)
// }

let player1 =[];
let player2 =[];

function deal1(){
    let player1=(card.push[1])
    let num = Math.floor(Math.random()*card.length);
    console.log(num)
}
function deal2(){
    let player1=(card.push[1])
    let num = Math.floor(Math.random()*card.length);
    console.log(num)
}
function deal3(){
    let player1=(card.push[2])
    console.log(num)
}
function deal4(){
    let player1=(card.push[3])
    console.log(num)
}
function deal5(){
    let player1=(card.push[4])
    console.log(num)
}
function deal6(){
    let player1=(card.push[5])
    console.log(num)
}
//play()
deal1()
deal2()
deal3()
deal4()
deal5()
deal6()





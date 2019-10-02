class Animal{
    constructor(hunger,tiredness){
        this.hunger=hunger,
        this.tiredness=tiredness
    }

Sleep(hours){
    this.tiredness=tiredness
    }
}

class Person extends Animal {
    constructor(name, age, favouriteFoods, canDrive, hunger, tiredness) {
    super(hunger, tiredness)
    this.name = name;
    this.age = age;
    this.favouriteFoods = favouriteFoods;
    this.canDrive = canDrive;
    }
}
class Sport extends Person {
    constructor(name, age, favouriteFoods, canDrive, hunger, tiredness, favouriteSport ){
    super(name, age, favouriteFoods, canDrive, hunger, tiredness)
    this.favouriteSport = favouriteSport;
    }
}
class Hobbies extends Person {
        constructor(name, age, favouriteFoods, canDrive, hunger, tiredness, Hobbies ){
        super(name, age, favouriteFoods, canDrive, hunger, tiredness)
        this.Hobbies = Hobbies;
        }
}
let andyMurray = new Hobbies("Andy Murray",38,"haggis",false,3,2, "pimping");
let vanDijk = new Sport("Van Dijk",23, "steak" ,true,10,0, "tennis");

console.log(vanDijk);
console.log(andyMurray);




//let Pet = new Animal(true,1)




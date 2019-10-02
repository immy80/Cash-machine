class Animal {
    constructor(name){
        this._name = name;
        this.hunger = 50;
        this._thirst = 50;
        this.bordem = 50;
        this.fatigue = 50;
    }

    feed() {
        this.hunger -= 30;
        console.log(`Food level is low ${this.hunger}`)
    
    }

    play(){
        this.bordem -= 20;
        console.log(`I am very bored please play with me ${this.bordem}`)
    }
  
    thirst(){
        this._thirst -= 40;
        console.log(`I am very thirsty(${this._thirst})`)
    }

    tired(){
        this.fatigue -=25;
        console.log(`I am so tired(${this.fatigue})`)
    }
}
class Cat extends Animal{
     constructor(name,favFood,) {   
     super(name);
     this.favFood = favFood;
     this.name = name;
     }

}
  
class Dog extends Animal{
    constructor(name,favFood, bordem) {   
    super(name);
    
    this.favFood = favFood;
    this.name= name
    }
}
class Rabbit extends Animal{
        constructor(name,favFood, bordem) {   
        super(name);
        
        this.favFood = favFood;
        this.name= name
        }
}
    
const cat = new Cat("billo","tuna");
const dog = new Dog("kutaa","chicken");
const rabbit = new Rabbit("snow","grass")

console.log (`the cats name is ${cat.name}`);
console.log (`the cats favourite food is ${cat.favFood}`);
cat.thirst()
cat.play()
cat.tired()

console.log(`the dogs name is ${dog.name}`);
console.log (`the dogs favourite food is ${dog.favFood}`);
dog.feed()
dog.play()

console.log(`the rabbits name is ${rabbit.name}`)
console.log(`the rabbits favourite food is ${rabbit.favFood}`)
rabbit.feed()




//cat.favFood1()
//console.log (kutaa.favFood);
  
//setInterval( function() {
//     billo.hungryCat();
//     billo.thirstCat();
//     kutaa.Sleep();
// }, 1000);
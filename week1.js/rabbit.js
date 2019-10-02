// const rosie={
//     name: "rosie",
//     hops: 0,

//     get name(){
//         return this.name;
//     },

//     get hops(){
//         return
//     }
// }



class Bunny{
    constructor(name){
        this._name = name;
        this._hops = 0;

    }
    get name(){
        return this._name;

    }get hops(){
        return this._hops;

    }
    increaseHops(){
        this._hops++;
    }
}

//rosie.increaseHops();
const rosie =new Bunny("rosie");
const jacob =new Bunny("jacob");

console.log(rosie.name);
console.log(jacob.name);
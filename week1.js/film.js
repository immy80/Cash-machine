// let favouriteFilm =["jingle bells", "home alone", "Dumbo", "starwars", "ants"]

// for(let i=0; i<favouriteFilm.length; i++){
//     console.log(favouriteFilm[i]);
// }

// favouriteFilm.push("speed", "cars")

// console.log(favouriteFilm);




let film =["goodfellas", "braveheart", "speed","ghostbusters"]

for(let i=0; i<film.length; i++){
    console.log(film[i])
}

const filmCheck = () => {
    if (film[3] == "ghostbusters") {
    console.log("yey it's ghostbusters")
    } 
    else {
    console.log("boo, we want ghostbusters")
    }
}
filmCheck()

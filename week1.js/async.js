function waitASecond(number){
    return new Promise((resolve,reject) =>{ 
        setTimeout(() =>{
            if (number >=5){
                resolve("wait a second");
            }
            else{
                reject("rejected");
            }
        },1000);
    })
        
};


async function doThing(){
    let waited = await waitASecond();
    console.log(waited);
    console.log("did a thing");
}
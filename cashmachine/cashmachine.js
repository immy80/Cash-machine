let pinNumber = 1234;
let balance = 1000;
let userInput;
let withdrawLimit= 250;

const pinCheck = () => {
    userInput = prompt(`Please enter your pin`)
    if (pinNumber == userInput) {
        alert('hello, your balance is '+ balance)
    } 
    else{
        alert('incorrect pin please try again')
        pinCheck()
    }
}


const Choice = ()=>{
    userInput = prompt(`please enter 1 for withdraw or 2 for deposit`)
    if (userInput ==1){
        withdraw()
    }
    else if (userInput==2){
        deposit()
    }
        

}

const withdraw = ()=>{
        userInput = parseInt(prompt(`please withdraw enter amount`))
        if (withdrawLimit >= userInput){}

        else{
            alert(`max withdraw is 250`)
            withdraw()
            return 
        }
    
    if (userInput <= balance){
       
        balance -= userInput
        alert(`your new balance is ${balance}`)
    }
    else{
        alert(`insufficient funds`)
        withdraw()
    }



const deposit = () =>{
        userInput = parseInt(prompt(`please deposit amount`))
        balance += userInput
        alert(`your new balance is ` + balance)
    

}
}
pinCheck()
Choice()
deposit()

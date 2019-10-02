class Cars{
    constructor(regnum){
        this._regnum=regnum;
        this._hours=0;
        this._charge=0.00;
    }

    get regnum(){
        return this._regnum;
    }
    get hours(){
        return this._hours;
    }
    get charge(){
        return this._charge;
    }
    increasehour(){
        this._hours++;
        this._charge +=1.50;
    }
}
    const pay= (reg,hr) => {
        const car= new Cars(reg);
        for (i = 0; I < hr; i++);
        Cars.increaseHour()
}

class staff extends Cars{
    constructor(staff){
    super(name)
    this._staffNumber=staffNumber
    this._credit=credit
}
get staffNumber(){
    return this._staffNumber
}
get credit(){
    return this._credit
}
}

    console.log(`you need to pay £${Cars.charge} for ${Cars.hours} hours.`);



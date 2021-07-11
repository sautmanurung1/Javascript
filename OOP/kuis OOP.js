class Animal{
    constructor(Name,Age,isMammal) {
        this.Name = Name;
        this.Age = Age;
        this.isMammal = isMammal;
    };
}

class Rabbit extends Animal{
    constructor(Name,Age,isMammal){
        super(Name,Age,true);
    }
    eat(){
        return `${this.Name} Sedang Makan!`
    };
}

class Eagle extends Animal {
    constructor(Name,Age,isMammal){
        super(Name,Age,true);
    }
    fly(){
        return `${this.Name} Sedang Terbang!`
    };
}

const myRabbit = new Rabbit("Labi",2);
myRabbit.eat();
console.log(myRabbit.eat());

const myEagle = new Eagle("Elo",4);
myEagle.fly();
console.log(myEagle.fly());
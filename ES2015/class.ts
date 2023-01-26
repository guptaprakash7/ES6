class personA {
    constructor(name){
        this.name = name;
        console.log(this.name);
    }
    static staticMethod(){
        console.log("static method");
    }
    greetPerson = () => console.log(`person ${this.name}`);
}

let pp = new personA("Prakash");
personA.staticMethod();
pp.greetPerson();

class personB {

    constructor(){
        console.log("person B");
    }
    getID = () => 10;
}

class Emp extends personB {

    constructor(){
        super();
        console.log("constructor child");
    }
    //getID = () => super.getID();
}

let e = new Emp();

console.log(e.getID());
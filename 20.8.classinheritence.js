// when we user property and methods of one class into another class to 
//the parent class is called base class and child class is called derived class
// this process is called inhetence
// when third class use property and methods of first and second class then this process is called multiinheritence

/*
parent class
class fruits{

}
child class
class vegetable extended fruits{

}
child class can use propertu of fruits as well as vegitable class
*/
// when you creat new object of child class it call constructor of child and parent 


class first {
    constructor(name){
        console.log(` this is my first name: ${name}`);
    }
}
class second extends first{
    constructor(name){
        super()
        console.log( `this is my second name: ${name}`);
    }
}

let ml = new second("ankit");



class employee{
   constructor(name){
    this.employee = name;
    console.log('constructor: Employee');
   }    

   info(){
    console.log(`employee name : ${this.employee}`);
   }
}

class manager extends employee{
    info(){
        methode.info()
        console.log(`Manager name : ${this.employee}`);
    }
}

//if both hace methode with the sama name then you have to call parenct class methode explicitly
// by using methode.info()
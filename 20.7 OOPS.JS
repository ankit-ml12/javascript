// object is real world entity ex car
//class is the place which contain all the property assosiated with the car
//declare class
// class car{

// }

// types of class methode
// constructure
// constructor (){
//     console.log("hello");
// }
// prototype
// messege(){

// }
// stataic :- to call an static methode we don't need to declare object

// static name(){
// }

//constuctor 
class address{
    constructor(namee, noo, agee){
         this.name = namee;
         this.no= noo;
        this.age = agee;
    }
    intro (){
       console.log( `my name is ${this.name} , my age is ${this.age} and my no is ${this.no}`); 
    }
}
//constructor call every time when you creat object
let ml  = new address("ankit", 99077, 24 );
ml.intro(); 

// static methode work like methode inside any object you can call it by classname.methode()

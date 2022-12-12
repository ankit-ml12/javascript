function hello1 (){
    console.log("hello function 1");
}

hello1();

let hello2= function(){
    console.log("hello function 2");
}
hello2();

let hello3 = () => console.log("hello function 3");
hello3();

let hello4 = (name , age)=> `your name is ${name} and age is ${age}`;
console.log(hello4("ankit", 24))

// in case of one parameter
let hello5 = ml => `your favourite no is ${ml}`
console.log(hello5("24"));
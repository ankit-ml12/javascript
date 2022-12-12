let obj = {name: "ankit", 
           age: 24,
           city: "ujjain"}
// const {name, age, city} = obj;

// console.log(name);//ankit
// console.log(age);//24
// console.log(city);// ujjain

// const {name , city} = obj;

// console.log(name);//ankit
// console.log(city);// ujjain
// for other name you can write like this

const {name: n, age: a, city:c}= obj;
console.log(n);
console.log(a);
console.log(c);
//how we declare object in past
const obj ={
    name : "name",
    class: "class",
    number:"number"
}
console.log(obj);
// but now we can reduce our struture on the basis of 
// if our name and its property are allready declare then you can use only name
let name= "vishal";
let ml= "vishal";
let number= 99077;

const obj2 ={
    name,
    ml,
    number
}
console.log(obj2);

// if you want to use function inside object then from now you onward not need to use keyword function

//you can directly write like this 
// ml(){
// }


// new way to call
let n= "student";

const obj3= {
[n+"name"] :"ankit baba",
course: 'btech',
detail(){
return (`${this.studentname} is student of ${this.course}`);
},
'detail show'(){
    return (`another way to declare funtion with space`);
}
}
console.log(obj3);
console.log(obj3['course']);//btech
console.log(obj3['detail']())//ankit baba is student of btech
console.log(obj3['detail show']())//another way to declare funtion with space
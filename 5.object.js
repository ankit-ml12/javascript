//object can contain all data type , a real life entity, fucntion and object also

let a ={
   name: "ankit",
   age: 26,
   sub: ['physics', 'chemestry', 'maths'],
   intro: function(){
    return `${this.name } is ${this.age} sudent of this subjects ${this.sub}`
   },
   ml:{
    vis: "my"
   }
}
console.log(a.name);
console.log(a.age);
console.log(a.intro());
console.log(a.ml.vis);
// object can also be creat in similar way we creat array by new method

let obj=new Object();
obj.first = "dattotar"
obj.second = "ujjain"
console.log(obj);
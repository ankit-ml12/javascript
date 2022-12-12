const arr = [99077, 26, "ankit"]
let [no, age, nam] =arr;
console.log(no);
console.log(age);
console.log(nam); 

let [noo, ...arg] = arr;
console.log(noo);
console.log(arg);
// we can also able to use rest operator which conver arr into 
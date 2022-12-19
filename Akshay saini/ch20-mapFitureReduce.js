// Map, filter and reduce are higher order function in js 
// map function are used to transform an array 

const arr =[3, 4, 5, 6, 7];
// const double =[8, 10, 12, 14]
// const triole =[13, 15, 18, 24]

// how to use
const double = x => 2*x
const thriple = x => 3*x
const output2 = arr.map(double)
console.log(output2);
const output3 = arr.map(thriple)
console.log(output3);



// filter function is use to filter the value inside the arr

// 

const odd = x => x%2==1
const even = x => x%2==0

const oddarr = arr.filter(odd);
console.log(oddarr);
const evenarr = arr.filter(even);
console.log(evenarr);



// reduce function
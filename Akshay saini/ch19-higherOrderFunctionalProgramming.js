// Higher order function
// a function which take another function as a argument or return a function from it is know as higher order function 
//ans the function that we pass into the functin is called callback function
// which call's after sometime in the code



// best practice to follow in sde
//do not repeat yourself
//in function programming we try to think small reusable component
// 

const radius =[4, 5, 6, 7];
const pi= 3.14;
const area = radius => pi*radius*radius
const dia = radius => 2*radius
const cirum = radius => 2*pi*radius

const calculate =(radius, func)=>{
    const output = []
    for(let i=0; i<radius.length; i++){
        output.push(func(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, dia));
console.log(calculate(radius, cirum));


//this is an example of functional programming
let arr=["ankit", "vishal", 24, 45, true, false, 'm', 42.65];
//modified array
arr[0]="ravi";
//delete array element
delete arr[1];


console.log(arr);
// to sort arr.sort
// to reverse arr.reverse()
// to add element back of arr.push()
//to remove elemtn from back side use arr.pop()
// to add element front of arr use arr.shift()
// to remove element from the front of arr use arr.unshift()
//to concate two arr  
 let a =[1, 2, 3]; let b= [5, 6];
 let c= a.concat(b);
 console.log(c);

 // arr.join() methode
console.log(c.join()) //1,2,3,4,5

// slice methode
let myarr = ["ankit", "vishal", "ravi", "yash", "darsh"]
console.log(myarr.slice(1, 4)); //[ 'vishal', 'ravi', 'yash' ]
// if we pass only one argument then it slice from that place to till end
// it does not slice last value of passed argument
// it case of negative value it count from back side of arr

//splice methode
// splice(index, how many delete from that index, new value);
myarr.splice (2, 2, "manish", "rajkumar");
console.log(myarr); //[ 'ankit', 'vishal', 'manish', 'rajkumar', 'darsh' ]

// to check given thing is array or not 
console.log(Array.isArray(myarr));//true

// myarr.indexOf('search item' , start_from_index) search in forward direction
// myarr.lastIndexOf('search_item', start_from_index) search in backward direction

// to check the is element present or not
console.log(myarr.includes("manish"));//true
console.log(myarr.includes("manisha"));//false

//.some methode return true even condition setisfy by one elemtn
let arr2 =[1, 2, 3, 4, 5];
function mlm (as){
    return as>=4
}
console.log(arr2.some(mlm));// true
//.every() methode return false even  condition dissetisfy by one elemtn
//.find() methods return the valude of the first element which pass the test
//.findIndex() methods return the index of the first element which pass the test
//.filter() methode creat an array filled with all array element that pass a test
//.toString() convert arr into string now we can not able to implement arr methode on this string
//.fill() methode is use to fill static value on all place of arr

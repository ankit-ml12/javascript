let str = "THIS is ANKIT patidar";

//1 length
console.log(str.length);
//
//2 to lower case
const str2= str.toLowerCase();
console.log(str2);
//3 to upper case
const str3 =str.toUpperCase();
console.log(str3);
//both the above methode don't change in the original string

//4.str.includes() 
// to use chack the presence in string
console.log( str.includes('THIS'))

//5 & 6 str.startsWith() and str.endsWith()
//this methode return true or false according to situation if string start or end with passed argument 

//7 syt.search
// if this is present then it return the position of that argument
console.log(str.search("IS"));
//if nothing is present then it return -1

console.log("-----------------------");
// 8 match str.match()
const str4 = str.match('is');
console.log(str4); //[ 'is', index: 5, input: 'THIS is ANKIT patidar', groups: undefined ]
// if nothing is found then it return null


//9 str.indexOf()
//search first index of element position from front side
//10 str.indexOf()
//search last index of element position from end side


//10 str.replace('first', 'sec') 
// it modified the actual value and replace first argument with second
// it reaplaces only first presence of first argument

//11 remove the extra spaces from fornt and back side of string
// str.trim()

// 12 str.charAt(4)
// this methode is used to find char present at given position

//13 str.charCodeAt(4)
// return the ASCII value of character present at give position

//14 String.fromCharCode(int) it inbuild object use to find char assosiated with passed integer
console.log(String.fromCharCode(65)); 
console.log(String.fromCharCode(97)); 

//15 str.concate(str2) used to concate str 2 in string 1

//16 str.split()
// use to split string in to array from every prsent passed argument
console.log(str.split(" "));//[ 'THIS', 'is', 'ANKIT', 'patidar' ]

//17 str.repeat(4) use to repeat given string as much time as we want

// 18 str.slice(4, 5) use similar way like arr

//19 str.substr( 1, 6) use like slice given string from inded 1 and take 6 elemetns in given slice

// 20 str.substring( 1, 6) use similar to .slice methode but also include element present at index 6 in given string


// 21 str.toString() use to convert any other variable in object

//22 str.valueOf()
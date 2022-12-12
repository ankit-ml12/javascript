var n=2;
function square (num){
     
    return num*num;
}
var square2 = square(n)
var square4 = square(4)

// as we see we have one memory component and another is code component so first out program go from memory component ans assign all the variabl with undefine 

//  When it allocates memory to n, it stores a special value which is known as undefined.  In the first phase and in case of functions, it literally stores the whole code of the function inside this memory space so let me just show you I know it's a little tricky, but it stores the whole code literally, when I say it stores the whole code

//  Let us see what happens in the phase two The second phase is the code execution phase (reiterates) It is the code execution phase So let's see how this code is executed after the memory allocation. So JavaScript, once again runs through this whole JS program line by line and it executes the code now. So this is the point when all these functions and every calculation in the program is done. Okay? So as soon as it encounters this first line, n=2, it actually places the '2' inside the 'n' So till now, the value of n was undefined Now in the second phase of creation of Execution Context


//  After finishing line one, it goes to line two and sees that We have nothing to do here. Right? So line number two to five, there is nothing to execute literally. So it moves to line number 6 Line number 6 is the most amazing part. Here, we invoke a function Here's a function invocation What do you mean by a function invocation? Whenever you see a function name, with these parantheses, with these round brackets, it means that the function is now being executed. functions are the heart of JavaScript and, you know, they behave very differently in JavaScript than any other language. Okay? So functions over here are like a mini program, and whenever a new function is invoked, you know, a mini program is invoked, an altogether new execution context is created. 




//  One more thing that happens when the whole function is executed, is that, this whole execution context, for that instance of that function, will be deleted. That means that this whole execution context will now be completely deleted.


//  It is a stack Every time in the bottom of the stack we have our global execution context. That means, whenever any JS program is run, this call stack is populated with this Global execution context. This whole execution context is pushed inside this stack. Okay? Remember this. Whenever a function is invoked, or a new execution context is created, as in case here, in line number 6, we created this execution context, So this execution context is put inside the stack.



// call stack also call with the name of

// execution contest stack
// program stack
// control stack
// runtime stack
// machine stack
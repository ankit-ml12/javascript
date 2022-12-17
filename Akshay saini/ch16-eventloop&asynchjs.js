// js is a synchronouse single threded language it has one call stack and it can do only one thing at a time. this stack is present inside the js engine 
// this call stack never wait for anything. whateven come's inside this stack quickly executed

// now if you give stack a script and tell execute it after  5 sec it will not work because it doesnot have a timer

//now to increse functionality of js we need some superpower like timer, and many more

// here we get help from web api
// setTimeOut:- it is not part of js
// dom API
// fetch API
// console.log()
//local storage
//location

// they all are not part of javascript
// they all are webapi and our browser give this power to the stack of js.
// and how browser give us this superpower because of the global object and
// in global object come as a word windows.

// so browser wraps up above super power and put all then in word window and give access of this window words to the stack. or may be the js engine

// even loop and call back queue

// every thing inside the javascript happen inside the execution contest

// everything in javascript happens inside the execution context you can assume this execution context to be a big box or a container in which whole javascript code is executed so let us now see how this execution context actually looks like so follow along with me so now watch this carefully so execution in context is like a big box and it has two components in it the first component is also known as the memory component so this is the place where all the variables and functions are stored as a key value pairs 


// this memory component is also known as variable environment 

// component of this execution context is the code component so here is it so this is the place where code is executed one line at a time so this is the place so just like this memory component is also known as the variable environment there is also a heavy word for this code component it is also known as thread of execution 

//  so this thread of execution is just like a thread in which the whole code is executed one line at a time so here's the time for another core fundamental listen to this really very carefully so javascript is a synchronous single threaded language so this is really very important javascript is a synchronous single threaded language so let us see what does this means so when i say single threaded that means javascript can only execute one command at a time and when i say synchronous single threaded that means that javascript can only execute one command at a time and in a specific order okay so that means that it can only go to the next line once the current line has been finished executing 

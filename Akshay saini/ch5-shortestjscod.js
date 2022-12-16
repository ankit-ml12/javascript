// window is global object which is created along  with the execution contest
// so wherever a js program work a gloabl execution contest is created and global object is created and along with this variable is created

// at global level this is equal to window (window is in case of browser)
// global referse to any code which is not inside the function
// all the variable at global level are attached to this window object

var a= 10;
function b(){
    var c= 10;
}

// so we are able to access a and b using window.a and window.b but c in not inside global so we are not able to access it

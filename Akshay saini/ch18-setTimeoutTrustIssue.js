// we can't trust of setTimeout funciton beacause once its' create a callback function for 5 sec but this cb function get time only and only when this stack become empty. otherwise it wait till stack become empty.

// AND IF our stack take 10 sec to empty then this cb function work after 10 sec which is wrong.

// so we try our main thread never block
// even if we create 0 sec settimeout function it provide chance only when when our stack become empty of our global execution context remove from the stack or  main thread
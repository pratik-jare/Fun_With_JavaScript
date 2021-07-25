

/*****
Higher Order Function ->"A function that either takes a function(s) as an argument or returns as a function"
h(x) = f(g(x)) like in maths
*****/


function num_printer(upto, filter) {
  for(var i = 0; i<=upto; i++) {
    if(filter(i)) {
      console.log(i);
    }
  }
}

function is_odd(n) {
  return n % 2  !=0;
}

num_printer(10, is_odd);



/*****
Anonymous Function -> functions in Javascript can be written without name such functions called as Anonymous functions.
*****/

function(n) { return n % 2 != 0; }

// we can't call it but can pass it as arguent in function as

num_printer(10,function(n) { return n % 2 != 0; })


/*****
Nested Function -> function inside Function called nesting of functions.
*****/


function hypoteneous(a, b) {
	function square(x) {
		 return x*x;
	 }
	return Math.sqrt(square(a) + square(b));
}


hypoteneous(3,4)

 

/******* Closures *************/

var scope = "global"

function checkscope() {
	var scope = "local Scope";
	function f() {
		return scope;
	}
	return f();
}

scope; // global

checkscope(); // local

var scope = "global"

function checkscope() {
	var scope = "local Scope";
	function f() {
		return scope;
	}
	return f;
}
 
checkscope() (); // "local Scope"


function step_iterator(start, step) {
	return function () {
		var res = start;
		start = start + step;
		return res;
	} 
}
step_iterator(0,2);
/**
ƒ () {
var res = start;
start = start + step;
return res;
}
**/
var numwith2steps = step_iterator(0,2);
// undefined
numwith2steps();
// 0
numwith2steps();
// 2
numwith2steps();
// 4
numwith2steps();
// 6
numwith2steps();
// 8

var anothersteps = step_iterator(0,2);
// undefined
anothersteps();
// 0
anothersteps();
// 2
anothersteps();
// 4
anothersteps();
// 6 






























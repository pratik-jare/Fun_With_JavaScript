/********
 Error Handling
- Javascript has exception based error handling mechanism
- isNAN() is not a number - function whether a value is illegal number 
this function returns true if value is not a number and false when it is a number.
*********/ 


function sum() {
var args = Array.prototype.slice.call(arguments);
return args.reduce(function (prev, curr) { 
return prev+curr;
}, 0);
}
sum(1,2,3,4,5); // 15
sum(1,2,3,4,'a'); // "10a"

function sum() {
var args = Array.prototype.slice.call(arguments);
return args.reduce(function (prev, curr) { 
if(!isNaN(curr)) {
return prev+curr;
}else {
throw Error("Not-Numeric argument : " + curr);
}
}, 0);
} 

sum(1,2,3,4,'a');
// VM7593:7 Uncaught Error: Not-Numeric argument : a

function test() {
    try {
	sum(2,3,4,'a');
    } catch (error) {
	console.log(error);
    }
    console.log("doing something else");
}
 
test();
// entry-main-modern-vendor.582a53d398fcd871cd2b.js:1 Error: Not-Numeric argument : a
//  at <anonymous>:7:7
//   at Array.reduce (<anonymous>)
//   at sum (<anonymous>:3:13)
//    at test (<anonymous>:3:1)
//    at <anonymous>:1:1
// entry-main-modern-vendor.582a53d398fcd871cd2b.js:1 doing something else





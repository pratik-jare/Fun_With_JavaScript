/*******

 List Comprehension
 - filter function
 - map function
 - reduce function
 
 ****/
 
 var arr = [2,3,4,5,6,6,7]
 
 // filter function

 function isEven(element) {
	return element %2 === 0;
 }
 
arr.filter(isEven);

// (4) [2, 4, 6, 6]


/***** function we pass to this filter function is known as callback fuction.

in general callback function took 3 arguments as element, index and array 

function ( element, index, array ) {

}

this function must return the boolean value as we doing filter operations on this.

if only one argument as passed to function the other two taken as undefined,

*********/



function isEven(elem, index, array) {
	console.log(elem + ':' + index +':'+ array);
	return elem%2 === 0;
}
 
var arr = [2,3,4,5,6,6,7] 

/***
arr.filter(isEven); 
2:0:2,3,4,5,6,6,7 
3:1:2,3,4,5,6,6,7
4:2:2,3,4,5,6,6,7
5:3:2,3,4,5,6,6,7 
6:4:2,3,4,5,6,6,7
6:5:2,3,4,5,6,6,7 
7:6:2,3,4,5,6,6,7
(4) [2, 4, 6, 6]
***/


// Map Function 

arr.map(function(elem) {
	return elem*elem;
});

// (7) [4, 9, 16, 25, 36, 36, 49]

/****
 callback function parameters are same as filter function in map, but it must return a transformed value of that index.
 
*****/


/***************** Reduce Function 
purpose of this element to work on each element of array, but finally returning single value of computation, so we say we have reduce the array, 

In case of reduce the structure of callback function is 

function (prev, curr, index, array) {

}

Prev : Value previously returned in the last invocation of the callback, or initial value if supplied.
Curr : Current Element being processed in the way.
index : index of the curr element.
array : Array on Which reduce was called.

**********/

arr;
// (7) [2, 3, 4, 5, 6, 6, 7]
arr.reduce(function(prev,curr,index,array) {
return prev + curr;
})
// 33



function range(start, end, step) {
var res = [];
var item = start;
while(item <=end) {
res.push(item);
item = item + step;
}
return res;
}

undefined
function sum_natural_nos(n) {
return range(1, n,1).reduce(function (pre, curr) {
return prev + curr;
});
} 


sum_natural_nos(10); // 55


/// Function Argument 

function sum() {
 console.log(arguments);
}

function sum() {
  for( var i=0; i<=arguments.length;i++) {
   console.log(arguments[i]);
  }
}
// undefined
sum(1,2,4); 
// 1
// 2
// 4
// undefined
// undefined



function sum() {
var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prev, curr) {
        return prev + curr;
    });
}

sum(1,2,4);
// 7
















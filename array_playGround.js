/*
array collection of values same or diff type 

*/

var myArr = [];

myArr[0] = "zero";

myArr[1] = true;

myArr[2] = 1;

myArr; // (3) ["zero", true, 1]

	
myArr[10] = "ten";
		
myArr; // (11) ["zero", true, 1, empty × 7, "ten"] 
// above array called Sparse Array 

// other typical array called Compact Array

// javascript dont have array it consider array as Object.



myArr["0"]; // "zero"

typeof myArr; // "object"

myArr instanceof Object
// true
myArr instanceof Array
// true
Array;
// ƒunction  Array() { [native code] }


myArr["5"]="abc";
// "abc"
myArr;
// (11) ["zero", true, 1, empty × 2, "abc", empty × 4, "ten"]


myArr.length
//11


// normal For Loop 

for(var i=0; i<myArr.length; i++) {
console.log(myArr[i]);
} 

/*
zero 
true
1
2  undefined
abc
4 undefined 
ten
undefined
*/


// For Of Loop 

for(var i of myArr) {
    console.log(i); 
}

/*
zero 
true
1
2  undefined
abc
4 undefined 
ten
undefined
*/

// for in loop

for(var i in myArr) { 
    console.log(i);
}

// OR

for(var i in myArr) {
if(myArr.hasOwnProperty(i)) {
    console.log(i); 
    }
}

/* 
0
1
2
5
10
*/


for(var i in myArr) {
if(myArr.hasOwnProperty(i)) {
    console.log(myArr[i]); 
    }
}

/*
zero 
true
1 
abc 
ten
*/

// delete Array value from index

delete myArr[1]
// true
delete myArr[5]
// true
myArr;
// (11) ["zero", empty, 1, empty × 7, "ten"]































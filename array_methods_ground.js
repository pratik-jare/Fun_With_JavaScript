
/****
Array Methods  ->

concat
Push Pop
JOin
Slice
Splice
sort
 
****/

// 1. concat

var arr = [1,2,3,4]
var brr = [2,3,5,6]
arr.concat(brr)
// (8) [1, 2, 3, 4, 2, 3, 5, 6]

var crr = [11,12,13]
arr.concat(brr, crr);
// (11) [1, 2, 3, 4, 2, 3, 5, 6, 11, 12, 13];


arr.pop() ; // delete last element of array
arr.shift() ; // delete first element of array

 a = [2,3,4,5,6,7,8,8,1]
// (9) [2, 3, 4, 5, 6, 7, 8, 8, 1]
a.slice(1,5) // return array of start index to end index
// (4) [3, 4, 5, 6]
a.slice(3)
// (6) [5, 6, 7, 8, 8, 1]

a.splice(4); // after that index array all elements are delete from main array
// (5) [6, 7, 8, 8, 1]
a;
// (4) [2, 3, 4, 5]

a;
// (4) [2, 3, 4, 5]
a.splice(2,3, 'one', 'two')
// (2) [4, 5]
a;
// (4) [2, 3, "one", "two"]

var asrr = [2, 33, 43,12, 3, 22, 35, 66, 45, 65, 78, 23];
asrr.sort(); // sort in aphabetical order.
// (12) [12, 2, 22, 23, 3, 33, 35, 43, 45, 65, 66, 78]

myarray = [2, 5, 1, 55, 90, 45, 23, 7 , 8, 9]

// accending order 

function num_compare(a,b){
return (a-b);
}

myarray.sort(num_compare);

//  descending order

function num_compar_desc(a,b){
return (b-a);
}

myarray.sort(num_compar_desc);


















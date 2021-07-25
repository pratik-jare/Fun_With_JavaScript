/******
Sum of Square of array numbers 
****/

function sum_of_squares(arr) {
  return arr.map(function(elem) {return elem * elem}).reduce(function(prev, curr) {return prev + curr}, 0);
}


sum_of_squares([1,2,3,4]);
// 30


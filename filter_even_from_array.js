

// even filter array


function filter_even(arr) {
  return arr.filter(function(elem) {return elem % 2 === 0});
} 

filter_even([1,2,3,4])
// (2) [2, 4]



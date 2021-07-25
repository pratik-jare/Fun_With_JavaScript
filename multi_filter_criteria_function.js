
/** criteria function filter multiple ***/
function arr_complement(arr, criteria_fn) {
  return arr.filter(function(i) {return criteria_fn(i)});
}

function  is_even(item) {
return item % 2 === 0;
}

function  is_odd(item) {
return item % 2 !== 0;
}

 
arr_complement(arr,is_even)
// (5) [2, 4, 6, 8, 10]
arr_complement(arr,is_even)
// (5) [2, 4, 6, 8, 10]




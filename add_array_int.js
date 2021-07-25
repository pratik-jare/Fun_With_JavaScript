

// Add all Array integers 


function add_all(arr) {
  var sum = 0;
  arr.forEach(function(e) {sum += e;});
  return sum;
}

var a = [10, 11, 12, 13, 14, 15];

add_all(a); // 75

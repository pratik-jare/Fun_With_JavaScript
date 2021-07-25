
/** Factorial **/
function factorial(n) {
  var fact = 1;
  for (var i=1; i <= n; i++) {
	fact = fact * i;
  }
  return fact;
}

/**  Using recursion**/

function factorial_rec(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);
}


factorial(5) // 120

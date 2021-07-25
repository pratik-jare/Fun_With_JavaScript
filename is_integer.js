

/* Check Integer */


function is_integer(n) {
  return typeof(n) == "number" && Math.floor(n) == n;
}

is_integer(name) // false

is_integer("4") // false

is_integer() // false

is_integer(4) // true

is_integer(11) // true



function length_of_array(arr) {

  var counter = 0;
  
  arr.forEach(function() {counter++;});
  
  return counter;
}

var objArr = [{radius: 5}, {radius: 9}, {radius: 2}];


length_of_array(objArr);



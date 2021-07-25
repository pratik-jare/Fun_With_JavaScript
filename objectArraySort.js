/*****

Object Array Sort

*******/

function circle_comparator(c1, c2) {
  return c1.radius - c2.radius;  
} 

var obArr = [{radius: 5}, {radius: 9}, {radius: 2}];

obArr.sort(circle_comparator)

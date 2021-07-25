/**

 Object Oriented Programming with Javascript

**/


// Function as Object

var person = { first_name : "pratik", last_name: "jare", full_name: function() { return this.first_name + " " + this.last_name; }}

person; // {first_name: "pratik", last_name: "jare", full_name: ƒ}

var x = Number(5);
x; // 5
typeof x; // "number"

var y = new Number(7);
y; // Number {7}
typeof y; //"object"

x + y; // 12
Number; // ƒ Number() { [native code] }
String; // ƒ String() { [native code] }


// this keyword 


var aCircle = { radius : 3, area : function() { return Math.PI * this.radius * this.radius;}}
aCircle.area(); //28.274333882308138


// Constructor functions

function Circle(r) {
	this.radius = r;
	this.area = function() { return Math.PI * this.radius * this.radius }
}

var c = new Circle(5); 
c; // Circle {radius: 5, area: ƒ}
c.area; // ƒ () { return Math.PI * this.radius * this.radius }
c.area(); // 78.53981633974483
c.radius; // 5


// Using the ‘prototype’ property

Circle.prototype.perimeter = function() { return 2 * Math.PI * this.radius;}  // ƒ () { return 2 * Math.PI * this.radius;} 
var c1 = new Circle(5); 
c1.perimeter(); // 31.41592653589793
c.perimeter(); //31.41592653589793




// Interface 

function Shape() {
this.area = function() { 
    return "need to implement"
}
}

function Square(length) {
this.length = length;
this.area = function() { return this.length * this.length;}
}
function Rectangle(height, width) {
this.height = height;
this.width = width;
}

Square.prototype = new Shape(); // Shape {area: ƒ}area: ƒ ()__proto__: Object
Rectangle.prototype = new Shape(); // Shape {area: ƒ}
new Rectangle(2).area(); // "need to implement"
new Square(2).area(); //4
new Rectangle(4,6).area(); //"need to implement"
 
function Rectangle(height, width) {
this.height = height;
this.width = width;
this.area = function () { return this.height * this.width;}
}

 
new Rectangle(4,6).area(); // 24



// Functions 
// constructor function to represent a Rectangle, which can calculate its area and perimeter.


function Rectangle(height, width) {
  this.area = function() {return height * width};
  this.perimeter = function() {return 2 * (height + width)};
}

new Rectangle(3,4).area(); // 12
new Rectangle(3,4).perimeter(); // 14


// distance from points 

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.distanceFrom = function(another) {
    return Math.sqrt((this.x - another.x) * (this.x - another.x) + (this.y - another.y) * (this.y - another.y));
  }
}

var pt = new Point(5,6)
var another = { x : 5, y : 3}
pt.distanceFrom(another) ; // 3
var another = { x : 2, y : 3}
pt.distanceFrom(another); //4.242640687119285



// String is Palindrome 

String.prototype.isPalindrome = function() {
  return this.split('').reverse().join('').valueOf() === this.valueOf();
} 

"xyx".isPalindrome();  // true

String.prototype.isPalindrome = function() {
  return this.split('').reverse().join('') == this; // with a == operator we don't need to use the valueOf method. WHY?? Check the type of this.split('').reverse().join('')
}
 

"xyx".isPalindrome(); // true











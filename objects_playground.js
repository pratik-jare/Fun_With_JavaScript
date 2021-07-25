
/******

Object Is an Unordered Collection Of Properties, with each property has an name and value.


****/

var car = new Object();
car;
// {}

car = { color: "red", model:"11XX"};
car;
// { "color": "red", "model":"11XX"}

var person= { name:"xuz", age:24, sex:"M"};
person;
// { "name":"xuz", "age":24, "sex":"M"}


var book = {};
book.title = "asus";
book;
// {"title":"asus"} 


book["author"]="just";
book;
// {title: "same", author: "just"}


console.log(book.author); //  just
console.log(book["title"]); //  asus

delete book.author;
book;
// {title: "same"}

for(var p in person) {
console.log(p)
}

for(var p in person) {
console.log(p + ':' + person[p])
}

book.valueOf();
// Object  {title: "same"}

var x = new Number(5);

x.valueOf()
// 5
x.toString()
// "5"







/*****
JSON - JavaScript Object Notation

it is like as Object, 

***/

{
"title":"book title",
"author":"mesa",
"price": 30
}

var book_as_str = '';

var book_as_str = `{
"title":"book title",
"author":"mesa",
"price": 30
}`;

var book_as_str = '{"title":"book title","author":"mesa","price": 30}';

var book_as_str = "{\"title\":\"book title\",\"author\":\"mesa\",\"price\": 30}" ;

var book = json.parse(book_as_str);

book; // Object {"title":"book title","author":"mesa","price": 30}

book.title; // "book title"

({title : "The Three Musketeers", author: "Alexandre Dumas", price: "$49"}).toString();
//"[object Object]"




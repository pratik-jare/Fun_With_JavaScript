/*
Document  
Root Element :<html>
Element : <head> <body> <title> <a> <h1>
Attribute : href
Text: "My Title" , "My Link", "My Header"
*/

// <html>
//     <head>
//         <title> My title </title>
//     </head>
//     <body>
//         <a href="google.com">My Link</a>
//         <h1 id="myHeader">
//             My Header
//     </h1>
//     </body>
// </html>

document.getElementById("id");

<img id="myImg" src="logo.gif"></img>

document.getElementById("myImg").src='new_logo.gif';

<img id="myImg" src="logo.gif" cust-attr="some value"></img>

document.getElementById("myImg").getAttribute("cust-attr");


<span id="headerImgs">
    <img src="home.gif"></img>
    <img id="abt" src="about.gif"></img>
    <img src="contact.gif"></img>
</span>

document.getElementById("headerImgs").childNodes[1].src = "about_new.gif";
document.getElementById("headerImgs").lastChild.src = "about_new.gif";
document.getElementById("abt").previousSibling.src = "about_new.gif";
document.getElementById("abt").nextSibling.src = "about_new.gif";


document.getElementsByTagName

document.getElementsByTagName("img");

<span name="name">name </span>

document.getElementsByName('name')















const scriptingLanguage = [
    {title: "Add your concept of scripting Language"}
];

//A scripting language is a type of programming language designed for automating tasks, 
// controlling software, or adding dynamic behavior to applications. 
// Unlike compiled languages, scripting languages are interpreted, meaning code is executed line-by-line at runtime, 
// making development faster and more interactive.
// It equally permits or makes static web pages dynamic, manipulate content on the fly, 
// and create interactive experiences for users. 
// JavaScript operates within the browser (or on servers with Node.js) 
// and is essential for tasks like responding to user input, updating content dynamically 
// without reloading the page or communicating with APIs.
// Javascript can do the following:
// (a) It can manipulate the Document Object Model
// Example: It can change the text of a heading dynamically
document.getElementById("heading").innerText = "Hello, World!";

// (b) It can also handle events
// Example: Add a click event listener to a button
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// (c) Javascript works with APIs
// Fetch data from an API and log it
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));
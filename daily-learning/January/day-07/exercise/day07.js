// First name
let firstName = "John";

//  Last name 
let lastName = "Doe";

// Age
let age = 25;

// Favorite Color
let favoriteColor = "Blue";

// Today's Date
let todaysDate = "January 7, 2025";

// Birth year
let birthYear = 2000;

// Like chocolate
let likesChocolate = true;

// School Name
let schoolName = "Greenfield Academy";

// Favorite Movie
let favoriteMovie = "Inception";

// Country of origin
let countryOfOrigin = "United States";



// Mathematical Variables
// Sum of two numbers
let number1 = 10;
let number2 = 15;
let sum = number1 + number2;

// Length of a rectangle
let length = 5;
let width = 10;
let areaOfRectangle = length * width;

// Age in 5 years
let currentAge = 25;
let ageInFiveYears = currentAge + 5;

// Height in meters
let heightInMeters = 1.75;

// Perimeter of a square
let Length = 4;
let perimeterOfSquare = 4 * Length;

// Speed
let distance = 100; // in km
let time = 2; // in hours
// speed = distance / time
let speed = distance / time; 

// Cost of item
let price = 1200; // per item
let quantity = 3;
let totalCost = price * quantity;

// Radius and cicrumference of a circle
let radius = 7;
let circumference = 2 * Math.PI * radius;

// Square of a number
let numberToSquare = 6;
let squaredNumber = numberToSquare ** 2;

// Hours worked
let hoursWorked = 40;
let hourlyPay = 20;
let totalSalary = hoursWorked * hourlyPay;



// String Concatenation and Template Literals
let fullName = firstName + " " + lastName;

let introduction = `Hello, my name is ${fullName}, and I am ${age} years old.`;

let sentenceUsingConcatenation = "My name is " + firstName + " " + lastName + ".";

let city = "New York";
let state = "New York";
let location = `${city}, ${state}`;

let hobby = "reading books";
let hobbyDescription = `I enjoy ${hobby} in my free time.`;

let combinedSentence = `${fullName} is ${age} years old and enjoys ${hobby}.`;

let message = "Have a great day!";
let greeting = "Hello! " + message;

let productName = "Laptop";
let productPrice = 500;
let productInfo = `Item: ${productName}, Price: $${productPrice}`;

let quote = "The journey of a thousand miles begins with a single step.";
let author = "Lao Tzu";
let fullQuote = `"${quote}" - ${author}`;

let friendsName = "Jane";
let welcomeMessage = `Hi ${friendsName}, welcome to the community!`;

console.log({
  fullName,
  introduction,
  sentenceUsingConcatenation,
  location,
  hobbyDescription,
  combinedSentence,
  greeting,
  productInfo,
  fullQuote,
  welcomeMessage
});
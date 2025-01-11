// TASK 1:
// Declare an array of products available in the store
const products = ["shoes, 'bags', 'watches', 'hats"];


// Add two new products: gloves and scarves
// We use the push method to add items to the end of the array
products.push("gloves, scarves");


// Remove the first product from the list
// Use the shift method to remove the first element
products.shift();


// Sort the products alphabetically
// Use the sort method, which sorts the array elements in place
products.sort();


// Find the index of watches
// Use the indexOf method to find the position of watches in the array
const watchesIndex = products.indexOf("watches");
console.log("Index of watches:", watchesIndex);


// Filter out all products that start with the letter 's'
// Use the filter method with a condition that checks the first character
const filteredProducts = products.filter(product => product[0].toLowerCase() !== 's');
console.log("Filtered products (no 's'):", filteredProducts);


// Log the final state of the products array
console.log("Final sorted products:", products);



// TASK 2:
// Create an object called "student" with initial details

const student = {
    name: "Frank Martins", // Student's name
    age: 20,          // Student's age
    subjects: ["Math", "Science", "History"] // List of subjects
  };
  

  // Add a new key-value pair: grade
  // Directly assign a new property to the object
  student.grade = "A+";

  
  // Step 3: Remove the age property
  // Use the delete operator to remove a property
  delete student.age;
  

  // Log all the properties of the student object using Object.keys()
  // Object.keys() returns an array of property names
  console.log("Properties of student:", Object.keys(student));
  

  // Log all the values of the student object using Object.values()
  // Object.values() returns an array of property values
  console.log("Values of student:", Object.values(student));
  

  // Use a for...in loop to print key-value pairs
  // The for...in loop iterates over all enumerable properties in the object
  for (const key in student) {
    console.log(`${key}: ${student[key]}`);
  }
  
// Create an array; "library" with three book objects
const library = [
    { title: "The Alchemist", author: "Paulo Coelho", available: false },
    { title: "Things fall Apart", author: "Chinua Achebe", available: true },
    { title: "Purple Hibiscus", author: "Chimamanda Ngozi Adichie", available: true }
  ];

  
  // Add a new book object to the library array
  // Use the push method to add a new book
  library.push({ title: "Children of Blood and Bone", author: "Tomi Adeyemi", available: true });

  
  // Use filter() to create a new array of all available books
  // Filter books where the 'available' property is true
  const availableBooks = library.filter(book => book.available);
  console.log("Available books:", availableBooks);

  
  // Use find() to locate a book by title (e.g., "The Alchemist")
  // Find the first book with the matching title
  const foundBook = library.find(book => book.title === "The Alchemist");
  console.log("Book found:", foundBook);
  

  // Update the available status of a specific book to false (simulate borrowing)
  // Use find() to locate the book, then update its 'available' property
  const borrowBookTitle = 'Purple Hibiscus';
  const bookToBorrow = library.find(book => book.title === borrowBookTitle);
  if (bookToBorrow) {
    bookToBorrow.available = false; // Set availability to false
    console.log(`${borrowBookTitle} has been borrowed.`);
  } else {
    console.log(`${borrowBookTitle} not found in the library.`);
  }
  

  // Use map() to create a new array of strings listing each book's title and author
  // Format each book's title and author into a string
  const bookDetails = library.map(book => `${book.title} by ${book.author}`);
  console.log('Book details:', bookDetails);
  
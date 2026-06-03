// Strings in JavaScript are immutable, meaning that once a string is created, it cannot be changed. However, you can create new strings based on existing ones. Here are some common operations you can perform with strings in JavaScript:

// Creating a string
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
// Template literals (using backticks) allow for easier string interpolation
console.log(`Hello ${name}, you have ${repoCount} repositories`);

// String methods
const str = "Hello, World!";
// console.log(str.length); // Length of the string
// console.log(str.toUpperCase()); // Convert to uppercase
// console.log(str.toLowerCase()); // Convert to lowercase
// console.log(str.includes("World")); // Check if the string contains "World"
// console.log(str.indexOf("o")); // Get the index of the first occurrence of "o"
console.log(str.slice(0, 5)); // Extract a portion of the string (from index 0 to 5)
// console.log(str.replace("World", "JavaScript")); // Replace "World" with "JavaScript"
const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
// substring method
console.log(gameName.substring(0, 5)); // Extracts characters from index 0 to 5 (not including 5)
// trim method
const stringWithSpaces = "   Hello, World!   ";
console.log(stringWithSpaces.trim()); // Removes whitespace from both ends of the string
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))
// split method
const csv = "name,age,city";
const values = csv.split(",");
console.log(values); // Output: ["name", "age", "city"]

// repeat method
const repeatedString = "Hello ".repeat(3);
console.log(repeatedString); // Output: "Hello Hello Hello "
const products = ['Apple iPhone', 'Samsung Galaxy', 'Google Pixel'];
const searchQuery = 'phone'.toLowerCase(); // Convert the search query to lowercase for case-insensitive matching

const filteredProducts = products.filter(item => // Convert each product name to lowercase and check if it includes the search query
  item.toLowerCase().includes(searchQuery)
);
console.log(filteredProducts); // Output: ["Apple iPhone", "Samsung Galaxy"]
// Filter method in strings
const sentences = [
  "I love JavaScript",
  "JavaScript is great for web development",
  "I enjoy learning new programming languages"
]; 
const keyword = "JavaScript"; // Keyword to filter sentences

const filteredSentences = sentences.filter(sentence => // Filter sentences that include the keyword
    sentence.includes(keyword)
);
console.log(filteredSentences); // Output: ["I love JavaScript", "JavaScript is great for web development"]
console.log(typeof sentences); // Output: "object" (arrays are of type object in JavaScript)
// JavaScript code to take input from the user,
// using the prompt function, with a display message
// and default message.
// how to define prompt function in JavaScript. The prompt function is used to take input from the user. It displays a dialog box that prompts the user for input and returns the input as a string. The prompt function can take two arguments: the first is the message to display to the user, and the second is an optional default value that will be pre-filled in the input field.
// Error ReferenceError: prompt is not defined is thrown when you try to use the prompt function in an environment where it is not available, such as Node.js. The prompt function is typically available in web browsers, so if you are running this code in a browser environment, it should work without any issues. If you are running this code in a non-browser environment, you may need to use a different method for taking user input, such as using the readline module in Node.js.
const userInput = prompt("Please enter your name:", "John Doe");

// Check if the user provided input or canceled the prompt
if (userInput !== null) {
    // Display the input back to the user
    alert("Hello, " + userInput + "!");
} else {
    alert("You canceled the input.");
}
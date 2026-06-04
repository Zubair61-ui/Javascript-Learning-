// Functions
function sayMyName(){ // function declaration
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() // function call

// function addTwoNumbers(number1, number2){ // function with parameters are defined in the parentheses which are used as placeholders for the values that will be passed when the function is called
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4.1) // function call with arguments are the actual values that are passed to the function when it is called
// Returning values from functions
function addTwoNumbers(number1, number2){
    return number1 + number2; // return statement is used to specify the value that a function should return when it is called
}
const result = addTwoNumbers(5, 4.1) // the return value of the function is stored in a variable called result
console.log(result) // the value of result is printed to the console


function loginUserMessage(username = "sam"){ //
    if(!username){ // if the username is not provided, the function will return a message asking the user to enter a username
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` // if the username is provided, the function will return a message saying that the user has just logged in
}

console.log(loginUserMessage()) // if the function is called without an argument, it will use the default value of "sam" and return "sam just logged in"
console.log(loginUserMessage("hitesh")) // if the function is called with an argument, it will use that argument and return a message saying that the user has just logged in

function calculateCartPrice(val1, val2, ...num1){ // rest parameter is used to represent an indefinite number of arguments as an array. In this case, num1 will be an array of all the arguments passed to the function after val1 and val2
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // the function will return an array of [500, 2000] because those are the arguments passed after val1 and val2

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){ // the function takes an object as an argument and logs the username and price properties of that object to the console
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`); // the function uses template literals to format the output string, which allows for embedding expressions inside the string using ${}
}
handleObject(user) // the function is called with the user object as an argument, which will log "Username is hitesh and price is 199" to the console   

handleObject({
    username: "sam",
    prices: 399
})

const myNewArray = [200, 400, 100, 600] // the function takes an array as an argument and returns the second value of that array, which is accessed using the index 1 (since array indices start at 0)

function returnSecondValue(getArray){ // the function takes an array as an argument and returns the second value of that array, which is accessed using the index 1 (since array indices start at 0)
    return getArray[1] // the function uses the return statement to return the value of the second element of the array, which is accessed using the index 1
}

console.log(returnSecondValue(myNewArray));  // the function is called with the myNewArray as an argument, which will return 400, the second value of the array. The result is then logged to the console.
//console.log(returnSecondValue([200, 400, 500, 1000])); // the function is called with a new array as an argument, which will return 400, the second value of the array. The result is then logged to the console.
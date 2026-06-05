// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// } 

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

//console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // only first statement will be executed when there are no curly braces

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) { // else if is used to check multiple conditions, it will only execute the first condition that is true
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// } 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // && is the logical AND operator, it will only return true if both conditions are true as well as the condition 2==3 which is false, so the whole condition will be false
    console.log("Allow to buy course");
} else if (userLoggedIn || debitCard) { // || is the logical OR operator, it will return true if at least one of the conditions is true, in this case userLoggedIn is true, so the whole condition will be true
    console.log("Allow to buy course with cash on delivery");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
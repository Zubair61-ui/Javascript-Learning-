//var c = 300
// let a = 300
// // local scope is only accessible within the block it is defined in
// if (true) { 
//     let a = 10 
//     const b = 20
//     console.log("INNER: ", a);
    
// }



// console.log(a);
//console.log(b);
//console.log(c);

// function scope is only accessible within the function it is defined in
// function myFunction() {
//     let a = 10 
//     const b = 20
//     var c = 300
//     console.log("INNER: ", a);
//     console.log("INNER: ", b);
//     console.log("INNER: ", c);
// }

// myFunction()
//console.log(a);

// function one(){ // global scope is accessible anywhere in the code
//     const username = "hitesh"

//     function two(){ // function scope is only accessible within the function it is defined in
//         const website = "youtube"
//         console.log(username); // this will print "hitesh" because username is defined in the scope of one() and two() can access it
//     }
//     // console.log(website); // this will throw an error because website is not defined in the scope of one()

//      two()

// }
// one()

if (true) {  // block scope is only accessible within the block it is defined in
    const username = "hitesh" // this username is different from the username defined in the function one()
    if (username === "hitesh") { // this block is only accessible within the block it is defined in
        const website = " youtube" // this website is different from the website defined in the function two()
        console.log(username + website); // this will print "hitesh youtube"
    }
    // console.log(website); // this will throw an error because website is not defined in the scope of the if block
}

//console.log(username); // this will throw an error because username is not defined in the global scope

// Nested scopes: A function can be defined inside another function, and the inner function can access the variables of the outer function. This is called nested scopes.

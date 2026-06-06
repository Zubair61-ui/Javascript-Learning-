// forEach loop, In this function name is not required, only parameter is required
//const coding = ["js", "ruby", "java", "python", "cpp"]  // array

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )
// printMe You don't have to declare the function directly inside the forEach parentheses.
//  If you already have a function declared somewhere else in your code,
//  you can just pass its name right in. Here we are passing an array to a function
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
// We are passing objects to array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => { // we can access objects inside arrays with the help of forEach loop
    console.log(item.languageName);
} )
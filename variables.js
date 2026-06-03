// Variables
const accountID = 14444  // Values assigned to a constant variable cannot be changed
let accountname = "John Doe"
var accountpassword = "password123" // values assigned to a var variable can be changed but var is function-scoped and can lead to issues in larger codebases, so it's generally recommended to use let or const instead.
accontcity = "New York"
console.log(accountID)
let accounstate;
console.table({accountID, accountname, accountpassword, accontcity, accounstate})

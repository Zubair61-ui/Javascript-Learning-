// Switch statement is used to perform different actions based on different conditions. It is an alternative to if-else statements when there are multiple conditions to check. It is more efficient and easier to read than if-else statements when there are many conditions to check.
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "March"

switch (month) {
    case "jan":
        console.log("Jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
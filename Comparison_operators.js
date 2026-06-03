// Comparison Operators

// Equal to (==)
console.log(5 == '5'); // true (type coercion occurs)   
console.log(5 == 5);   // true
console.log(5 == 6);   // false 
console.log('hello' == 'hello'); // true
console.log('hello' == 'Hello'); // false (case-sensitive)  
console.log(null == undefined); // true (both are considered equal in non-strict comparison)
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(NaN == NaN); // false (NaN is not equal to anything, including itself)
console.log(0 == false); // true (type coercion occurs)
console.log(1 == true); // true (type coercion occurs)
console.log('' == false); // true (type coercion occurs)
console.log('0' == false); // true (type coercion occurs)
console.log('' == 0); // true (type coercion occurs)
console.log('0' == 0); // true (type coercion occurs)
console.log('' == null); // false (null is only equal to undefined in non-strict comparison)
console.log('' == undefined); // false (undefined is only equal to null in non-strict comparison)
console.log(0 == null); // false (null is only equal to undefined in non-strict comparison)
console.log(0 == undefined); // false (undefined is only equal to null in non-strict comparison)
console.log(null > 0); // false (null is treated as 0 in numeric comparisons)
console.log(undefined > 0); // false (undefined is treated as NaN in numeric comparisons)
console.log(null == 0); // false (null is only equal to undefined in non-strict comparison)
console.log(undefined == 0); // false (undefined is only equal to null in non-strict comparison)
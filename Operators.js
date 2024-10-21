//Equality

 console.log(5 == '5');
 console.log(15 === '15');

//Comparison

console.log(5 != 6);
console.log(5 > 6);
console.log(5 < 6);
console.log(6 <= 6);
console.log(6 >= 6);


//Logical

let age = 25;
let hasID = true;
if (age >= 18 && hasID) {
    console.log('Access granted');  // Both conditions must be true
}


let age2 = 16;
let hasPermission = true;
if (age2 >= 18 || hasPermission) {
    console.log('Access granted');  // At least one condition must be true
}


let isLoggedIn = false;
if (!isLoggedIn) {
    console.log('Please log in');  // Executes if isLoggedIn is false
}


//Assignment 

let x = 5;
x += 3; // x is now 8 (5 + 3)
console.log(x)


//Ternary

let age3 = 18;
let canVote = (age3 >= 18) ? 'Yes' : 'No';
console.log(canVote); // Output: Yes


//Bitwise





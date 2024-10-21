let singleQuoteString = 'Hello, World!';


let doubleQuoteString = "Hello, India!";

let Fullname = "Jivita";
let templateString = `Hello, ${Fullname}!`; 


console.log(singleQuoteString)
console.log(doubleQuoteString)
console.log(templateString)


//String Properties & Methods

let greeting = "Hello !! GoodMorning";
console.log(greeting.length);

console.log(greeting.toUpperCase()); 

console.log(greeting.toLowerCase()); 

console.log(greeting.charAt(12)); 

console.log(greeting.includes("Good")); 

console.log(greeting.substring(0, 5)); 

console.log(greeting.replace("Good", "bad")); 



let spacedString = "   Hello, World!   ";
console.log(spacedString.trim()); 

//Concatenation in 2 ways
let firstName = "Jivita";
let lastName = "Jivi";
let fullName = firstName + " " + lastName; // Output: "John Doe"
console.log(fullName);

let fullNameTemplate = `${firstName} ${lastName}`; 
console.log(fullNameTemplate);

//Escape Characters

//1) To include a single quote (') single quote string

let quote = 'It\'s a beautiful day!'; // Output: It's a beautiful day!
console.log(quote)


//2) To include double quotes in a double-quoted string:
let quoteDouble = "He said, \"Hello!\""; // Output: He said, "Hello!"
console.log(quoteDouble)

//3) Newline character:


let multiLine = "Line 1\nLine 2"; 
console.log(multiLine);

let fruits = ["apple", "banana", "cherry"];
console.log(fruits)

let colors = ["red", "green", "blue"];
console.log(colors[0]); 
console.log(colors[2]); 


//Array Methods

colors.push("yellow");
console.log(colors); 
let lastColor = colors.pop();
console.log(lastColor); // Output: "yellow"
console.log(colors); 

let firstColor = colors.shift();  //Equavalent to pop
console.log(firstColor); // Output: "red"
console.log(colors); 

colors.unshift("purple");  //Eqvalent to Push
console.log(colors); 

let heros = ["Vijay" , "Suriya" , "Ajith" , "SK" , "VJS" , "Dhanush"]

let fansClub = heros.slice(1 , 4);
console.log(fansClub)


let fans = heros.toString();
console.log(fans)

//Splica


let numbers = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1
let removedNumbers = numbers.splice(1, 2); 
console.log(numbers); // Output: [1, 4, 5]
console.log(removedNumbers); // Output: [2, 3]

// Add elements at index 1
numbers.splice(1, 0, 6, 7); // Adding 6 and 7 at index 1
console.log(numbers); // Output: [1, 6, 7, 4, 5]

// Replace an element at index 2
numbers.splice(2, 1, 8); // Removing 7 and adding 8
console.log(numbers); // Output: [1, 6, 8, 4, 5]


let Fruits = ["apple", "banana", "cherry", "grapes"];

// Remove 1 element starting from index 2
let removedFruits = Fruits.splice(2, 1); 
console.log(Fruits); // Output: ["apple", "banana", "date"]
console.log(removedFruits); // Output: ["cherry"]

// Add elements at index 1
Fruits.splice(1, 0, "blueberry", "grape"); // Adding "blueberry" and "grape" at index 1
console.log(Fruits); // Output: ["apple", "blueberry", "grape", "banana", "date"]

// Replace an element at index 3
Fruits.splice(3, 1, "kiwi"); // Removing "banana" and adding "kiwi"
console.log(Fruits); // Output: ["apple", "blueberry", "grape", "kiwi", "date"]


//Includes 

const num = [55,33,66,77,88,12]
const j = num.includes(66)
console.log(j)


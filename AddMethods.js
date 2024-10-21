//For Each

let colors = ["red" , "purple" , "yellow" , "green" , "blue" , "pink"]

colors.forEach((color) => {
    console.log(color); // Output each color
});


//Map

let uppercasedColors = colors.map(color => color.toUpperCase());
console.log(uppercasedColors); 

//Filter

let filteredColors = colors.filter(color => color.includes("e"));
console.log(filteredColors); // Output: ["green", "blue"]

//Reduce

let sum = [100, 27, 11, 24 , 14 , 21 , 6]
let output = sum.reduce((result, value) => result + value);
console.log(output); // Output: 10


let largest = sum.reduce((prev , curr) => {
    return prev > curr ? prev : curr;
});

console.log(largest)


//Sort

let ascendingOrder = sum.sort((a,b) => a-b);
console.log(ascendingOrder)


let descendingOrder = sum.sort((a,b) => b-a);
console.log(descendingOrder)

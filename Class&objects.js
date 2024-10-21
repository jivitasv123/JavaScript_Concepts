//Object ==> Key & Value pair

// Creating an object using object literal syntax
let person = {
    name: "Alice",     // Key: "name", Value: "Alice"
    age: 30,          // Key: "age", Value: 30
    job: "Engineer"    // Key: "job", Value: "Engineer"
};

console.log(person)
console.log(person.name); // Output: Alice
console.log(person["job"]); // Output: Engineer

person.age = 31; // Updating the age
console.log(person.age); // Output: 31

person.job = "Senior Engineer"; // Updating the job
console.log(person.job); // Output: Senior Engineer


//Class

class Signal{

 Stop(){
 console.log("Red")
}

Go(){
    console.log("Green")
}

Slow(){
    console.log("Yellow")
}

}

let traffic = new Signal(); //Creation Of Object
traffic.Go();
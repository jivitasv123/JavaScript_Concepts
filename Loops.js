for(let i = 5; i < 11; i++){
    console.log("Jivi");
}

let age = 2;
while(age < 5){
    console.log("can vote")
    age++;
}

let age3 = 2;
do {
    console.log("cannot vote")
    age3++;
} while (age3 < 6);

let str = "JIVITA";
for(let letter of str){
    console.log(letter)
}

let student = {
    Fullname : "Jivita",
    Age : 24,
    Marks :98
};

for(let details in student){
    console.log(details)
}

console.log(student["Marks"])
console.log(student.Age)


//Function Declaration with No paramter

function myCook(){
console.log("Timing 9 to 5 and Salary is 10k")
}

myCook();

//Function Declaration with paramter

function myTrainer(fees , duration){
    console.log(`Total Gym fees is ${fees} for the duration of ${duration} months`)
    }
    
    myTrainer(15000 , 12);

//Function Expression

const myExpenses = function OctMonth(parlour , movie , loans){
      console.log("Total Expenses for Oct Month is  " + (parlour + movie + loans))
}

myExpenses(1500,500,4000);

//Arrow Function

let mysavings = (expense , income) =>{
    console.log("Total savings this month\t" + (income - expense))
}

mysavings(88000 , 123000);


//Immediate invode function


(function cosmetics(){
    console.log("Lipstick")
    console.log("eyeshadow")
    console.log("skincare")
    console.log("face cream")

})();
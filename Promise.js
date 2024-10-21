// Function to simulate booking a movie ticket
function bookTicket(movie) {
    console.log(`You requested to book a ticket for "${movie}".`);

    return new Promise((resolve, reject) => {
        const isTicketBooked = true; // Change to false to simulate a cancellation

        if (isTicketBooked) {
            resolve(`Your ticket for "${movie}" has been booked!`);
        } else {
            reject(`Your ticket for "${movie}" has been canceled.`);
        }
    });
}

// Simulate booking a ticket
bookTicket("Amaran")
    .then(() => {
        console.log("Success"); 
    })
    .catch(() => {
        console.log("Try Again"); 
    });


    //Simple



//watercan  - 3000
//room - 2000
//trash  -  1000


function water(){

    return new Promise((resolve,reject)=>{

         setTimeout(()=>{
  
             const wat = true
              if(wat){
                resolve("water can filled")
              }else{
                reject("water not filled")
              }


         },5000)


    })




}

function room(){

    return new Promise((resolve,reject)=>{

         setTimeout(()=>{
  
             const wat = true
              if(wat){
                resolve("room is cleaned")
              }else{
                reject("room is not cleaned")
              }


         },2000)


    })




}




water().then(value => {console.log(value);return room()})
       .then(value2 => {console.log(value2) })

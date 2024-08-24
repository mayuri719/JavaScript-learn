// ************Task 1: Write a JavaScript program that uses a for...in loop to iterate over the properties of an object 
// and print both the property names and their values.

const employee={
    name:"Mayuri",
    city:"Pune",
    pincode:"411014",
    isMarried:false
}
console.log("After iterating the object :");

for (const index in employee) {
    
    
    console.log( ` ${index} : ${employee[index]}`);
    
    
}


// ############Task 2: Create a function that takes an object as an argument and returns the number of enumerable properties it has.

function demo(employee) {
    
}
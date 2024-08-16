let professor={
    firstName:"Albus",
    LastName:"Dumbledore",
    age: 115,
    work: "Hogwarts Headmaster",
    Nationality:"British",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        adress:"Hogwarts",
        certificates:['Hacker Rank Particiation','Certificate in IFE course','Certificate in Adv Computing']
    }
}
console.log("Object having following key-value pairs:",professor);
console.log("===========================================================================================================================================");

professor.totalExperience="14 yrs";
console.log("After adding new value in object :",professor);
console.log("===========================================================================================================================================");

professor.age=150;
console.log("After Updating age :",professor);
console.log("===========================================================================================================================================");

professor.degrees.certificates.splice(2,0,'Oracle Certified');
console.log("After Adding new certification :",professor);
console.log("===========================================================================================================================================");

var lastelement=professor.degrees.certificates[professor.degrees.certificates.length-1];
console.log("Calculating last element of array : ",lastelement);

console.log("==========================================================================================================================================");

for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}, ${element}`);
    }
}
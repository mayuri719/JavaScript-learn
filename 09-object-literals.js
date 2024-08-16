let person ={
    firstName:"Mayuri",
    lastName:"Hunge",
    age:24,
    isMarried:true,
    skills:["HTML","CSS","JS"],
    marks :{
        maths:80,
        physics:70,
        english:60,
        chemistry:80
    }
}
console.log(person);
const fName=person.firstName;
console.log(fName);

const perage=person.age;
console.log(perage);


const personSkills=person.skills;
console.log(personSkills);

person.skills.push("Git & GitHub");
console.log(person.skills);

// update the values 
person.age=30;
console.log(person.age);

person.country="India";
console.log(person);


console.log(`======== Add new property  ======= `);
person.country = "India";

console.log(`======== Traversing ============`);
for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(`${key}, ${element}`);
    }
}

//deleting the object key nd pair 

delete person.isMarried;
console.log(person);


console.log(`======== Method in the object ======= `);
let employee = {
    fullName: "Elon Musk",
    age: 55,
    city: "LA",
    country: "USA",
    details:function(){
       console.log(`Full Name: ${this.fullName}, City: ${this.city}, Country: ${this.country}`);   
    }
}

employee.details();

let emp = {
    fullName: "Elon Musk",
    age: 55,
    city: "LA",
    country: "USA"
}

const entries = Object.entries(emp);
console.log(entries);

console.log(entries[0][0]);
console.log(entries[2][1]);
console.log(entries[1][0]);
console.log(entries[1][1]);
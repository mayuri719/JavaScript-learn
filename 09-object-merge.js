const emp = {
    firstName: "Jenny",
    lastName: " Gates",
    age: 56
}
// emp = {
//    city: "LA"    here we cant chnage it because its constant 
// }
emp.age = 80;
console.log(emp);

Object.freeze(emp);
emp.firstName="Elon";
console.log(emp);

// Imp questions will ask 
console.log('======== Object cloning or merging ===========');
const student = {
    firstName: "Jenny",
    lastName: " Gates",
    age: 56
}
const clonedStudent = Object.assign({}, student);
console.log(clonedStudent);

const clonedObj = {...student};
console.log(clonedObj);
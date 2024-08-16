const fruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("Given Array is:",fruits);
console.log("---------------------------------------------------");
let que1= fruits[0];
let q= fruits[fruits.length-1];
console.log(`first and last element in array are : ${que1} and ${q}`);

console.log("---------------------------------------------------");
fruits.unshift("Papaya");
console.log("Inserting element at begining of array :",fruits);

console.log("---------------------------------------------------");
fruits.splice(4)
console.log("deleting an Mango element from array :",fruits);

console.log("---------------------------------------------------");
fruits.push("Pineapple");
console.log("After inserting new element at the end :",fruits);

// here need to ask question regarding ques5 variable.
console.log("---------------------------------------------------");
const fruits2=["Banana","Orange","Apple","Mango","Water Melon"];
const que5=fruits2.splice(4,0,"Dragon Fruit");
console.log(fruits2);

console.log("---------------------------------------------------");
const fruits3=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("Original array is :",fruits3);

fruits3.splice(1,1,"Kiwi");// It indicates that replacing index[1] element by deleting previous element adding new element as a Kiwi 
console.log("After replacing an orange element with kiwi :",fruits3);


console.log("---------------------------------------------------");
console.log("Original array is :",fruits3);
let que7=fruits3.slice(1,4);
console.log(que7);

console.log("---------------------------------------------------");
const fruits4=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("Original array is :",fruits4);

const calIndex= fruits4.length-3;
const LastThreeElements = fruits4.slice(calIndex);
console.log(LastThreeElements);



const fruits5=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits5.length);
const op= fruits5.slice(2);
console.log(op);

console.log(`==== Reverse the array=======`);
const array = ["Jenny", "Elon", "Stew", "Bill"];
console.log(array);
const reverseArray = array.reverse();
console.log(reverseArray);

console.log(`====== Sorting array of names in ascending order ======`);
const arrayOne = ["Jenny", "Elon", "Stew", "Bill"];
console.log(arrayOne);
const arrayTwo = arrayOne.sort();
console.log(arrayTwo);

console.log(`====== Sorting array of names in descending order ======`);
const arrayThree = arrayTwo.reverse();
console.log(arrayThree);


console.log(`==== Array of numbers ===`);
const arrayFour = [10, 2, 900, 30, 4, 7];
console.log(arrayFour);
console.log(`==== Sorting array of numbers in ascending order ====== `);
const arrayFive = arrayFour.sort();
console.log(arrayFive);

console.log(`Writing our custom logic for sort() method `);
const arraySix = arrayFour.sort( (n1, n2)=>{
    return n1>n2 ? 1 : -1; 
});
console.log(arraySix);

console.log(`===================`);
const arraySeven = [10, 2, 900, 30, 4, 7];
console.log(arraySeven);
console.log(`Sorting array of numbers in descending order`);
console.log(`1. Way First: Sort the array using custom logic and reverse it`);

console.log(`2. Way Second: Modify sort() method custom logic`);
const arrayEight = arraySeven.sort( (n1, n2)=>{
    return n1>n2 ? -1 : 1; 
});
console.log(arrayEight);
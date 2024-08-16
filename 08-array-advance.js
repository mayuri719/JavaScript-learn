let array = [10, 20, 30, 20, 80];
console.log(array);
console.log(`Inserting element at the end of the array`);
array.push(40);
console.log(array);

console.log(`Inserting element at the beginning of the array`);
array.unshift(90)
console.log(array);


console.log(`Deleting element from the array`);
array.pop();
console.log(array);

console.log(`Deleting  starting element from the array`);
array.shift();
console.log(array);

let arraynum=[10,20,30,40,50];
console.log("Retrive / select the elemets :");
let arrayslice=arraynum.slice(3);// it will return array element STARTING FROM index 3
console.log(arrayslice); 

// it will return array element STARTING FROM index 1 and 
//  index 3 but it will not count the end index (i.e 3)

let arrayele=arraynum.slice(1,3);// it will return array element STARTING FROM index 1 and 
console.log(arrayele); 


//Different usecases of splice()-----1.delete the elemnts

// splice() method is used to eliminate those elements from array
// of given index 
console.log("original array =",arraynum);
let splice3=arraynum.splice(2);
console.log("array after spice=",splice3);

//2 case - 

console.log(`=========== splice() - To Insert the elements without replacing any element ===========`);
let listTwo = [10, 20, 30, 80, 40];
console.log(listTwo);
const newArray = listTwo.splice(2, 0, 444);
console.log(newArray);
console.log(listTwo);

console.log("=========================");

let listThree = [90, 66, 88, 30];
console.log(listThree);
const deletedElement = listThree.splice(1, 0, 11, 22, 33, 44)
console.log(deletedElement);
console.log(listThree);


console.log(`=========== splice() 3 - Insert an element by replacing or deleting array elements ===========`);
let listFour = [10, 20, 30, 80, 40];
console.log(listFour);
const deleteCount = listFour.splice(2, 1)
console.log(deleteCount);
console.log(listFour);
console.log(`===============`);
let listFive = [10, 20, 30, 80, 40];
console.log(listFive);
const countDelete = listFive.splice(2, 2, 88, 99, 66, 33, 11);
console.log(countDelete);
console.log(listFive);
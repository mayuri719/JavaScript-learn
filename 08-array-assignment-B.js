const array =[20,31,40,25,23,11,29,9,60,2,11];
console.log("Original array is :",array);

console.log("--------------------------------------------------------------");
const arraylen=array.length;
console.log("Total elements available :",arraylen);

let firstelement=array[0];
let lastelement= array[arraylen-1];
console.log(`first and last element in an array is : ${firstelement} and ${lastelement}`);

console.log("--------------------------------------------------------------");

let ThirdLastElement=array[arraylen-3];
console.log("Third last element is :",ThirdLastElement);

console.log("--------------------------------------------------------------");
const element=[];
for (let index = 0; index < array.length; index++) {
    if (array[index]%2 === 0) {
        element.push(array[index]);
  
    }
    
}
console.log("Even numbers fron an array is :",element);
console.log("--------------------------------------------------------------");

const oddarray=[];
for (let index = 0; index < array.length; index++) {
   if (array[index]%2 === 1) {
        oddarray.push(array[index]);
   }
    
}
console.log("Odd ekements from array is :",oddarray);

console.log("--------------------------------------------------------------");


 for (let i = 0; i< array.length; i++) {
    if (array[i]% 5 === 0) {
        console.log("multiple of 5 :",array[i]);
        
    }
 
}
console.log("--------------------------------------------------------------");
let checknum= 115;
let isAvailbale=false;
for (let index = 0; index < array.length; index++) {
  
    if(array[index]=== checknum)
    {
       isAvailbale=true;
        break;
    }
   
}
if (isAvailbale) {
    console.log(`${checknum} is available in array`);
    
}
else{
    console.log(`${checknum} is not available in array `);
    
}
console.log("--------------------------------------------------------------");

const array2 =[20,31,40,25,23,11,29,9,60,2,11];
console.log("Original array is :",array2);
 array2.splice(3,0,55,66);
console.log("inserting new elements at index3 :",array2);

console.log("--------------------------------------------------------------");

const array3 =[20,31,40,25,23,11,29,9,60,2,11];
console.log("Original array is :",array3);
array3.splice(4)
console.log("Deleting elements from index 4 in array :",array3);

console.log("--------------------------------------------------------------");
 

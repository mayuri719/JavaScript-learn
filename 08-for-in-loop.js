let array=[10,20,30,40,50];
for (const index in array) {
     
    console.log(array[index]);
        
}


// for-of-loop

let array2 = [10, 20, 30, 20, 80];
for (const element of array2) {
    console.log(element); 
}


let array3=[10,20,40,50,70,80];
console.log("original array:",array3);
let emptyarray=[];

for (const element of array3) {
   emptyarray.push(element);
    
}
console.log("new array",emptyarray);

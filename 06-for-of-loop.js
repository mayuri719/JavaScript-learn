//Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array using a for...of loop.

function forOfTest() {
    let index=0;
    const arr=[10,20,30,40,50];
    console.log(arr);
    for (const element of arr) {
        index = index + element;
    }
    return index;
}
 var result=forOfTest();
 console.log(result);
 

 //2.Create a function that takes an array of strings and concatenates them into a single string, 
 //with each original string separated by a space. Use a for...of loop to achieve this.


 function ArrayOfString (arrString) {
 let resultArray=[];
 for (const element of arrString) {
    resultArray.push(element);
 }
 return resultArray.join(" ");
 }
 var res=ArrayOfString(["Hello","Mayuri,","How","are","you"]);
 console.log(res);
 

 //3 .Write a function that takes an array of numbers and returns the maximum value in the array using a for...of loop.

 function maxValue(num) {
   let max=num[0];
   for (const element of num) {
     if (element > max) {
        max=element
     }
   }
   return max;
 }
  var res=maxValue([10,50,70,30,100,20,5]);
  console.log(res);
  


//   Create a function that takes an array of strings and a target string. 
//   The function should return the number of times the target string appears in the array. Use a for...of loop for this task.

function disp(arr,target) {
 let count=0;
 for (const element of arr) {
    if(element == target){
     count++;
    }
    
 }
 return count;
}
 var re=disp(["apple","banana","apple","mango","mango","orange"],"mango");
 console.log(re);
 

 
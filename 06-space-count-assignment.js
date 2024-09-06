// Write a function spaceCount( ), which should count the total number spaces that is
// available in the string. This function should accept the one argument and return the
// total number of spaces.
 
 
 

 function spaceCount(str) {
     return str.split(' ').length-1;
 }

console.log(spaceCount("Revision is the mother of success"));
console.log(spaceCount("JavaScript is the language of internet world"));
 

let str = "Banana";  // a - 3, n - 2
let finalOutput = {};
for (let index = 0; index < str.length; index++) {
    const element = str.charAt(index);
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        const char = str.charAt(j);
        if (char==element) {
            count++;     
        }
    }
    // console.log(element, count);
    if (count>1) {
        finalOutput[element] = count;
    }  
}
// console.log(finalOutput);
for (const key in finalOutput) {
    const element = finalOutput[key];
    console.log(`${key} - ${element}`);
    
}
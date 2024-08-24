// Write a function spaceCount( ), which should count the total number spaces that is
// available in the string. This function should accept the one argument and return the
// total number of spaces.
 
 
 

 function spaceCount(str) {
     return str.split(' ').length-1;
 }

console.log(spaceCount("Revision is the mother of success"));
console.log(spaceCount("JavaScript is the language of internet world"));
 

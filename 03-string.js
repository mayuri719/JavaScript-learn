var greet="Good Morning";
console.log("given string is :",greet);
var greetlength=greet.length;
console.log("Total length of character is :",greetlength);

console.log("================charAt methods examples=================");


// it is an inbuilt function which gives charater present at given index
 var characterAt=greet.charAt(0);
 console.log("Character at 0th index is :",characterAt);
 

var charpos=greet.charAt(5);
console.log("character at 5th index is:",charpos);

console.log("character at index 6 is :",greet.charAt(6));

// character at last index 
//here we done lenght-1 to find last index bcause index starts with 0
var lastchar=greet.charAt(greet.length-1);
console.log("character presen at last index is :",lastchar);

console.log("================ uppercase method examples=================");

var uppercaseString=greet.toUpperCase();
console.log("uppercase is :",uppercaseString);

console.log("================ lowercase method examples=================");

console.log("Lowercase is :",greet.toLowerCase());

console.log("================ contactination method examples=================");


var fname="Mayuri";
var lname=" Hunge";
var concatstring=fname.concat(lname);
console.log("concatinated tring is :",concatstring);

console.log("================ indexOF() method examples=================");

var result=greet.indexOf("M");
console.log("index of character M is :",result);


// it will return -1 because there is no character like z in string
var result=greet.indexOf("z");
console.log("index of character z is :",result);

console.log("================ replace() method examples=================");

var replacemetodexample=greet.replace("M","T");
console.log("After replacing the character :",replacemetodexample);

console.log("================ Trim() method example=================");
// This method will remove spaces before and after character
var Trimexample="   Saturday    ";
var beforeTrim=Trimexample.length;
console.log("Before trim string is :", beforeTrim);

var afterTrim=Trimexample.trim();
var afterrimLength= afterTrim.length;
console.log(afterTrim);
console.log("After trim string is :",afterrimLength);

console.log("================ includes() method example=================");
//this method return true or false based on the charcatres are present in string or not 
var includestring=greet.includes("tor");
console.log(includestring);

console.log("================ slice() method example=================");

var slicestring=greet.slice(3,11);
console.log("After using slice method:",slicestring);
//it will trurn the slice from 5 th index. 
var slicestring=greet.slice(5);
console.log("After using slice method:",slicestring);

console.log("================ split() method example=================");
var splitedstring=greet.split(" ");
console.log("splited string is :",splitedstring);
console.log("Total number of words:",splitedstring.length);


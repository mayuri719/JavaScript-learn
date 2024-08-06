function greaterNumber(num1, num2) {
    console.log("Given numbers are :", num1, num2);
    var res = num1 >= num2 ? num1 : num2 //ternary operator 
    console.log("Greater number is :", res);



}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("-------------------------------------------------");


function isEvenOrOdd(num) {

var res= num%2==0;
return res;
    
}
 var result=isEvenOrOdd(29);
 var result2=isEvenOrOdd(44);
 var result3=isEvenOrOdd(0);
 var result4=isEvenOrOdd(101);
 

 console.log("is 29 even ? :",result);
 console.log("is 44 even ? :",result2);
 console.log("is 0 even ? :",result3);
 console.log("is 101 even ? :",result4);
 
console.log("-------------------------------------------------");


function wordLength(str) {
 var len1=str.length;
 console.log("length is :",len1);

var output=len1%2==0 ? "EVEN" : "ODD";
return output;
 
    
}
 var op1= wordLength("JavaScript");
 console.log("IS first str is even/odd :",op1);
 
var op2=wordLength("developer");
console.log("IS second str is even/odd :",op2);


var op3=wordLength("Google");
console.log("IS Third str is even/odd :",op3);

 
 

 


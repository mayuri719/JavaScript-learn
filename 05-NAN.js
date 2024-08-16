var n1 = 0;
var n2 = 0;
var result = n1 / n2;
console.log("Dividation is :", result);//bcoz its an invali format


console.log("======Use Cases of + ==========================");


var s1 = "Hello";   //concatination
var s2 = "Good Morning";
console.log(`Concatination : ${s1 + s2}`);

var n1 = "50"; // Conversion
var result = +n1;
console.log(`Conversion  is ${result} and  type is ${typeof result}`);

var n5;
var res = +n5;
console.log(`Conversion  is ${res} , type is ${typeof res}`);

console.log("========== Implicit Conversion================");

console.log("Implicit coversion:", '5' + 2); // Implicit conversion
//it will gives output as a 11 bcoz it covert true as a value 1 and addit to 10
console.log("Implicit coversion:", 10 + true); // Implicit conversion
console.log("Implicit coversion:", 10 + false); // 10+0=10,false value =0


console.log("========== Explicit Conversion================");

var n1 = "10";
console.log("value fo n1 :", n1, typeof n1);

var res = +n1;
var res = Number(n1);
console.log("Explicit Conversion :", res, typeof res);

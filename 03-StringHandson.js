function stringHandOn() {
    var str="   Hey you are doing good, keep it up   ";
  console.log("Given String is :",str);
  var orginalLength=str.length;
  console.log("Length of sting is :",orginalLength);
 
  console.log("-----------------------------------------------------------");
  
  var trimedString=str.trim();
  var trimmedlength=trimedString.length;
  console.log(`After removing space : ${str.trim()} 
Updated length is : ${trimmedlength}`);
var removedSpace=orginalLength-trimmedlength;
console.log("Removed Space count is :",removedSpace);

console.log("-----------------------------------------------------------");

var firstchar=trimedString.charAt(0);
var lastchar=trimedString.charAt(32);
console.log(`First character of String is : ${firstchar}
Last characer of String is : ${lastchar}`);

console.log("-----------------------------------------------------------");

var arrayWords=trimedString.split(/\s+/);
console.log("Array is :",arrayWords);
var counOftwords=arrayWords.length;
console.log("Total words in string after trim :",counOftwords);

console.log("-----------------------------------------------------------");

var indexword=trimedString.indexOf("good");
console.log("Position of given word is :",indexword);

console.log("-----------------------------------------------------------");

var substr= trimedString.substring(22);
console.log("Substring is :",substr);

var endword = trimedString.endsWith("up");
console.log("Is string ends with word up?:",endword);

var startword=trimedString.startsWith("Hey");
console.log("Is string strats with word Hey?",startword);










  
  
}
stringHandOn();

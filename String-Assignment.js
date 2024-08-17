//1.  WAP to find the length or total number of characters of the strings
console.log("==================Q.1 WAP to find the length or total number of characters of the strings================================");
console.log("                                                                                                                ");

const str1 = "Hello World!";
const str2 ="Javascript is the language of Internet";

const strlen_1 = str1.length;
console.log("length of string 1 is :",strlen_1);

const strlen_2=str2.length;
console.log("length od string 2 is :",strlen_2);
console.log("                                                                                                                ");

console.log("==================Q.2 WAP to print or log the last character of the given strings================================");

//2 . WAP to print or log the last character of the given strings
console.log("                                                                                                                ");

 const str_1 = "Hey, my friend, Programming Language";
 const str_2 = "I am learning logical programs";
 const str_3 = "Angular";

let str1_length=str_1.length;
let str2_length= str_2.length;
let str3_length=str_3.length;

// console.log("length of first string  is :",str1_length);
// console.log("length of second string  is :",str2_length);
// console.log("length of third string  is :",str3_length);

// console.log("-----------------------------------------------------------------------------------------------------------------");


let str1_last=str_1[str_1.length-1];
console.log("last character of string 1 is :",str1_last);

let str2_last=str2[str2.length-1];
console.log("last character of string 2 is :",str2_last);

let str3_last=str_3[str_3.length-1];
console.log("last character of string 3 is :",str3_last);

console.log("                                                                                                                ");

console.log("==================Q.3 WAP to print or log the first character of the given strings================================");
console.log("                                                                                                                ");

const string1 = "React";
const string2= "Elon Musk";
const string3 = "Apple founder is Stew Job";

function printcharacter(string) {
 return  string.charAt(string[0]);    
}

console.log("First character of string 1 is :",printcharacter(string1));
console.log("First character of string 2 is :",printcharacter(string2));
console.log("First character of string 3 is  :",printcharacter(string3));

console.log("                                                                                                                ");


console.log("==================Q.4 WAP to check whether given strings contains word ‘UI’ or not? ================================");
console.log("                                                                                                                ");

const st1 = "React - UI Developer";
const st2 = "UI Developer";
const st3= "Front end and backend technologies";

function isAvailable(st) {
    return st.includes('UI');
}
console.log("is UI character include in str1 or not : ",isAvailable(st1));
console.log("is UI character include in str2 or not : ",isAvailable(st2));
console.log("is UI character include in str3 or not : ",isAvailable(st3));


console.log("                                                                                                                ");
console.log("==================Q.5 WAP to How do you split a string into an array of substrings? ================================");
console.log("                                                                                                                ");

const s1 = "apple,orange,banana";
const s2 = "Stew,Bill,Jenny,Elon";

function demo(sto,test) {
    return sto.split(test)
}
console.log(demo(s1));
console.log(demo(s2));

console.log("                                                                                                                ");
console.log("==================Q.6 Reverse String: Recommended to use define the functions ================================");
console.log("                                                                                                                ");



const m1 = "Software";
const m2 = "UI Developer";

function Reversedemo(stri) {
   return stri.split('').reverse().join('');
}
console.log("Reverse string is :",Reversedemo(m1));
console.log("Reverse string is :",Reversedemo(m2));




 
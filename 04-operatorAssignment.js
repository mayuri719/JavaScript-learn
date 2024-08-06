function squareOfWordLength(st1, st2, st3) {
    var str1 = st1.split(/\s+/);
    console.log("String 1 :", st1);
    var len1 = str1.length;
    console.log("Lenght of String 1 is :", len1);
    var res = len1 * len1;
    console.log("Square of lenght of string 1 :", res);
 
    console.log("---------------------------------------");
    

    var splitedst2 = st2.split(/\s+/);
    console.log("String 2 :", st2);
    var len2 = splitedst2.length;
    console.log("Length of String 2 is:", len2);
    var sq2 = len2 * len2;
    console.log("Square of lenght of  string 2 :", sq2);

    console.log("---------------------------------------");

    var splitedst3 = st3.split(/\s+/);
    console.log("String 3 :", st3);
    var len3 = splitedst3.length;
    console.log("Length of String 3 is:", len3);
    var sq3 = len3 * len3;
    console.log("Square of lenght of  string 3 :", sq3);



}
squareOfWordLength("Javascript", "Google Chrome", "Web Developer Smart");

//2nd function

function Demo(str) {
 console.log("Given String is :",str);
 var len=str.length;
 console.log("------------------------------------------------");
 
 console.log("Length of String is :",len);
 var strsplit=str.split(/\s+/);
 var splitlen=strsplit.length;
 console.log("Length of Words available is :",splitlen);

 console.log("------------------------------------------------");

 var dividestr=len/splitlen;
 console.log("After division :",dividestr);
 var multiplystr=len*splitlen;
 console.log("After multiplication :",multiplystr);
}
Demo("I am Angular Developer");
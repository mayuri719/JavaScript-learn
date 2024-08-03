// console.log("================1.Functions with no argument=================");

// function demo() {
//   console.log("Hii,Mayuri here!");
     
// }

// function test() {
//     console.log("Good Morning");
    
// }
// test();
// demo();

// console.log("================2.Functions with  argument=================");

// function personalDetails( Fname,Lname,clgName) {
//     console.log(`personal details are : 
//     first name is: ${Fname} 
//     Last name is: ${Lname} 
//     Collage name is : ${clgName}`);
    
// }
//  personalDetails("Mayuri","Hunge","SVERI");

//  console.log("================3.Addition Functions=================");

//  function addThreeValues( a,b,c) {
//     console.log("Given values are :",a,b,c);
//     var add=a+b+c;
//     console.log("Addition are :",add);
    
//  }
//  addThreeValues(10.23,600,40);
//  addThreeValues("Hello","Good","Morning");


console.log("=========================Bank Details=====================");


 function bankDetails(bankName,acc_num,location,pinCode)
{

 console.log(`Bank Details are :
            Bank Name is : ${bankName}
            Account Number is : ${acc_num}
            locaion is : ${location}
            Pin-Code is : ${pinCode}  
    
    `);
 

}
bankDetails(`CITI Bank`,`3456782345`,`Pune`,`431202`);
bankDetails(`Axis Bank`,`7856782345`,`Mumbai`,`441202`);
bankDetails(`HDFC Bank`,`8956782345`,`Pune`,`631202`,`Open`);

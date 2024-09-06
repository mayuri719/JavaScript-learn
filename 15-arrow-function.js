// normal Function with no parameter and return type 

function display() {
    console.log("Good Evening!!");
    
}
display();

//normal function with parameter and return type
function display(n1,n2) {
    console.log("Good Evening!!");
    return n1*n2;
}
var result= display(4,4);
console.log("Multiplication is :",result);

//function expression with paramter and return type 
 let Store =function demo(str) {
    return str;
}
let res=Store("Mayuri Here !!!!");
console.log(`String is  : ${res}`);



// Arrow Function :


// Arrow Function with no parameter and no return type
 let ArrowFunTest=()=> {
   console.log("Arrow Function Test is Completed");
   
}
ArrowFunTest();

// Arrow Function with parameter and no retun type
let Show=(n1,n2)=>{
  var sum=n1+n2;
  console.log(`Sum is : ${sum}`);
  
}
Show(10,20);


// Arrow Function with Parameter and retun Type 
let disp=(s1,s2)=>
{
    return s1+s2;
}
 var Op= disp("Hii","Mayuri");
console.log(`Concatination of two string is : ${Op}`);



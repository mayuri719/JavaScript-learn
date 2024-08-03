console.log("======= Function with no arguments===================");

function show() {
    console.log("Hii Mayuri");
}
show(); // function call.....

console.log("======= Function with arguments===================");
function multiply(a,b) {
    console.log("given numbers :",a,b);
    var mul=a*b;
    console.log("multipliction is :",mul);
}
multiply(3,4);
multiply(4);// here we not defined the second value so it will take undefined and multiplicatio is NaN(not a number)

console.log("======= Function with return statment===================");

// whenever we retun any function we have to sore that function into the variable

function demo() {

    console.log("before return stament");
    return "Good Morning!";
    console.log("After return stament"); // it will unreachable code (dead code)
    
}
  var res=demo();
  console.log(res);

  function square(num) {
    var res=num*num;
    return res;
  }
  var result= square(5);
  console.log(result);


  function values(a,b,c)
 {
    console.log("Given values are : ",a,b,c);
  }
  values(1,"Mayuri",true,23);
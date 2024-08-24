// example of clouser
var global_variable = 1000;
function outerFunction() {
    let outer_variable = 500;
    //  console.log("Outer Variable is :",outer_variable);
    //  console.log("Global variab;e is :",global_variable);
    let inner = function () {
        let inner_variable = 200;
        console.log("Inner Variable is :", inner_variable);
        console.log("Outer Variable is :", outer_variable);
        console.log("Global variab;e is :", global_variable);

    }
    return inner;

}
// let result= outerFunction();
// console.log(result);
// result();
outerFunction()(); // This is an alternate way to call both the functions.

console.log("=============================Q.1==================================");
console.log("                                                                  ");

let ArrowFun = () => {
    console.log("Good Evning, Today is Monday !");
}
ArrowFun();
console.log("                                                                  ");
console.log("=============================Q.2==================================");
let Show = (a, b, c) => {
    var mul = a * b * c;
    console.log(`Multiplication Of 3 Numbers is :${mul}`);
}
Show(5, 5, 2);
Show(10, 4, 1);

console.log("                                                                  ");
console.log("=============================Q.3==================================");

let AdditionFun = (a,b,c,d,e) => {
  return a+b+c+d+e;
}
let disp =AdditionFun(100,100,200,349,756);
console.log(`Addition of given values are : ${disp}`);
 let run=AdditionFun("I Am ","learning ","ES6 ","feature ","in depth");
console.log(run);

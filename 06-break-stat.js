// for (let index = 0; index < 11; index++) {
//     console.log(index);
//     if (index==6) {
//         break;
//     }
// }

// for (let index = 0; index < 11; index++) {
//     console.log(index);
//     if (index==6) {
//         break;
//     }
// }

// console.log("========= continue ==================");
// for (let index = 0; index < 5; index++) {
//     console.log(index);
//     if (index==2) {
//         continue;
//     }
//     console.log("=========");
// }


var word = "Developer";
var count = 0;
for (let index = 0; index <= word.length; index++) {
    var char = word.charAt(index);
    if (char=='e') {
        count++; 
    }
}
console.log(`Count of char e is : ${count}`);


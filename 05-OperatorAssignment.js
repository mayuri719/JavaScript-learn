function checkEligibility(gradScore, hscScore, sscScore, candidateName) {
    var result = gradScore >= 70 || hscScore >= 80 || sscScore > 90
        ? `Congrats ${candidateName} You are eligible for TCS interview`
        : ` Unfortunately ${candidateName} you are not eligible for interview`
    return result;


}
var res1 = checkEligibility(80, 86, 90, "Mayuri");
console.log(`Given Score is 80,86,90: ${res1}`);

var res2 = checkEligibility(70, 65, 55, "Rita");
console.log(`Given Score is 70,65,55: ${res2}`);


var res3 = checkEligibility(60, 79, 88, "Tina");
console.log(`Given Score is 60,79,88: ${res3}`);


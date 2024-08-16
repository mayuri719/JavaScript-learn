var votingChecker = function(age, person){
    if (age>=18) {
        console.log(`Hey ${person} your age is ${age} and you are eligible for vote`);
    } else {
        console.log(`Unfortunately , Hey ${person} your age is ${age} and you are not eligible for vote`);
    }
}
votingChecker(21, "Jenny");
votingChecker(17, "Elon");

var voteEligibilty=function(age){
    if(age==0 || age < 0 || age>130){
        console.log("Invalid age",age);
    }
    else {
        console.log("valid age ",age);
        if (age>=18) {
            console.log("Eligible for voting");
            
        } else {
            console.log("Not eligible for voting");
            
        }
    }
}
voteEligibilty(45);
voteEligibilty(17);
voteEligibilty(-10);
voteEligibilty(null);
voteEligibilty(200);
voteEligibilty(0);
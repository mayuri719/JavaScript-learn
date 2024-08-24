const array = [3, 9, 7, 6, 19, 29, 53];
function isPrime(num) {
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            return false;
        }
    }
    return true;
}

let count = 0;
for (const element of array) {
    let result = isPrime(element)
    console.log(result);

    if (result == true) {
        count++;
    }
}
console.log(`count is : ${count}`);
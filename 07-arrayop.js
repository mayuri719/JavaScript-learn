var arrayList=["jenny","Elon","Steve","mark"];
console.log(arrayList);
console.log(arrayList[2]);

arrayList[3]="mayuri"; // update array value
console.log(arrayList);

console.log("===========Traversing an Array=================");


for (let index = 0; index < arrayList.length; index++) {
    const element = arrayList[index];
    console.log(element);
    
}

console.log("=========== Reverse Traversing an Array=================");

for (let index = arrayList.length-1; index >=0; index--) {
    const element = arrayList[index];
    console.log(element);
    
}

console.log("=========== Only Even Traversing an Array=================");
for (let index = 0; index < arrayList.length; index++) {
    if(index%2==0){
        const element = arrayList[index];
        console.log(element);
    }
}


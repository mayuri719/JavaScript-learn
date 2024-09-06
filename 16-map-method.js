const array=[2,4,5,6,7,8];
const newarray = array.map((element)=>{
    return element + 10; 
})
console.log(newarray);

array.forEach((element)=>{
 if(element%2==0)
    console.log(`even number ${element}`);
    
});


const arrayNum = [10, 21, 30, 43, 50 ];
console.log(arrayNum);
const arraySquare = arrayNum.map((element)=>{
    return element * element;
});
console.log(arraySquare);
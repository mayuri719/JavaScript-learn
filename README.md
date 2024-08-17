# JavaScript-learn

************ Slice() method : ******************

The slice method is zero-based, so the index startIndex includes the element at that position and goes to the end of the array.
This approach is effective when you want to avoid modifying the original array and only need to work with a subset of its elements.

************ splice() Method :********************

The splice() method in JavaScript is used to change the contents of an array by removing, replacing, or adding elements. It's a versatile method that directly modifies the array 

There are three cases for splice() method 
[i] Eleminate/ deleting element fron an array of given position.
[ii] Inserting an element in an array without replacing or deleting an element.
[iii] Inserting an element in an array by replacing or deleting an element. 

IMP ==========> The original array is modified in place; splice() does not create a new array.

Spread Operator ()

In case of spread the element we use spread operator 
there are different cases of spread operator
i] if we wnt to create a new array from existing array we use spread op.

ii] concat the array using  spread operator


object :

if we declare the object as a constant then we cant make the same object . but we can chnage or add any new key-values pair to that object.

object.freeze() :

In this method we can't chnage the key-values pair of object .

object.assign() :

if we want to clone the object we can use assign metod 
or we want to copy one object into another object we can use assign method .

suppose if we have a three objects emp1 , emp2, emp3 in this case if we want to copy emp 3 content 
// 3. Arrays & Objects (map, filter, reduce, destructuring)
// 📌 Concepts
// map: Transform each element.
// filter: Keep elements that match condition.
// reduce: Accumulate values.
// Destructuring: Extract values from objects/arrays easily.
//const number=[5,6,3,2,8,9];
//map
//console.log(number.map((a)=>a*2))
//const newNum=number.map((a)=>a*2);
//console.log(newNum);
// const mapFun=(a)=>a*2;
// const newNum=number.map(mapFun);
// const newNum=number.map((a)=>{
//     //console.log(a)
//     return a*2
// });

// console.log(newNum);

//filter
// const newNum=number.filter((a)=>{
//     
//     return a>4
// });

// console.log(newNum);

//reduce
// const newNum=number.reduce((acc,curr)=>{
   
//     return acc+curr
// },0);

// console.log(newNum);

//forEach
//it's only iritates does not return;
// number.forEach((a)=>{
//    console.log(a)
    
// });

//Destructuring:Array
// const number=[5,6,3,2,8,9];
// const [a,b,c,d,e,f]=number;
// console.log(a,b,c,d,e,f)

//Destructuring:Object
// const obj={
//     firstName:'Pankaj',
//     lastName:'Shree',
//     year:2025
// }

// const {firstName,lastName,year}=obj;
// console.log(firstName,lastName,year)
// const {firstName:a,lastName:b,year:c}=obj;
// console.log(a,b,c)

// 👉 Practice:

// Find the maximum number using reduce.
// const number=[2,6,3,8,9,5,2,3,20];
// const maxNum=number.reduce((acc,curr)=>{
//     if(acc<curr){
//        return curr;
//     }
//    return acc;
// },0)
// console.log(maxNum)
// Extract only names from an array of user objects.
// const users = [
//   { name: "Pankaj", age: 28 },
//   { name: "Shree", age: 25 },
//   { name: "Raj", age: 30 }
// ];
// const usersName=users.map((user)=>user.name);
// console.log(usersName)
// const usersAge=users.map((user)=>user.age);
// console.log(usersAge)

// const arr = [2,4,6,8,7,8,9];
// const [a, b, ...c] = arr;
// ...c here is called the rest operator (rest element).
// console.log(a, b, c);
// 👉 It collects the remaining elements of the array into a new array.

// The spread operator (...) is used when you expand or unpack elements.
//  (e.g., passing array items as function arguments, or copying/merging arrays).
//const arr = [1, 2, 3];
//console.log(...arr); // 1 2 3
//const newArr = [...arr, 4, 5];
//console.log(newArr); // [1, 2, 3, 4, 5]

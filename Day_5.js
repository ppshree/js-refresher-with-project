// 5. Closures & this keyword
// 📌 Concepts

// Closure: A function that remembers variables from its outer scope, even after outer function finishes.
// function outer(){
//     let count=0;
//     return function inner(){
//         count++;
//         return count
//     }
// }
// const counter=outer()
// console.log(counter())
// console.log(counter())
// console.log(counter())

// function outer(){
//     let count=0;
//      function inner(){
//         count++;
//         return count
//     }
//     return inner
// }
// const counter=outer()
// console.log(counter())
// console.log(counter())
// console.log(counter())

// this keyword: Refers to the object that is calling the function.
// const person={
//     name:'Pankaj',
//     greet:function(){
//         console.log('Hello'+ ' '+this.name)
//     }
// }
// person.greet()
// const person={
//     name:'Pankaj',
//     greet:()=>{
//         console.log('Hello'+ ' '+this.name)
//     }
// }
// person.greet()
// 👉 Practice:

// Create a closure that generates unique IDs.
// function GenUniqId(){
//     let counter=0
//     return function idGenerator()
//     {
//         counter++
//         return `id-${counter}`
//     }

// }
// const ids=GenUniqId();
// console.log(ids())
// console.log(ids())
// console.log(ids())

// Test this inside a normal function vs arrow function.
// const person={
//     name:'Pankaj',
//     greet:function(){
//         console.log('Hello'+ ' '+this.name)
//     }
// }
// person.greet()
// const person={
//     name:'Pankaj',
//     greet:()=>{
//         console.log('Hello'+ ' '+this.name)
//     }
// }
// person.greet()
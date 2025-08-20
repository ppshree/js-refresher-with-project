// 2. Functions (arrow functions, default parameters)
// 📌 Concepts

// Normal function: Has its own this.

// Arrow function: Inherits this from surrounding context.

// Default parameters: Function arguments with default values.

//function declaration==>
// function greet(){
//     console.log('Welcome')
// }
// greet()

//function Expression
// const greet =function(){
//     console.log('Welcome')
// }
// greet()

//function expression with return
// const greet =function(){

//     return console.log('Welcome')
// }
// greet()

//Arrow function
// const greet =()=>{
//     console.log('Welcome')
// }
// greet()

//Arrow function with return
// const greet =()=>{

//     return console.log('Welcome')
// }
// greet()

//default parameters
// function add(a,b=0){
// console.log(a+b)
// }
//add(1,2);
//add(1);

// 👉 Practice:

// Write an arrow function to calculate factorial.
//5!=5*4*3*2*1
// const calFac=(num)=>{
//     let factNum=1;
//     for(let i=num;i>0;i--){
//         factNum=factNum*i
//         //console.log(i,factNum)
//     }
//   return factNum
// }

// console.log(calFac(4));

// function factorial(n){
//     if(n==0 || n==1){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5))
// Use default parameters to create a greeting function.
// const greet=(a,b='Pankaj')=>{
//     console.log(a+' '+b)

// }
// greet('Hello')
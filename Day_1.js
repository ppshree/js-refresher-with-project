//console.log('PANKAJ');

// 📖 JavaScript Refresher – Study Material (1 Week)
// Day=1. Variables (let, const, scope)
// 📌 Concepts
// var → Function scoped (old way, avoid using).
// let → Block scoped, can be updated but not re-declared in the same scope.
// const → Block scoped, cannot be re-assigned (but objects/arrays inside can be mutated).
// Scope → Defines where variables are accessible.

// var firstName='Pankaj';
// var firstName='Shree';
// firstName='Pankaj-Shree';
// console.log(firstName);
//Redeclair and reasign both are possible in var.

//let firstName='Pankaj';
//let firstName='Shree';
//Syntax Error when redeclair.
//firstName='Pankaj-Shree';
//console.log(firstName);
//Redeclair not possible but reasign are possible in let.


//const PI_value=3.14;
//const PI_value=3.15;
//Syntax Error when redeclair.
//PI_value=3.15;
//Type Error when reasign.
//console.log(PI_value);
//Redeclair and reasign both are not possible in const.




// 👉 Practice:

// Try re-declaring a let variable.
// let firstName='Pankaj';
// let firstName='Shree';
// console.log(firstName);


// Create a constant object and update one of its properties.
// const obj={
//     firstName:'Pankaj',
//     lastName:'Shree',
//     currentYear:2025
// }
// obj.currentYear=2026
// obj.firstName='Pankaj Shree';
// console.log(obj.firstName);
// console.log(obj.currentYear)

//It will be update because it's a refrence of memory.
//cannot reasign the variable only change properties.

//create a function using all variables

// function testScope(){
//     if(true){
//         var x='I am var';
//         let y='I am let';
//         const z='I am const';
//     }
    //console.log(x);
    //console.log(y);
    //console.log(z);
    //reference Error with both let and const because block scope but var is working because functional scope;


//}
    //console.log(x);
    //console.log(y);
    //console.log(z);
    //reference Error with both var, let and const because not accessible ;
//testScope()
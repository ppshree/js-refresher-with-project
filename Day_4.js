//4. Promises & async/await
// 📌 Concepts

// Promise: Represents an async operation (pending → fulfilled/rejected).
//const promise=new Promise((resolve,reject)=>{
    // if(false){
    //     resolve('Data received');
    // }else{
    //     reject('Error')
    // }
//})
//console.log(promise) //pending
// promise
// .then(data=>console.log(data)) 
// .catch(err=>console.log(err))

// const fetchData=()=>{
//     return new Promise((resolve,reject)=>{
//         if(false){
//             resolve('Success')
//         }else{
//             reject('Somthing Wrong')
//         }
//     })

// }
// fetchData()
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

//const API='https://jsonplaceholder.typicode.com/posts';

//fetch(API).then(res=>res.json()).then(data=>console.log(data))
// const fetchData=()=>{
   
//     fetch(API).then(res=>{
//         if(!res.ok){
//             throw new Error('Network Ckeck...');
//         }
//         return res.json()
//     })
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))

// }
// fetchData()

// async/await: Cleaner syntax to handle promises.
const API='https://jsonplaceholder.typicode.com/posts';
// const fetchData= async ()=>{
//     try{
// const res=await fetch(API);
// const data=await res.json();

// console.log(data)

//     }
//     catch(err){
//         console.log(err)

//     }

// }

// async function fetchData(){
//     try{

//         const res=await fetch(API);
//         const data=await res.json();
//         console.log(data)
//     }
//     catch(err){console(err)

//     }

// }

// fetchData()
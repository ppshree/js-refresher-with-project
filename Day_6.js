// 6. Error Handling
// 📌 Concepts
// try…catch: Used to handle runtime errors.
// finally: Runs always, whether error occurs or not.
// throw: Create custom errors.
// try{
//     let num=5/0;
//     if(!isFinite(num)){
//         throw new Error('Division by Zero')
//     }
// }
// catch(err){
//     console.log('caught error:',err.message)
// }
// finally{
//     console.log("This runs no matter what.");
// }

// 👉 Practice:

// Write a function that checks if an input is a number, else throws an error.
//  let input=5;
//     console.log(typeof(input))
// try{
//     let input='pankaj';
//     console.log(typeof(input))
//     if(typeof(input)!='number'){
//         throw new Error('It is not a nnmber')

//     }
//     else{
//         console.log('Ahh it is NUMBER')
//     }
// }
// catch(err){
//     console.log(err.message)
// }


// Add error handling to your to-do list app.

// try{
//     let todos=[
//         {
//             id:1,task:'Learn React',done:false
//         },
//         {
//             id:2,task:'Learn DevOps',done:false
//         }
//     ]

//     function addTask(task){
//         if(!task || typeof task !=='string'){
//             throw new Error('Task must be non empty string')
//         }
//         const newTask={
//             id:todos.length+1,
//             task,
//             done:false
//         }
//         todos.push(newTask);
//         console.log('Task added:',newTask)
//     }
// function completeTask(id){
//     const task=todos.find(t=>t.id===id)
//     if(!task){
//           throw new Error(`Task with id ${id} not found`)
//     }
//     task.done=true;
//     console.log(`Task completed:`, task);
// }
//     function listTasks() {
//         console.log("Current To-Do List:");
//         todos.forEach(t => {
//             console.log(`${t.id}. ${t.task} [${t.done ? "✅ Done" : "❌ Pending"}]`);
//         });
//     }

// }
// catch(err){
//     console.log(err.message)

// }
   //listTasks();
    // addTask("Study DevOps");
    //completeTask(2);
    // listTasks();
    //addTask("")
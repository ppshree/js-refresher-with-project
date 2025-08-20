//console.log('Pankaj');
// 🛠️ Mini Project Day:7=>(Practice for Week 1)
// 👉 Build a To-Do List App in Vanilla JS
// Features:
// Add tasks
// Delete tasks
// Mark tasks as complete
// Store tasks in localStorage

//Without local storage
// const taskList = document.getElementById("taskList");
// const addBtn = document.getElementById("addBtn");
// const taskInput = document.getElementById("taskInput");

// addBtn.onclick=()=>{
//     const text=taskInput.value;
//     if(text){
//     const ListEle=document.createElement('li');
//     ListEle.textContent=text;
//     taskList.appendChild(ListEle);

//     const deleteBtn=document.createElement('button');
//     deleteBtn.textContent='X';
//     ListEle.appendChild(deleteBtn);

//     ListEle.onclick=()=>{
//         ListEle.classList.toggle('completed')
//     }

//     deleteBtn.onclick=()=>{
//         ListEle.remove()
//     }

//     taskInput.value='';

//     }

// }

//with local storage
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const ListEle = document.createElement("li");
    ListEle.textContent = task.text;

    if (task.completed) {
      ListEle.classList.add("completed");
    }
    ListEle.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    ListEle.appendChild(deleteBtn);
    taskList.appendChild(ListEle);
  });
}

addBtn.onclick = () => {
  const text = taskInput.value;
  if (text) {
    tasks.push({ text, copmleted: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
};
renderTasks();

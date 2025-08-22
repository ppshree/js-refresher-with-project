# 📖 JavaScript Refresher – Study Material (1 Week)

This repository contains a **1-week JavaScript refresher plan** with **concepts, examples, and practice exercises**.  
It’s designed to strengthen your **JavaScript fundamentals** before diving into frameworks like React or Node.js.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/ppshree/js-refresher-with-project.git
```
```bash
cd js-refresher-with-project
```
2. Open in VS Code

📂 Topics Covered
1. Variables (let, const, scope)
var → function scoped (avoid in modern JS).

let → block scoped, re-assignable.

const → block scoped, not re-assignable (but objects/arrays can mutate).

Scope defines variable visibility.

✅ Example:

```bash
function testScope() {
  if (true) {
    var x = "I am var";   // function-scoped
    let y = "I am let";   // block-scoped
    const z = "I am const"; // block-scoped
  }
  console.log(x); // works
  // console.log(y); ❌ Error
  // console.log(z); ❌ Error
}
testScope(); 
```
👉 Practice:

Try re-declaring a let variable.

Create a constant object and update one property.

2. Functions (Arrow, Default Params)
Normal function → has its own this.

Arrow function → inherits this from parent.

Default params → assign default values.

✅ Example:

```bash
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet());        // Hello, Guest
console.log(greet("Pankaj")); // Hello, Pankaj

const add = (a, b = 0) => a + b;
console.log(add(5));   // 5
console.log(add(5,10)); // 15
```
👉 Practice:

Write an arrow function to calculate factorial.

Use default params to build a greeting function.

3. Arrays & Objects (map, filter, reduce, destructuring)
map → transforms elements.

filter → keeps elements matching condition.

reduce → accumulates values.

destructuring → extracts values.

✅ Example:

```bash
const numbers = [1,2,3,4,5];

const doubled = numbers.map(n => n * 2);      // [2,4,6,8,10]
const evens = numbers.filter(n => n % 2 === 0); // [2,4]
const sum = numbers.reduce((acc,cur) => acc + cur, 0); // 15

const user = { name: "Pankaj", role: "SDE" };
const { name, role } = user;

const [first, second] = numbers;
```
👉 Practice:

Find max number using reduce.

Extract only names from array of users.

4. Promises & async/await
Promise → async operation (pending → fulfilled/rejected).

async/await → cleaner promise handling.

✅ Example:

```bash
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

fetchData().then(data => console.log(data));

async function getData() {
  const data = await fetchData();
  console.log(data);
}
getData();
```
👉 Practice:

Fetch data from API: https://jsonplaceholder.typicode.com/posts

Handle errors with try/catch.

5. Closures & this keyword
Closure → function remembers outer variables.

this → depends on how function is called.

✅ Example:

```bash
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```
```bash
const person = {
  name: "Pankaj",
  greet() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Hello, Pankaj
```
👉 Practice:

Build a closure that generates unique IDs.

Compare this inside normal vs arrow function.

6. Error Handling
try…catch → handle runtime errors.

finally → always runs.

throw → custom errors.

✅ Example:

```bash
try {
  let num = 5 / 0;
  if (!isFinite(num)) throw new Error("Division by zero!");
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("Always runs.");
}
```
👉 Practice:

Function that checks if input is a number, else throws error.

Add error handling in to-do app.

🛠️ Mini Project (Week 1)
👉 To-Do List App in Vanilla JS

Add tasks

Delete tasks

Mark tasks complete

Store tasks in localStorage

📅 Daily Practice Plan
Day 1 → Variables & Scope

Day 2 → Functions (normal, arrow, default)

Day 3 → Arrays & Objects (map, filter, reduce)

Day 4 → Promises & async/await

Day 5 → Closures & this keyword

Day 6 → Error Handling

Day 7 → Build To-Do List App

📌 Outcomes
By the end of this refresher:

You’ll have strong fundamentals of JavaScript.

You’ll be comfortable with async code, closures, and array methods.

You’ll be ready to build small projects and move into frameworks.
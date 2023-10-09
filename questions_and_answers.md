<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>B: `ReferenceError: greetign is not defined`</b></summary>
<p>

#### Answer: ?

<i>In the code, you declared a variable called greeting, but it is mistakenly assigned an empty object to a variable called greetign (with a typo). Since greetign is not declared using let, var, or const, it will result in a ReferenceError because it is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>C:`"12"`</b></summary>
<p>

#### Answer: ?

<i>In the given code, the sum function takes two parameters, a and b, and tries to add them together using the + operator. When you call sum(1, "2");, the first argument 1 is a number, and the second argument "2" is a string.

JavaScript will perform type coercion in this case and convert the number 1 into a string and then concatenate the two strings. So, "1" (from the number 1) and "2" (from the string "2") are concatenated together, resulting in the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>In the code, the info object's favoriteFood property is initially set to the first element of the food array, which is "🍕".

Later in the code, you update the info.favoriteFood property to "🍝". This change does not affect the food array in any way. The food array remains unchanged, and when you log it to the console, it will still be ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>In the code, the sayHi function expects an argument name, but when you call sayHi() in the console.log statement, you don't provide any argument. As a result, the name parameter inside the function is undefined, and the template string "Hi there, ${name}" is evaluated as "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b> C: 3</b></summary>
<p>

#### Answer: ?

<i>In the code, the forEach method is used to iterate through the nums array, and for each element, the callback function (num) => {...} is called. Inside the callback function, there's an if statement that checks if num is a truthy value (non-zero in this case).

Here's what happens during the iteration:

num is 0 (falsy), so the if condition is not satisfied, and nothing happens.
num is 1 (truthy), so the if condition is satisfied, and count is incremented by 1.
num is 2 (truthy), so the if condition is satisfied again, and count is incremented by 1.
num is 3 (truthy), so the if condition is satisfied once more, and count is incremented by 1.
As a result, count becomes 3, and that's what gets logged to the console.</i>

</p>
</details>

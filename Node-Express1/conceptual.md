### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Async function and the await keyword. oe using the .then() and .catch() promise methods
- What is a Promise?
A promise is code that needs time to get a result. 
- What are the differences between an async function and a regular function?
An async functin can use the await keyword and wait for a promise to be resolved before continuing
- What is the difference between Node.js and Express.js?
Node.js is javascript that runs on the server side, Express.js is a framework for Node to help with routing
- What is the error-first callback pattern?
Code that checks for an error first, then runs code.
- What is middleware?
Middleware runs inbetween the response and request of your routes
- What does the `next` function do?
next tells your application to move to the next available route
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
The constant matt, and joel should be named mmmaaatttttt, and joelburton to be more specific. The jquery request should all be done in the same line for organization and performance. Maybe the function should return a json obj insead of an array of objs. 
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

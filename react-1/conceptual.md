### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JS library for building UIs. React allows you to create reactive elements wihthin a webpage without having to reload the page. React can be used anywhere the user need to interactive with elements, for example, adding items to a shopping cart. 

- What is Babel?
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines

- What is JSX?
JSX allows you to write html inside of javascript to be rendered by react. 

- How is a Component created in React?
A component can be either a class or a function conventionally capitalized that returns JSX.

- What are some difference between state and props?
Props are passed into components to be used from a higher component. Props can be a var stored in state. State persists over a re-render. 

- What does "downward data flow" refer to in React?
The idea that state and props should be passed downward from parent components. As an expample if you have a form, the data of that form could be stored in a prop that was passed in from a parent component to be used higher up in the app. 

- What is a controlled component?
A controlled component has it's values stored in state and continually updated through user input.

- What is an uncontrolled component?
An uncontrolled component has a reference to an element stored, instead of the value being directly stored and continually updated. I am using inputs as an example, but it could apply to other values and elements.  

- What is the purpose of the `key` prop when rendering a list of components?
Key's help react differentiate each component so nothing such as values are messed up during re-renders. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
An array of indexes can change, if you remove and add from the array some keys could end up with duplicate values. 

- Describe useEffect.  What use cases is it used for in React components?
useEffect takes two params the first one is for a fucntion, and the second one is for an optional array. If an array is passed, when the array is change, the function will run again. If an empty array is passed you get a function that runs on the first render and never again. This can be good for fetching data and getting the initial value from an api for something automatically wihtout requiring the user to click a button. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef stores a reference to an html element. Changing the ref value does not trigger a re-render.

- When would you use a ref? When wouldn't you use one?
useRef is used to interact with the DOM. You would not useRef to trigger re-renders. You could useRef to access values from a form

- What is a custom hook in React? When would you want to write one?
A custom hook in react is a JS function that starts with 'use' and can call other hooks. A good use case of a custome hook is getting data from an api. This can help clean up duplicate code while also storing the value in state.
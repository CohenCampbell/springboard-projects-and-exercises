### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
To allow routing in the front-end
- What is a single page application?
An app that renders and changes a single page using reactive elements instead delivering a new page
from the server. 
- What are some differences between client side and server side routing?
Client side routing is usally more seamless while server side routing requires a lot of reloads. 
Client side routing is usally faster because it does not need to get data from the server. 
- What are two ways of handling redirects with React Router? When would you use each?
<Navigate path="/404"> which can be used if the url param is unknown and can be called though
an if statement you could also use useHistory to navigate to the last page as a back button of sorts. 
- What are two different ways to handle page-not-found user experiences using React Router? 
<Route path="*"/> which can be used to redirect to a 404 page is the user goes to an unknown route. 
and <Navigate path="/404"> which can be used if the url param is unknown and can be called though
an if statement
- How do you grab URL parameters from within a component using React Router?
useParams();
- What is context in React? When would you use it?
Context is a way to pass information down through components without using props. 
Context can prevent prop drilling and is useful if a prop is needed on a greatGrandChild or lower but
not needed in the components parents and parents parents. 
- Describe some differences between class-based components and function
  components in React.
The syntax is completely diffrent and much less complex in functional components. There is also no this keyword in functional components. 
- What are some of the problems that hooks were designed to solve?
Hooks were designed to make sharing stateful logic easier and less complex. 
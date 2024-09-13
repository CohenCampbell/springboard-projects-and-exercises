### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON Web Token

- What is the signature portion of the JWT?  What does it do?
The payload and secret key go inside of the signature to create a token. The token can be used to auhorize a user.

- If a JWT is intercepted, can the attacker see what's inside the payload?
The payload is encoded in three Base64-URL. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
When a user logs in they will recive a token. This token can be sent with the authorization header to confirm

their identity whenever they make a request that requires authorization.
- Compare and contrast unit, integration and end-to-end tests.
A unit test is testing the smallest componet of an app, such as a function. 
A integration test focus on two componets that interact, such as a model and a route.
A E2E test test the entire app, from signing up, to, for example, buying a product. 

- What is a mock? What are some things you would mock?
A mock is a copy. You could mock a database to verify you're testing under equal conditions. 

- What is continuous integration?
Integrating changes, testing, integrating changes, testing, etc

- What is an environment variable and what are they used for?
enviorment vars tell your enviorment how to act. For example if your testing, you would want
your ENV set to test, so your using the correct config vars. 

- What is TDD? What are some benefits and drawbacks?
Test-driven development is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.

- What is the value of using JSONSchema for validation?
If someone posts an inncorrect json obj, you can catch it and send back a message, instead of an 
unhelpful error from the system after it breaks from getting random fields. 

- What are some ways to decide which code to test?
The Test Pyramid, starting from the least complex to the most. 

- What does `RETURNING` do in SQL? When would you use it?
It returns the data specified. You may need a query to return a username, or id for use later,
or in other functions. 

- What are some differences between Web Sockets and HTTP?
Web sockets are bidirectional, http is unidirectional
http is stateless
wobsockets frequently update data, htttp request sends one request back and forth. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
    I prefer Express over Flask. Express looks cleaner, middleware is easy to implement, as well as
nicer routes due to the router. Express is easier to test, and javascript has cleaner, easier syntax. 
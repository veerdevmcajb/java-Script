/*
! -------------- RESTful APIs -----------------

Rule -> Protocol -> Law  

Conventions -> Protocol 


List by Mom
? Index itemName quantity packaging

Dad went to shopkeeper with list --->
GET{
  data: {
    Index itemName quantity packaging
  }
}
PUT{
  data: {
    item1, item2 
  }
}
Delete{
  data:{
    sugar
  }
}
Post{
  data:{
    money, prasad, gift pendent
  }
}

Response by Shopkeeper.

Code -> description in english -> Data

200 -> Success -> { all the itemes in a list with packaging }
500 -> Sorry invalid request -- please pay remaining dues.



? What are restfull api's ?

RESTful APIs (Representational State Transfer) are a popular architectural style for designing networked applications. 
They use HTTP requests (In our eg Dad) to communicate between the client (mom) and server (shopkeeper), operating with standard HTTP verbs like 
GET, POST, PUT, DELETE, etc., to perform CRUD (Create, Read, Update, Delete) operations.


? Key Concepts of RESTful APIs:

- Statelessness: Each HTTP request from the client to server must contain all the information the server needs to understand the request. The server does not store any client state.

- Resource-Based: In REST, everything is a resource, identifiable by a URL. Resources are manipulated using the standard HTTP methods.

- Uniform Interface: REST APIs use a standardized interface, which simplifies and decouples the architecture, allowing each part to evolve independently.

- Client-Server Architecture: The client and server operate independently, allowing each to be developed and scaled separately.

? Use of HTTP Methods:

GET: Retrieve a data or a collection of data.

POST: Create a new data.

PUT: Update an existing data.

DELETE: Remove a data.

- Use of HTTP Status Codes: REST APIs use standard HTTP status codes to indicate the success or failure of an operation, such as 200 OK, 404 Not Found, 500 Internal Server Error, etc.

- Data Formats: While REST APIs can use any data format, JSON (JavaScript Object Notation) is the most popular due to its lightweight nature and compatibility with JavaScript.

?- Use of RESTful APIs

In JavaScript, RESTful APIs are consumed using HTTP request methods. 
The two most common ways to make these requests are using the Fetch API or newer Axios.
its prefer the Fetch API due to its simplicity and promise-based structure.
libraries like Axios can be used to simplify requests further and provide additional features.

*/


// ? Examples

// ?Example 1: Basic GET Request
// Fetching data from a RESTful API using a GET request.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
// Retrieves the post with id=1 from the JSONPlaceholder API and logs it.


// ?Example 2: Basic POST Request
// Creating a new resource using a POST request.

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
// Creates a new post and logs the response.


// ?Example 3: Handling HTTP Errors
// Demonstrating how to handle HTTP errors gracefully in a fetch request.

fetch('https://jsonplaceholder.typicode.com/invalid-url')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
// Catches the error due to the invalid URL and logs it.



// ?Example 4: PUT Request for Updating
// Using a PUT request to update an existing resource.

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'Updated Title',
    body: 'Updated body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
// Updates the post with id=1 and logs the updated resource.


// ?Example 5: DELETE Request
// Deleting a resource using a DELETE request.

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
.then(response => response.json())
.then(() => console.log('Post deleted'))
.catch(error => console.error('Error:', error));
// Deletes the post with id=1.


// ?Example 6: Query Parameters
// Including query parameters in a GET request to filter results.

fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
// Fetches posts for userId=1 and logs them.

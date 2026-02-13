/*
!-------------------- FETCH -------------------------

The `fetch` API in JavaScript provides an easy and logical way to fetch resources asynchronously from the network. 
It's built on Promises, making it straightforward to work within a asynchronous JavaScript application.

? What is`fetch` ?

The `fetch` function takes at least one argument, the path to the resource you want to fetch, and returns a Promise that resolves to the Response to that request. This response is a streamlined, yet powerful representation of the response for your request.

Here are some key points about `fetch`:

* Syntax  : `fetch(resource, init)`
  - `resource`: This defines the resource you wish to fetch. 
     This can be a path to a local JSON file or an API endpoint.
  - `init`: An optional argument, an object that allows you to control various settings like method (GET, POST, etc.), 
     and headers, body content for POST methods, mode (cors, no-cors), cache settings, etc.

* Promise-based  : `fetch` returns a Promise, which allows you to use `.then()` to handle the response once it's received and `.catch()` to handle any errors.

* Response Object  : When a request is successful, the Promise resolves with a Response object. 
- This object includes various properties and methods to inspect and parse the response, 
- including methods like `.json()` (for JSON responses), `.text()` (to get the response body as plain text), and `.blob()` (for binary data like images).

* Error Handling  : `fetch` only rejects a Promise if the request fails due to network issues.
- If the request completes but the server returns a 4xx or 5xx HTTP status code, 
the Promise will resolve normally, and you must check the response's `ok` status or the status code to handle such cases.

* Async/Await  : As `fetch` returns a Promise, it also works nicely with the `async/await` syntax, 
- thus is allow you to write asynchronous code in a synchronous manner, which improves readability and maintainability.

? Use of fetch

`fetch` is commonly used for API calls in web applications, such as 
fetching user data, 
submitting form data, 
loading assets, and etc. 
or in any applications that require data from external sources or server-side operations without reloading the web page (think of SPAs - Single Page Applications).

*/

// ! ------------------------- Fetch Practice -------------------------


// Example 1: Basic Fetch Request
// Fetching data from a public API and logging the response to the console
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // Parsing the JSON body of the response
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

// Example 2: Checking Fetch Response Status
// how to handle HTTP error statuses
fetch('https://jsonplaceholder.typicode.com/posts/999') // This ID might not exist
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Example 3: Fetch with Query Parameters
// Fetching data based on query parameters
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


// Example 4: Fetch with POST Method
// Sending data with a POST request
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


// Example 5: Handling JSON and Text Responses
// Demonstrating how to handle different response types
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // Assume we don't know if the response is text or JSON
    const contentType = response.headers.get('content-type');
    if (contentType.includes('application/json')) {
      return response.json();
    } else {
      return response.text();
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


// Example 6: Fetch with Error Handling for Non-200 Statuses
// More advanced error handling, including server and network errors
fetch('https://jsonplaceholder.typicode.com/posts/999') // This might return 404
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    return response.text().then(text => {
      throw new Error(text);
    });
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));



// Example 7: Fetch with Async/Await
// Using async/await for cleaner syntax
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();


// Example 8: Fetch with AbortController
// Demonstrating how to abort a fetch request
const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 5000); // Abort request after 5 seconds

fetch('https://jsonplaceholder.typicode.com/posts', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Fetch error:', error);
    }
  });

  
// Example 9: Sequential Fetch Requests with Async/Await
// Fetching multiple resources sequentially
async function fetchSequentially() {
  try {
    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await postResponse.json();
    console.log(post);

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await userResponse.json();
    console.log(user);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchSequentially();


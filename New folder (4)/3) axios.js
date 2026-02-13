/*
! ----------------- Axios ---------------------

? What is axios ?
Axios is a popular JavaScript library used for making HTTP requests. 
It can be used in the browser as well as in Node.js environments. 
Axios provides a more user-friendly API compared to the native `fetch` API and automatically transforms JSON data.

 ?  Theory Behind Axio

-   Simpler Syntax  : Axios simplifies the syntax for making requests and defaults to JSON for request and response data, eliminating the need to explicitly parse JSON.
  
-   Automatic Transforms  : Response data is automatically transformed to JSON, reducing boilerplate code.
  
-   Interceptors  : Axios allows you to use interceptors to transform requests and responses globally.
  
-   Error Handling  : Axios distinguishes between server errors (responses with status codes outside the 2xx range) and network errors, making error handling more intuitive.
  
-   Cancellation  : Axios provides an easy way to cancel requests, which can be useful for avoiding unnecessary network activity.
  
-   Instance Creation  : You can create instances of Axios with custom configurations, which is particularly useful for setting base URLs and headers that are reused across requests.

 ?  Use of Axios

Axios is widely used in web development for tasks like consuming RESTful services, 
submitting form data, and performing CRUD operations against a back-end. 
It's favored for its ease of use, promise-based nature, and comprehensive set of features.

*/

// To include Axios in your project. 
// For browser: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// For Node.js: const axios = require('axios');

//! Practice on Axios 
  

// Example 1: Basic Axios Request
// Making a GET request using Axios
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error fetching data:', error));

// Example 2: Handling HTTP Error Statuses
// Axios automatically throws an error for status codes outside the 2xx range
axios.get('https://jsonplaceholder.typicode.com/posts/999')
  .then(response => console.log(response.data))
  .catch(error => {
    if (error.response) {
      console.error(`HTTP error! status: ${error.response.status}`);
    } else {
      console.error('Error:', error.message);
    }
  });

// Example 3: Using Parameters with Axios
// Passing query parameters with Axios
axios.get('https://jsonplaceholder.typicode.com/posts', {
  params: {
    userId: 1
  }
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));




// Example 4: Axios POST Request
// Sending data using a POST request with Axios
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1,
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));



// Example 5: Handling Different Response Types
// Axios response object allows easy access to data and headers
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    const contentType = response.headers['content-type'];
    if (contentType.includes('application/json')) {
      console.log(response.data);
    } else {
      console.log(response.data.toString());
    }
  })
  .catch(error => console.error('Error:', error));



// Example 6: Advanced Error Handling
// Demonstrating Axios's error handling for non-200 status codes and network errors
axios.get('https://jsonplaceholder.typicode.com/posts/999')
  .then(response => console.log(response.data))
  .catch(error => console.error('Fetch error:', error.toString()));




// Example 7: Using Async/Await with Axios
// Cleaner syntax for making requests with async/await
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();

// Example 8: Axios Request Cancellation
// Cancelling an Axios request
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('https://jsonplaceholder.typicode.com/posts', { cancelToken: source.token })
  .catch(error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      console.error('Error:', error);
    }
  });

// Cancel the request
source.cancel('Operation canceled by the user.');

// Example 9: Sequential Axios Requests with Async/Await
// Making sequential requests with Axios
async function fetchSequentially() {
  try {
    const postResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(postResponse.data);

    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`);
    console.log(userResponse.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchSequentially();


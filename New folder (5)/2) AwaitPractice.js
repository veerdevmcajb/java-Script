// ! Async Await advanced practice

//! Example 1: Using async/await with Promise.all
// Fetching multiple URLs in parallel and waiting for all to complete
async function fetchMultipleUrls(urls) {
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(response => response.json()));
    console.log('Data from all URLs:', data);
  } catch (error) {
    console.error('Error in fetching:', error);
  }
}

fetchMultipleUrls(['https://jsonplaceholder.typicode.com/posts/1', 
'https://jsonplaceholder.typicode.com/posts/2']);

//! Example 2: Using async/await with Promise.race
// Fetching multiple URLs but only caring about the first one to return
async function fetchRace(urls) {
  try {
    const response = await Promise.race(urls.map(url => fetch(url)));
    const data = await response.json();
    console.log('First response data:', data);
  } catch (error) {
    console.error('Error in fetching:', error);
  }
}

fetchRace(['https://jsonplaceholder.typicode.com/posts/1',
 'https://jsonplaceholder.typicode.com/posts/2']);

//! Example 3: Using async/await with Promise.allSettled
// Fetching multiple URLs and handling each result, regardless of fulfillment or rejection
async function fetchAllSettled(urls) {
  const results = await Promise.allSettled(urls.map(url => fetch(url).then(response => response.json())));
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Request ${index + 1} succeeded with data:`, result.value);
    } else {
      console.error(`Request ${index + 1} failed with reason:`, result.reason);
    }
  });
}

fetchAllSettled(['https://jsonplaceholder.typicode.com/posts/1',
 'https://doesnotexist.typicode.com']);

//! Example 4: Using async/await with Promise.any
// Fetching multiple URLs and resolving with the first successful one, ignoring rejections
async function fetchAny(urls) {
  try {
    const response = await Promise.any(urls.map(url => fetch(url)));
    const data = await response.json();
    console.log('First successful response data:', data);
  } catch (error) {
    console.error('All promises were rejected:', error);
  }
}

fetchAny(['https://doesnotexist.typicode.com', 'https://jsonplaceholder.typicode.com/posts/1']);


//!  Example 5: Advanced Error Handling
// `async/await` with `Promise.all()` for error handling in multiple asynchronous operations.

async function fetchMultipleUrls(urls) {
  try {
    const result = await Promise.all(urls.map(url => fetch(url).then(r => r.json())));
    console.log(result);
  } catch (error) {
    console.error('One or more requests failed:', error);
  }
}

fetchMultipleUrls(['https://jsonplaceholder.typicode.com/posts/1',
 'https://jsonplaceholder.typicode.com/posts/2']);


// !  Example 6: Async/Await with Loops
// `async/await` within a loop to process asynchronous operations sequentially.

async function processUrls(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
}

processUrls(['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2']);
// Note: Each URL is fetched one after the other, not in parallel.


// !  Example 7: Optimizing Performance in Loops
// `Promise.all()` within a loop to optimize performance by running asynchronous operations concurrently.

async function processUrlsConcurrently(urls) {
  const promises = urls.map(async url => {
    const response = await fetch(url);
    return response.json();
  });

  const results = await Promise.all(promises);
  results.forEach(result => console.log(result));
}

processUrlsConcurrently(['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2']);
// Fetches all URLs in parallel, optimizing performance.


// !  Example 8: Error Handling with Async/Await in Loops
// error handling for each asynchronous operation within a loop.

async function processUrlsWithIndividualErrorHandling(urls) {
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Failed to fetch ${url}:`, error);
    }
  }
}

processUrlsWithIndividualErrorHandling(['https://jsonplaceholder.typicode.com/posts/1',
 'invalid-url']);

// ! -------------------- Promise pratice ------------------

// Example 1: Creating a simple Promise that resolves
const promiseResolve = new Promise(
    (resolve, reject) => {
      // The executor function is executed immediately by the Promise implementation,
      // passing resolve and reject functions (the so-called "revealing constructor pattern")
      // timeout of 10 seconds
      resolve('This promise has resolved.');
    }
  );
  
  promiseResolve.then((value) => {
    console.log(value); // Output: This promise has resolved.
  }).catch((error)=> "sorry");
  

  // Example 2: Creating a simple Promise that rejects
  const promiseReject = new Promise(
    (resolve, reject) => {
      reject('This promise has been rejected.');
   }
  );
  
  promiseReject.then(
    // Parameter 1 for resolve
    (value) => {
      console.log(value); // Output: This promise has resolved.
  }
   // , No Parameter 2 for reject
  ).catch(
    (error) => {
    console.error("Inside Catch",error); // Output: This promise has been rejected.
  });
  

  {
  
    // Example 2 A: Creating a simple Promise that rejects but handled in reject handler of .then(null, rejectHandler).
  const promiseReject = new Promise((resolve, reject) => {
    reject('This promise has been rejected.');
  });
  
  promiseReject.then(
    // Parameter 1 for resolve  
    (value) => {
      console.log(value); // Output: This promise has resolved.
   },
   // Parameter 2 for reject
    (error) => {
      console.error("Reject handler", error); // Output: This promise has been rejected.
      throw new Error("Error inside then's reject handler");
   }
  ).catch((error) => {
    console.error("Inside Catch",error); // Output: This promise has been rejected.
  });

  }

  // Example 2 B: Creating a simple Promise that resolves then rejects in the then block
  const promiseReject3 = new Promise((resolve, reject) => {
    resolve('This promise has been resolved.');
  });
  
  promiseReject3.then(
    (value) => {
      console.log(value); // Output: This promise has resolved.
      throw new Error("Error aaya hai .then me");
   },
    (error) => {
      console.error("Reject handler", error); // Output: This promise has been rejected.
   }
  ).catch((error) => {
    console.error("Inside Catch", error); // Output: This promise has been rejected.
  });


  // Example 3: Using setTimeout with Promises for asynchronous operations
  const promiseTimeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Result after 2 seconds');
    }, 5000);
  });
  
  promiseTimeout.then((value) => {
    console.log(value); // Output: Result after 2 seconds
  });
  
  
  // Example 4: Chaining Promises
  const processData = (data) => new Promise((resolve, reject) => {
    console.log('AbhishekDhone.work@gmail.com');
    resolve(`${data} processed`);
  });
  
  const logData =(data) => new Promise((resolve, reject) => {
      console.log(`${data} password fetched`);
      resolve('Logging complete');
    });
  
  processData('Fetch email of Abhishek Dhone')
    .then(logData)
    .then((result) => {
      console.log(result); // Output: Logging complete
    });
  
  // Example 5: Handling both resolve and reject in a single Promise
  const checkNumber = (number) => new Promise((resolve, reject) => {
    if (number > 10) {
      resolve('The number is greater than 10.');
    } else {
      reject('The number is 10 or less.');
    }
  });
  
  checkNumber(15)
    .then((result) => console.log(result)) // Output: The number is greater than 10.
    .catch((error) => console.error(error));
  
  // Example 6: Promise with a conditional asynchronous operation
  const getUserPermission = (user) => new Promise((resolve, reject) => {
    if (user.isAdmin) {
      setTimeout(() => resolve('User has admin permissions'), 1000);
    } else {
      reject('User is not an admin');
    }
  });
  
  getUserPermission({ isAdmin: false })
    .then((result) => console.log(result))
    .catch((error) => console.error(error)); // Output: User is not an admin
  
  
  // Example 7: Promise chaining with data manipulation
  const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve({ data: 'Raw Data' }), 1000);
  });
  
  const parseData = (data) => `${data} Parsed`;
  
  fetchData()
    .then((response) => parseData(response.data))
    .then((parsed) => console.log(parsed)) // Output: Raw Data Parsed
    .catch((error) => console.error(error));
  
    
  // Example 8: Sequential Promise execution with dynamic data
  const fetchUserById = (id) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`User with ID: ${id}`), id * 100);
  });
  
  [1, 2, 3].reduce((promiseChain, userId) => {
    return promiseChain.then(() => fetchUserById(userId))
      .then((user) => console.log(user));
  }, Promise.resolve());
  

  // Example 9: Handling Promises with multiple asynchronous operations
  const fetchResource = (resource) => new Promise((resolve, reject) => {
    console.log(`Fetching ${resource}`);
    setTimeout(() => resolve(`Resource ${resource} fetched`), 2000);
  });
  
  const resources = ['Resource 1', 'Resource 2', 'Resource 3'];
  
  resources.forEach((resource) => {
    fetchResource(resource)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  });
  
  
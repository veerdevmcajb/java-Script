//!--------------------- Date Basics ------------------------

// Creating a new Date object for the current date and time
const currentDate = new Date();
console.log('Current Date:', currentDate);

// Get Methods for Date Objects
// Get the full year
console.log('Full Year:', currentDate.getFullYear());

// Get the month (0 = January, 11 = December)
console.log('Month:', currentDate.getMonth());

// Get the day of the month
console.log('Date:', currentDate.getDate());

// Get the day of the week (0 = Sunday, 6 = Saturday)
console.log('Day of the Week:', currentDate.getDay());

// Get the hour
console.log('Hours:', currentDate.getHours());

// Get the minutes
console.log('Minutes:', currentDate.getMinutes());

// Get the seconds
console.log('Seconds:', currentDate.getSeconds());

// Get the milliseconds

console.log('Milliseconds:', currentDate.getMilliseconds());

// Get the time (milliseconds since January 1, 1970)
console.log('Time:', currentDate.getTime());

// Note: All the above get methods return the local time.

// UTC Get Methods - Getting the date and time in UTC


let now=Date.parse("1999,08,29")
console.log(now.toString());


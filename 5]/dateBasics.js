//! ------------------ Date and Time ------------------

// The date objects are static and does not change as the time changes.
// 1970 till now. 

// Creating a new Date object for the current date and time
var now = new Date();
console.log('Current date and time:', now);
console.log('Current date and time:', now.toString());
console.log('Current date and time in Miliseconds:', now.getTime());


let now=new Date();
console.log(now.toString());

// for(let i=0; i<100000000 ; i++){
//     let x = 15 **13** 12 + 5 /0;
// };

let now2 = new Date();
console.log('Current date and time:', now2.toString());

// This is the difference between the two date objects after the lenghtly calculation.
console.log(now - now2);

// Creating a Date object from a date string
let dateString = new Date('2024-05-10');
console.log('Date from a string:', dateString.toString());

// Creating a Date object with specific components
// Note: Months are 0-indexed (0 is January, 11 is December)

// ( yyyy , mm , dd , hh , mm , ss , mmmm )






    // 1. Year and month (Note: January is 0)
let yearMonth = new Date(2024, 1); // 2024, February
console.log('Year and month:', yearMonth.toString());

let date=new Date(2012,11);
console.log(date.toString()); 

let yearMonth=new Date(2025,00,01);
console.log(yearMonth.toString());

let date=new Date(1998,04,10);
console.log(date.toString()); // (Sun May 10 1998 00:00:00 GMT+0530 (India Standard Time))


let now=new Date(1998,04,10);
console.log(now.getTime());    // it will give a milisec like (894738600000).


let milisecNow=new Date(894738600000);
console.log(milisecNow.toString());

// 2. Year, month, and day
let yearMonthDay = new Date(2024, 1, 3); // 2024, February, 3rd
console.log('Year, month, and day:', yearMonthDay.toString());

// 3. Year, month, day, and hours
let yearMonthDayHours = new Date(2024, 1, 3, 12); // 2024, February, 3rd, 12:00
console.log('Year, month, day, and hours:', yearMonthDayHours.toString());

let ymdh=new Date()

// 4. Year, month, day, hours, and minutes
let yearMonthDayHoursMinutes = new Date(2024, 1, 3, 12, 36); // 2024, February, 3rd, 12:36
console.log('Year, month, day, hours, and minutes:', yearMonthDayHoursMinutes.toString());

let ymdhm=new Date(1999,08,29,15,55);
console.log(ymdhm.toString());

// 5. Year, month, day, hours, minutes, and seconds
let yearMonthDayHoursMinutesSeconds = new Date(2024, 1, 3, 12, 36, 20); // 2024, February, 3rd, 12:36:20
console.log('Year, month, day, hours, minutes, and seconds:', yearMonthDayHoursMinutesSeconds.toString());

// 6. Year, month, day, hours, minutes, seconds, and milliseconds
let fullDate = new Date(2024, 1, 3, 12, 36, 20, 0); // 2024, February, 3rd, 12:36:20.000
console.log('Full date:', fullDate.toString());

// Creating a Date object from milliseconds since Jan 1, 1970, UTC
let fromMilliseconds1 = new Date(86400000); // Adding 24 hours to Jan 1, 1970
console.log('Date from milliseconds:', fromMilliseconds1.toString());

// Displaying Dates
let now = new Date();
console.log('Date toString():', now.toString()); // Default toString() representation
console.log('Date toDateString():', now.toDateString()); // Readable date string
console.log('Date toUTCString():', now.toUTCString()); // Date string in UTC
console.log('Date toISOString():', now.toISOString()); // Date string in ISO format

// Note: Examples above demonstrate the basic creation and formatting of Date objects in JavaScript.


// JavaScript Date Objects and Usage

// Creating a new Date object for the current date and time
var currentDate = new Date();
console.log('Current Date:', currentDate.toString());

// Creating a Date object from a date string
let dateStringExample = new Date('2024-02-03T12:36:20Z');
console.log('Date from string:', dateStringExample.toString());

// Creating a Date object with specified components
// Note: JavaScript counts months from 0 (January) to 11 (December)

// Example with year, month, day, hour, minute, second, and millisecond
let specificDateTime = new Date(2024, 1, 3, 12, 36, 20, 0);
console.log('Specific date and time:', specificDateTime.toString());

// Autocorrection in Date objects
// Specifying a month higher than 11 adds the overflow to the next year
let overflowMonth = new Date(2018, 15, 24, 10, 33, 30);
console.log('Overflow month autocorrected:', overflowMonth.toString());

// Specifying a day higher than the max adds the overflow to the next month
let overflowDay = new Date(2018, 5, 35, 10, 33, 30);
console.log('Overflow day autocorrected:', overflowDay.toString());

// Using different numbers of arguments to specify a date
let sixNumbers = new Date(2024, 1, 3, 12, 36, 20);
let fiveNumbers = new Date(2024, 1, 3, 12, 36);
let fourNumbers = new Date(2024, 1, 3, 12);
let threeNumbers = new Date(2024, 1, 3);
let twoNumbers = new Date(2024, 1);

console.log('Six numbers:', sixNumbers.toString());
console.log('Five numbers:', fiveNumbers.toString());
console.log('Four numbers:', fourNumbers.toString());
console.log('Three numbers:', threeNumbers.toString());
console.log('Two numbers:', twoNumbers.toString());

// Previous century handling for 1 or 2 digit years
let previousCentury = new Date(98, 1);
console.log('Previous century year:', previousCentury.toString());

// Creating a Date object from milliseconds since Jan 1, 1970, UTC
let fromMilliseconds = new Date(100000000000);
console.log('Date from milliseconds:', fromMilliseconds.toString());

let minusMilliseconds = new Date(-100000000000);
console.log('Date minus milliseconds:', minusMilliseconds.toString());

let plusOneDay = new Date(24 * 60 * 60 * 1000);
console.log('Plus one day:', plusOneDay.toString());

let zeroMilliseconds = new Date(0);
console.log('Zero milliseconds:', zeroMilliseconds.toString());

// Date Methods and Displaying Dates
// Date objects offer various methods to get and set date components
let currentDate = new Date();
console.log('Year:', currentDate.getFullYear());
console.log('Month:', currentDate.getMonth());
console.log('Date:', currentDate.getDate());
console.log('Day ', currentDate.getDay());
console.log('Hours ', currentDate.getHours());
console.log('Min ', currentDate.getMinutes());
console.log('Sec ', currentDate.getSeconds());
console.log('Mili ', currentDate.getMilliseconds());
console.log('UTC Full year ', currentDate.getUTCFullYear());
console.log('UTC Month ', currentDate.getUTCMonth());
console.log('UTC Date ', currentDate.getUTCDate());

// Displaying dates in different formats
let currentDate=new Date();
console.log('toString():', currentDate.toString()); // Full string representation with time zone
console.log('toDateString():', currentDate.toDateString()); // Readable date format
console.log('toUTCString():', currentDate.toUTCString()); // UTC time format
console.log('toISOString():', currentDate.toISOString()); // ISO standard format



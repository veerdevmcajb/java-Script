//!------------------ Date Input Formats ------------------------

// There are generally 3 types of JavaScript date input formats:
// 1. ISO Date - "2015-03-25" (The International Standard)
// 2. Short Date - "03/25/2015"
// 3. Long Date - "Mar 25 2015" or "25 Mar 2015"

// JavaScript Date Output
// Independent of input format, JavaScript will (by default) output dates in full text string format:
// Example: Sat Feb 03 2024 12:43:12 GMT+0530 (India Standard Time)

// JavaScript ISO Dates
// ISO 8601 is the international standard for the representation of dates and times.
//? The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format.

// Example of ISO Date
let isoDate = new Date("2015-03-25");
console.log(isoDate.toString());

// ISO Dates (Year and Month)
// ISO dates can be written without specifying the day (YYYY-MM)
let isoYearMonth = new Date("2015-03");
console.log(isoYearMonth.toString());

// ISO Dates (Only Year)
// ISO dates can be written without month and day (YYYY)
let isoYear = new Date("2015");
console.log(isoYear.toString());

let now=new Date(1998);
console.log(now.toString());

// ISO Dates (Date-Time)
// ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ)
let isoDateTime = new Date("2015-03-25T12:00:00Z");
console.log(isoDateTime.toString());

// Modifying time relative to UTC
let isoDateTimeModified = new Date("2015-03-25T12:00:00-06:30");
console.log(isoDateTimeModified.toString());


// Time Zones
// When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.

// JavaScript Short Dates
// Short dates are written with an "MM/DD/YYYY" syntax
let shortDate = new Date("03/25/2015");
console.log(shortDate.toString());

//! Warnings for Short Dates
// The behavior of "YYYY/MM/DD" and "DD-MM-YYYY" is undefined in some browsers.

// JavaScript Long Dates
// Long dates are most often written with a "MMM DD YYYY" syntax
let longDate = new Date("Mar 25 2015");
console.log(longDate.toString());

// Long Date Variations
let longDateVariation = new Date("25 Mar 2015");
console.log(longDateVariation.toString());

// Date Input - Parsing Dates
// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
let msec = Date.parse("March 21, 2012");
console.log("Date in Miliseconds", msec);

let ms=Date.parse("1998,05,10");
console.log(ms);

// we can get a date from milisecounds
let date=new Date(894738600000);
console.log(date.toString());

let now=new Date("1998,05,10");
console.log(now.getMilliseconds());


let dateFromMsec = new Date(msec);
console.log(dateFromMsec.toString());




 
Date.parse("a")>Date.parse("b");

new Date.parse(2021,0)=<Date.parse("");

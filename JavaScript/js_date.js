//Date
var d = new Date();
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
var d = new Date(2018, 11, 24, 10, 33, 30);
var d = new Date(2018, 11, 24, 10, 33);
var d = new Date(2018, 11, 24, 10);
var d = new Date(2018, 11, 24);
var d = new Date(2018, 11);
var d = new Date(2018);

var d = new Date(99, 11, 24);
var d = new Date("October 13, 2014 11:13:00");
var d = new Date(100000000000);

d.toString();
d.toUTCString();
d.toDateString();

//Date Formats
var d = new Date("2015-03-25");
var d = new Date("03/25/2015");
var d = new Date("Mar 25 2015");
var d = new Date("25 Mar 2015");
var d = new Date("January 25 2015");

var msec = Date.parse("March 21, 2012");
var msec = Date.parse("March 21, 2012");
var d = new Date(msec);

//Date Get Methods
var d = new Date();
d.getDate();
d.getTime();
d.getFullYear();
d.getMonth();
d.getHours();
d.getMinutes();
d.getSeconds();
d.getMilliseconds();
d.getDay();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
days[d.getDay()];

d.getUTCDate();
d.getUTCFullYear();
d.getUTCMonth();
d.getUTCHours();
d.getUTCMinutes();
d.getUTCSeconds();
d.getUTCMilliseconds();
d.getUTCDay();

//Date Set Methods
setDate()			Set the day as a number (1-31)
setFullYear()		Set the year (optionally month and day)
setHours()			Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()		Set the minutes (0-59)
setMonth()			Set the month (0-11)
setSeconds()		Set the seconds (0-59)
setTime()			Set the time (milliseconds since January 1, 1970)

//Compare Dates
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
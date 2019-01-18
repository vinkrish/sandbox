//Strings
var answer = "It's alright";
var answer = "He is called 'Johnny'";
var answer = 'He is called "Johnny"';

var sln = answer.length;

//escape character
var x = "We are the so-called \"Vikings\" from the north.";

\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator

//You can also break up a code line within a text string with a single backslash:
var hello = "Hello \
Dolly!";

//preferred method
var hello = = "Hello " + 
"Dolly!";

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
var pos = str.lastIndexOf("locate");

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
var res = str.slice(-12, -6);

var res = str.slice(7);
var res = str.slice(-12);

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
var res = str.substr(7, 6);
var res = str.substr(7);
var res = str.substr(-4);

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
var n = str.replace("MICROSOFT", "W3Schools");
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
var n = str.replace(/MICROSOFT/i, "W3Schools");
//To replace all matches, use a regular expression with a /g flag (global match):
var n = str.replace(/Microsoft/g, "W3Schools");

var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

var str = "HELLO WORLD";
str.charAt(0);            // returns H
str.charCodeAt(0);         // returns 72

var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

var txt = "Hello";       // String
txt.split("");           // Split in characters

//Math
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

Math.round(4.7);    // returns 5
Math.round(4.4);	// returns 4

Math.pow(8, 2);      // returns 64

Math.sqrt(64);      // returns 8

Math.abs(-4.7);     // returns 4.7

Math.ceil(4.4);     // returns 5

Math.floor(4.7);    // returns 4

Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)

Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150

Math.random();     // returns a random number

//This JavaScript function always returns a random number between min (included) and max (excluded):
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//This JavaScript function always returns a random number between min and max (both included):
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 6:
        day = "Saturday";
	default: 
		day = "Looking forward to the Weekend";
}

switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break; 
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default: 
        text = "Looking forward to the Weekend";
}

//Type
typeof "John"                 // Returns "string" 
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

//constructor property
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}

//A regular expression is a sequence of characters that forms a search pattern.
//The search pattern can be used for text search and text replace operations.

var str = "Visit W3Schools";
var n = str.search("W3Schools");
var n = str.search(/w3schools/i); //case-insensitive search

var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");
var res = str.replace(/microsoft/i, "W3Schools"); //case-insensitive replace

//getter
var obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length == 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
}

console.log(obj.latest);
// expected output: "c"

var o = {a: 0};
Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });
console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)

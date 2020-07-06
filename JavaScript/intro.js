/*
JS is an un-typed language. This means a js variable can hold a value of any data type.
This feature is termed as "dynamic typing"
*/

alert("Hello World!");
confirm("I love javascript!");
prompt("Do you want to learn javascript");

console.log("Hello World!");
console.warn("Warning!!");
console.error("Error!!!");

typeof(10 < 2);

var a = 2;
console.log(typeof(a));

var answer = prompt("what is your name?");
if(answer === 'Vinay') {
    alert('Welcome master!');
} else if (answer === 'Krishna'){
    alert('Welcome boss!');
} else {
    alert('you are not authorised'); 
}

var randomNumber = Math.random();
console.log(randomNumber);

var round = Math.round(.5);
console.log(round);

var randomNum = Math.round(Math.random() * 5);

if(randomNum%3 === 0) {
    alert('fizz');
} else if(randomNum%5 === 0) {
    alert('buzz');
} else {
    console.log(randomNum);
}
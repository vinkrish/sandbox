/*
When a function is created, a keyword called this is created (behind the scenes), which links to the object in which the function operates.

What can we expect the this value to be? By default, this should always be the window Object, which refers to the root—the global scope, 
except if the script is running in strict mode ("use strict") this will be undefined.
*/

// https://www.codementor.io/@dariogarciamoya/understanding--this--in-javascript-du1084lyn?icn=post-8i1jca6jp&ici=post-du1084lyn

// define a function
var myFunction = function () {
  console.log(this);
};

// call it
myFunction();

// Object Literal
var myObject = {
  myMethod: function () {
    console.log(this);
  }
};

myObject.myMethod(); // this === myMethod function or myObject?
const test = myObject.myMethod;
test(); // this === window object

/*
What would be the this context here?
Well, the answer is We do not know.

Remember:
The this keyword’s value has nothing to do with the function itself, how the function is called determines the this value
*/

var myMethod = function () {
  console.log(this);
};

var myObject = {
  myMethod: myMethod
};

/*
Is it clearer now?
Of course, everything depends on how we call the function.

myObject in the code is given a property called myMethod, which points to the myMethod function. 
When the myMethod function is called from the global scope, this refers to the window object.
When it is called as a method of myObject, this refers to myObject.
*/

myObject.myMethod() // this === myObject
myMethod() // this === window
// This is called implicit binding

// Explicit binding
var myMethod = function () {
  console.log(this);
};

var myObject = {
  myMethod: myMethod
};

myMethod() // this === window
myMethod.call(myObject, args1, args2, ...) // this === myObject
myMethod.apply(myObject, [array of args]) // this === myObject

// Explicit binding takes precedence over implicit binding
var myMethod = function () { 
  console.log(this.a);
};

var obj1 = {
  a: 2,
  myMethod: myMethod
};

var obj2 = {
  a: 3,
  myMethod: myMethod
};

obj1.myMethod(); // 2
obj2.myMethod(); // 3

obj1.myMethod.call( obj2 ); // 3
obj2.myMethod.call( obj1 ); // 2

// Hard binding takes precedence over explicit binding
var myMethod = function () { 
  console.log(this.a);
};

var obj1 = {
  a: 2
};

var obj2 = {
  a: 3
};

myMethod = myMethod.bind(obj1); // 2
myMethod.call( obj2 ); // 2

// New binding
function foo(a) {
  this.a = a;
}

var bar = new foo(2);
console.log(bar.a); // 2

/*
So this when the function has been called with new refers to the new instance created.

When a function is called with new, it does not care about implicit, explicit, or hard binding, it just creates the new context—which is the new instance.
*/

function foo(something) {
  this.a = something;
}

var obj1 = {};

var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); // 2

var baz = new bar(3);
console.log(obj1.a); // 2
console.log(baz.a); // 3

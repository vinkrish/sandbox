// Explicit binding is when we explicitly bind a context to the function. This is done with call() or apply()
// Hard binding: This is done with bind() (ES5). bind() returns a new function that is hard-coded to call the original function with the this context set as you specified.

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

//Demo with javascript .call()
var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(obj, "New","Bangalore","KAR"));
// output: welcome Niladri to New Bangalore in KAR

/*
*The first parameter in call() method sets the "this" value, which is the object, on which the function is invoked upon. In this case, it's the "obj" object above.
*The rest of the parameters are the arguments to the actual function
*/

// array of arguments to the actual function
var args = ["New","Bangalore","KAR"];
console.log(greeting.apply(obj, args));
// output: welcome Niladri to New Bangalore in KAR

/*
* The only difference of apply() with the call() method is that the second parameter of the apply() method accepts the arguments to the actual function as an array.
*/

//Use .bind() javascript
var bound = greeting.bind(obj); //creates a bound function that has same body and parameters 
console.dir(bound); ///returns a function
onsole.log(bound("New","Bangalore","KAR")); //call the bound function

// https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/

var myObj = {

    specialFunction: function () {

    },

    anotherSpecialFunction: function () {

    },

    getAsyncData: function (cb) {
        cb();
    },

    render: function () {
        var that = this;
        this.getAsyncData(function () {
            that.specialFunction();
            that.anotherSpecialFunction();
        });
    }
};

myObj.render();

// output: Uncaught TypeError: Object [object global] has no method 'specialFunction'

// We need to keep the context of the myObj object referenced for when the callback function is called

render: function () {

    this.getAsyncData(function () {

        this.specialFunction();

        this.anotherSpecialFunction();

    }.bind(this));

}

// bind function looks like this
Function.prototype.bind = function (scope) {
    var fn = this;
    return function () {
        return fn.apply(scope);
    };
}





// Creating a New Object
var obj = {};
var nextObj = Object.create(Object.prototype);
var lastObj = new Object();

//jagged array
var jagged = [[3,3,3],[9,9], 1, "asdf"];

//heterogenious
var myArray = [1, false, "three", {name: "vinay", age: 26}];

//multidimensional 
var newArray = [[1,2,3],["a", "b", "c", "d", {name: "vinay", age: 26}]];

//object
var phonebookEntry = {};
phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};
phonebookEntry.phone();

//object literal notation
var me = {
    name: "VinayKrishna",
    age: 26
}

//object constructor with dot notation
var me = new Object();
me.name = "VinKrish";
me.age = 26;

// Square bracket notation
var me = {};
me["name"] = "Vinkrish";
me["age"] = "26";

var square = function (x) {
  return x * x;
};

var multiply = function(x, y) {
    return x*y;
};

multiply(9,9);

//Method
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
bob.setAge = function (newAge){
  bob.age = newAge;
  //this.age = newAge;
};

var setAge = function (newAge) {
  this.age = newAge;
};
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
bob.setAge(40);
var susan = new Object();
susan.age = 1;
susan.setAge = setAge;
susan.setAge(35);

var james = {
    job: "programmer",
    married: false,
    speak: function(feeling) {
        console.log("Hello, I am feeling " + feeling);
    }
};
james.speak("great");
james.speak("just okay");

//Method return
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
square.calcArea = function() {
    return this.sideLength * this.sideLength;
};
var p = square.calcPerimeter();
var a = square.calcArea();

//Custom Constructor
function Person(name,age) {
  this.name = name;
  this.age = age;
}
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}
var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);

//Construtor with Methods
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  this.calcPerimeter = function() {
      return (this.height*2 + this.width*2);
  }
}
var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);

//Passing objects into functions
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);
var diff = ageDifference(alice, billy);

//it's easy to reference other properties in that object: just use this.propertyName!
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        console.log("Hi, I work as a " + this.job);
    }
};
james.sayJob();
james.job = "super programmer"
james.sayJob();

//typeof
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"

var myObj = {
   name: "vinay" 
};
console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
//properties
for (var prop in nyc) {
    console.log(prop);
}
//values
for (var key in nyc) {
    console.log(nyc[key]);
}

//prototype
//Date objects inherit from Date.prototype. Array objects inherit from Array.prototype. Person objects inherit from Person.prototype.
function Dog (breed) {
  this.breed = breed;
};
// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();
var snoopy = new Dog("Beagle");
snoopy.bark();

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// create a Penguin constructor here
function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
// create a sayName method for Penguins here
Penguin.prototype.sayName = function() {
    console.log("Hi my name is :" + this.name);
};
// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();

// define a Penguin class
function Penguin(name) {
	Animal.call(this, name, 2);
    // this.name = name;
    // this.numLegs = 2;
}
// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
var penguin1 = new Penguin("Pengy");
penguin1.sayName();

Penguin.prototype = Object.create(Animal.prototype);
Penguin.prototype.constructor = Penguin;
var penguin2 = new Penguin("Pengy");
penguin2.sayName();

// same as function prototype classes use extends which is syntactic sugar
class Animal {
	constructor(voice) {
		this.voice = voice || 'grunt';
	}
	
	speak() {
		console.log(this.voice);
	}
}

class Cat extends Animal {
	constructor(name, color) {
		super('Meow');
		this.name = name;
		this.color = color;
	}
}

var fluffy = new Cat('Fluffy', 'White');
console.log(fluffy);

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}
Emperor.prototype = new Penguin();
var emperor = new Emperor("Raja");
console.log(emperor.numLegs);

console.log( emperor.saying ); // should print "Waddle waddle"
console.log( emperor.numLegs ); // should print 2
console.log( emperor.isAlive ); // should print true

//private variable & methods
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function() {
        return returnBalance;  
   };
}
var john = new Person("john", "Purell", 100);
// try to print his bankBalance
console.log(john.bankBalance);

var myBalance = john.getBalance();
console.log(myBalance);

var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);

//looks for-in
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};
// print hello in the 3 different languages
for (var key in languages) {
    if ("string" === typeof languages[key]) {
        console.log(languages[key]);
    }
}

// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);

//not getting result
function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}
var myStudentReport = new StudentReport();
for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

var a = [12, 12, 90]
a.push(111, 111);
Array.prototype.sum = function() {
  var summed = 0;
  var b = this;
  for(var i=0; i< this.length; i++) {
    summed = summed + b[i];
  }
  return summed;
}
console.log(a.sum());

//The forEach() method executes a provided function once for each array element.
var array = ['a', 'b', 'c'];
array.forEach(function(element) {
  console.log(element);
});

//copying array into another array
Array.prototype.extend = function (other_array) {
    /* you should include a test to check whether other_array really is an array */
    other_array.forEach(function(v) {this.push(v)}, this);    
}
var a = [1,2,3];
var b = [5,4,3];
a.extend(b);

//callbacks
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
})

function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);

//Promise
function getSum(n1, n2) {   
   var isAnyNegative = function() {   
      return n1 < 0 || n2 < 0;   
   }   
   var promise = new Promise(function(resolve, reject) {   
      if (isAnyNegative()) {   
         reject(Error("Negatives not supported"));   
      }   
      resolve(n1 + n2)
   });   
   return promise;   
}

getSum(5, 6)   
.then(function (result) {   
   console.log(result);   
},   
function (error) {   
   console.log(error);   
});

getSum(5, 6)   
.then(function(result) {   
   console.log(result);   
   return getSum(10, 20); 
   // this returns another promise   
},   
function(error) {   
   console.log(error);   
})   
.then(function(result) {   
   console.log(result);   
}, 
function(error) {   
   console.log(error);
}); 

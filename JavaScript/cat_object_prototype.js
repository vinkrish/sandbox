'use strict';

var cat = {name: 'Everest', color: 'Black'};
cat.age = 3;
cat.speak = function() { display("Meowww") }
cat['eye-color'] = 'Green';

display(cat.name)
display(cat.age)
cat.speak();
display(cat['eye-color'])
display(Object.getOwnPropertyDescriptor(cat, 'name'))
Object.defineProperty(cat, 'name', {writable: true})
cat.name = 'Everest'
display(cat.name)

function Cat() {
  this.name = 'Fluffy2';
  this.color  = 'white';
}
var catObj = new Cat();
display(catObj);

function CatConstructor(name, color) {
  this.name = name;
  this.color = color;
}
var catConst = new CatConstructor('Everest', 'Black');

CatConstructor.prototype.age = 3

var kailani = new CatConstructor('Kailani', 'White');

CatConstructor.prototype = {age: 5}
// catConst and kailani still have reference in memory to old prototype

console.log(CatConstructor.prototype);
console.log(catConst.__proto__);
console.log(CatConstructor.prototype === catConst.__proto__);

kailani.age = 1;

console.log(kailani.age);
console.log(kailani.__proto__.age);

console.log(Object.keys(catConst));
console.log(Object.keys(kailani));

console.log(catConst.hasOwnProperty('age'));
console.log(kailani.hasOwnProperty('age'));

var whiskers = new CatConstructor('Whiskers', 'White & Brown');
console.log(kailani.age);
console.log(whiskers.age);

var catObjectPrototype = Object.create(Object.prototype,
  {
    name: {
      value:'Kailani',
      enumerable: true,
      writable: true,
      configurable: true
    },
    color: {
      value:'White',
      enumerable: true,
      writable: true,
      configurable: true
    }
  })
display(catObjectPrototype)

class CatClass {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  speak() {
    display('Meow')
  }
}
var catClass = new CatClass('Whiskers', 'White & Grey')
display(catClass)
cat.speak()

var catPropObject = {
    name: {first: 'Everest', last: 'Kailani'}, 
    color: 'Black'
}
Object.defineProperty(catPropObject, 'name', {writable: false})
// need to freeze if property is object to make it read-only
// Object.freeze(catPropObject.name)
catPropObject.name.first = 'Whiskers'
display(catPropObject.name)

for(var propertyName in catPropObject) {
  display(propertyName + ':' + catPropObject[propertyName])
}
Object.defineProperty(catPropObject, 'name', {enumerable: true})
display(Object.keys(catPropObject))

Object.defineProperty(catPropObject, 'name', {configurable: false})
// delete catPropObject.name
// cannot delete property whose configurable is false

display(JSON.stringify(catPropObject))

Object.defineProperty(catPropObject, 'fullName',
  {
    get: function() {
      return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
      var nameParts = value.split(' ')
      this.name.first = nameParts[0]
      this.name.last = nameParts[1]
    }
  })
catPropObject.fullName = 'Eve Kai'
display(catPropObject.fullName)

var arr = ['red', 'blue', 'green'];

Object.defineProperty(Array.prototype, 'last', 
	{
		get: function() {
		return this[this.length-1];
	}
  })
var last = arr.last;
console.log(last);

var arr2 = ['one', 'two', 'three'];
console.log(arr2.last);

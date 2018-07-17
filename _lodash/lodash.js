var _ = require('lodash');

/*
$ npm install --save lodash.foreach
var forEach = require('lodash.foreach');
*/

var min = _.min([1, 2, 3]);
console.log(min);
// -> 1

var objects = [
  { 'a': 1, 'b': 2, 'c': 3 },
  { 'a': 4, 'b': 5, 'c': 6 }
];
 
var matches = _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
console.log(matches);
// => [{ 'a': 4, 'b': 5, 'c': 6 }]

_.sample(['a', 'b', 'c']);
// -> 'a'

_.sample({
a: 1,
b: 2,
c: 3
});
// -> 1

_.sample('hello');
// -> 'h'

_.sampleSize('hello', 2)
// -> ['h', 'l']

_.shuffle(['a', 'b', 'c']);
// -> ['b', 'c', 'a']

_.shuffle({
a: 1,
b: 2,
c: 3
});
// -> [1, 2, 3]

_.shuffle('hello');
// -> ['l', 'l', 'o', 'h', 'e']
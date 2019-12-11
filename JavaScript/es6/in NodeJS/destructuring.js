function greetingService(name){
	var sayHi = function(){
		console.log('Hello '+ name + '!');
	}
	var sayBye = function(){
		console.log('Goodbye '+ name + '!');
	}
	
	return {
		sayHi,
		sayBye
	}

}

var {sayHi:hi} = greetingService('Jon');

hi();

// Examples:

function getValues() {
    return [getFirstValue(), getSecondValue()];
}

// to access them
var values = getValues();
var first = values[0];
var second = values[1];

// es6 syntax
const [first, second] = getValues();

function getValues() {
    return {
        first: getFirstValue(),
        second: getSecondValue(),
    };
}

// to access them
var values = getValues();
var first = values.first;
var second = values.second;

// es6 syntax
const {first, second} = getValues();
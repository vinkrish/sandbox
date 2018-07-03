function asyncMethod(message) {
	return new Promise(function (fulfill, reject) {
		setTimeout(function () {
			console.log(message);
			reject('error');
		}, 500)

	})
}

function findUser() {
	return asyncMethod('Find User')
}

function validateUser() {
	return asyncMethod('validate User')
}

function doStuff() {
	return asyncMethod('do stuff')
}
function error(err){
  throw(err);
}
function lastError(err){
  console.log(`we had an error: ${err}`);
}
asyncMethod('Open DB Connection')
	.then(findUser, error)
	.then(validateUser, error)
	.then(doStuff, error)
	.then(function () {}, lastError)

// Google Guides
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
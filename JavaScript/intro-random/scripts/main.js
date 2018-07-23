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
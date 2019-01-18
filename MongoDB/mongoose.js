var mongoose = require('mongoose');
var Schema = mongoose.Schema;

Sub-Documents:

// Pre-define sub-documents...
var subCategory = new Schema({
	name: String,
	description: String,
	isActive: Boolean
});
var subAnswers = new Schema({
	answerText: String,
	isCorrect: Boolean,
	displayOrder: Number
});
var subQuestions = new Schema({
	type: { type: String },
	text: String,
	answers: [ subAnswers] 
});

// Define main document schema...
var quizSchema= new Schema({
	name: String,
	description: String,
	categories: [ subCategory],
	questions: [ subQuestions]
});

// build Quiz model from schema
var Quiz = mongoose.model(‘Quiz’, quizSchema);

// document instance of model
var quiz1 = new Quiz({
	name: ‘Favorite Things Quiz’,
	description: ‘Demo Quiz’,
	categories: [{
		name: ‘Favorites’,
		description: ‘Favorite things quiz category’,
		isActive: true}]
// abbreviated...
});

// save document...
quiz1.save(callback);

var categories = [];
// Fill in the categories array
var cat1 = { name: 'Test1', description: 'Test 1 category', isActive: true };
var cat2 = { name: 'Test2', description: 'Test 2 category', isActive: true };

categories.push(cat1, cat2);

var questions = [];
// Add in some questions and answers...
var q1 = { type: 'Multiple-Choice', text: 'What is your favorite color?',
	answers: [
		{ answerText: 'Red', isCorrect: false, displayOrder: 1 },
		{ answerText: 'White', isCorrect: false, displayOrder: 2 },
		{ answerText: 'Blue', isCorrect: true, displayOrder: 3 }
	] };
var q2 = { type: 'Multiple-Choice', text: 'What is your favorite animal?',
	answers: [
		{ answerText: 'Dog', isCorrect: true, displayOrder: 1 },
		{ answerText: 'Cat', isCorrect: false, displayOrder: 2 },
		{ answerText: 'Squirrel', isCorrect: false, displayOrder: 3 }
	] };
	
questions.push(q1, q2);

// Create the parent quiz document –supply the categories and questions now...
var quiz2 = new Quiz({
	name: 'Example Quiz',
	description: 'Example Quiz long description...',
	categories: categories,
	questions: questions });
	
quiz2.save(callback);

Model.find(conditions, [fields], [options], [callback])

var Standup = require('../models/standup.model.js');

// No callback... Deferred execution
var query = Standup.find();

// With callback... Executes query immediately
Standup.find(function (err, results) {
	// handle the error... Or results here
});

// With callback and query conditions
Standup.find({ memberName: ‘David’ }, function (err, results) {
// handle the error... Or results here
});

// Limit the returned fields...
Standup.find({ memberName: ‘Mary’ }, ‘memberName impediment’,
function (err, results) {
	// handle the error... Or results here
});

Model.findOne(conditions, [fields], [options], [callback])

// No callback... No conditions...
var query = Standup.findOne();
query.exec(function (err, results) {
	// handle the error... Or results here
});

// With conditions...
var query = Standup.findOne({ memberName: ‘Mark’});

// With condition, no field filtering, and options...
var query = Standup.findOne({ memberName: ‘Bob’}, null, { limit: 10});

// Options examples... skip, limit, sort

Model.findById(id, [fields], [options], [callback])

var id = ‘3423dfasfasf2343wcsdff’;

// By Id... No conditions...
var query = Standup.findById(id);
query.exec(function (err, doc) {
	// handle the error... Or results here
});

// Same as above... Chained method calls...
Standup.findById(id).exec(function (err, results) { ...});

// By Id... Return every field BUT impediment...
var query = Standup.findById(id, ‘-impediment’);

// Example: find customers with discount >= 10%...
Customer.find({discount: {$gte: 10}, function(err, results) {
	if(err) throw err;
	console.log(results);
});

$gt greater than
$gte greater than or equal to
$in exists in
$lt less than
$lte less than or equal to
$ne not equal to
$nin does not exist

Model.where(path, [val])

Customer.find({discount: {$gte: 10, $lt: 20}, function(err, results) {
	if(err) throw err;
	console.log(results);
});

Customer.where(‘discount’).gte(10).lt(20).exec(function(err, results) {
	if(err) throw err;
	console.log(results);
});

// Chain where methods together...
Customer.where(‘discount’).gte(10).lt(20)
		.where(‘zipCode’, ‘12345’)
		.exec(function(err, results) {
			if(err) throw err;
			console.log(results);
});

Model.update(conditions, update, [options], [callback])

var condition = { memberName: ‘Mary’ };
var update = { impediment: ‘None –Mary no longer works here!’};

Standup.update(condition, update, function(err, numberAffected, rawResponse) {
	// Handle error or raw results here...
});

// finding a document –then updating it...
Standup.findOne({ memberName: ‘Mary’ }, function(err, doc) {
	// Handle errors here... Validate document results... Etc.
	if (err) return errorHandler(err);
	doc.impediment= ‘None –Mary won the lottery and is on an island now’;
	doc.save(function (err) {
		// Handle errors
		if (err) return errorHandler(err);
		console.log(‘Document updated’);
	});
});

// Example: update multiple documents that match condition
var condition = { firstName: ‘Bob’ };
var update = { firstName: ‘Robert’ };

Customer.update(condition, update, { multi: true},
function(err, numberAffected, raw) {
	// Handle error, returned # affected, and raw response from MongoDB...
});

Model.remove(conditions, [callback])

var condition = { memberName: ‘Mary’ };

Standup.remove(condition, function(err) {
	// Handle error here...
});

// Remove any document created on or after Halloween day
var gteDate= new Date(2014, 10, 31);
Standup.remove({ createdOn: { $gte: gteDate}}, function (err) {
	// Handle error here...
});

// Execute query w/o a callback function –does not wait on response
var query = Standup.remove({ createdOn: { $gte: gteDate}});
query.exec();

Strings - Required

// Required Validator Example
var customerSchema= new Schema({
	name: { type: String,required:true },
	address: String,
	city: String,
	state: String,
	country: String,
	zipCode: Number,
	createdOn: Date,
	isActive: Boolean
});

// Signature = required(required, [message])
// After the schema is defined –via the path API
customerSchema.path(‘city’).required(true, ‘Oops! Supply a city.’);

Strings – Match and Enum

// String –Match Validator Example
var reMatch = /[a-zA-Z]/;
var customerSchema= new Schema({
	name: { type: String,
			required:true,
			match: reMatch},
		// abbreviated...
});

// String –EnumValidator Example
var impediments = [‘none’,’minor’,’blocking’,’severe’];

var standupSchema = new Schema({
// abbreviated...
	impediment: { type: String,
				  required:true,
				  enum: impediments }
});

Numbers

// Customers must receive at least a 5% discount
var customerSchema= new Schema({
	name: String,
	// ...
	discount: { type: Number, min: 5}
});

// Customers not allowed more than 60% discount
var customerSchema= new Schema({
	name: String,
	// ...
	discount: { type: Number, max: 60}
});

// Customers allowed a discount between 5% and 60% only
var customerSchema= new Schema({
	name: String,
	// ...
	discount: { type: Number, min: 5, max: 60}
});

Middleware

// Middleware execution flow example...
var personSchema= new Schema({
	firstName: { type: String,required:true },
	lastName: { type: String,required:true },
	status: { type: String,required:true,default: ‘Alive’ }
});

// Build a model from the person schema
var Person = new mongoose.model(‘Person’, personSchema);

// New document instance of a Person model
var newPerson= new Person( { firstName: ‘John’, lastName: ‘Doe’ } );

// Save the document... Internal validation (required) kicks off now
newPerson.save(function (err) {
	if (err) return handleError(err);
	// saved the person document!
});

// Custom validation –method signature = validate(obj, [errorMsg])
var sizeValidator = [
	function (val) {
	return (val.length> 0 && val.length<= 50)
	},
	// Custom error text...
	'String must be between 1 and 50 characters long'];
var personSchema = new Schema({
	firstName: { type: String,required:true, validate:sizeValidator},
	lastName: { type: String,required:true, validate: sizeValidator},
	status: { type: String,required:true, default: ‘Alive’ }
});
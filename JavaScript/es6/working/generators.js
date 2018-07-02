function* bookRepo(num) {
	var list = [{
		title: 'War and Peace'
		}, {
		title: 'Wind in the Willows'
		}, {
		title: 'That Potter Book'
		}, {
		title: 'The other one too... '
		}, {
		title: 'A Book about Rings'
		}, {
		title: 'A Second Book About Rings'
		}, {
		title: 'The Last Rings Book....'
	}];

	var out = [];
	for (item of list) {
		out.push(item);
		if (out.length >= num) {
			num = yield out;
			out = [];
		}
	}
	yield out;
}

var repo = bookRepo(2);
console.log(repo.next());
console.log(repo.next(4));
console.log(repo.next(4));

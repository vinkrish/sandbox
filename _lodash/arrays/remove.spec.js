const remove = require('lodash/remove');
const pull = require('lodash/pull');
const pullAt = require('lodash/pullAt');

describe('remove', () => {
    it('should remove elements', () => {
        let array = [1, 2, 3, 4, 5, 6];
        let result = remove(array, n => n % 3 === 0);
        expect(result).toEqual([3, 6]);
        expect(array).toEqual([1, 2, 4, 5]);
    });
});

describe('pull', () => {
    it('should remove elements', () => {
        let array = [1, 2, 3, 4, 5];
        let result = pull(array, 1, 2);
        expect(result).toEqual([3, 4, 5]);
        expect(array).toEqual([3, 4, 5]);
    });
});

describe('pullAt', () => {
    it('should remove elements by index', () => {
        let array = [1, 2, 3, 4, 5];
        let result = pullAt(array, 0, 1);
        expect(result).toEqual([1, 2]);
        expect(array).toEqual([3, 4, 5]);
        result = pullAt([1, 2, 3, 4, 5], [0, 1]);
        expect(result).toEqual([1, 2]);
    });
});
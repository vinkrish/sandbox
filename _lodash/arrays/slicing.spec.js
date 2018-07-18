const slice = require('lodash/slice');
describe('slice', () => {
    it('should create a slice of the array', () => {
        let array = [1, 2, 3, 4, 5];
        expect(slice(array, 0, 2)).toEqual([1, 2]);
    });
    it('should support negative index', () => {
        let array = [1, 2, 3, 4, 5];
        expect(slice(array, -2, -1)).toEqual([4]);
        expect(slice(array, -2)).toEqual([4, 5]);
    });
});

const drop = require('lodash/drop');
const dropRight = require('lodash/dropRight');
describe('drop', () => {
    it('should drop elements from left', () => {
        let array = [1, 2, 3, 4, 5];
        expect(drop(array)).toEqual([2, 3, 4, 5]);
        expect(drop(array, 3)).toEqual([4, 5]);
    });
    it('should drop elements from right', () => {
        let array = [1, 2, 3, 4, 5];
        expect(dropRight(array)).toEqual([1, 2, 3, 4]);
        expect(dropRight(array, 3)).toEqual([1, 2]);
    });
});

const dropWhile = require('lodash/dropWhile');
const dropRightWhile = require('lodash/dropRightWhile');
describe('dropWhile', () => {
    it('should drop elements from left', () => {
        let array = [1, 2, 3, 4, 5];
        expect(dropWhile(array, n => n < 3)).toEqual([3, 4, 5]);
    });
    it('should drop elements from right', () => {
        let array = [1, 2, 3, 4, 5];
        expect(dropRightWhile(array, n => n < 3)).toEqual([1, 2, 3, 4, 5]);
    });
});

const take = require('lodash/take');
const takeRight = require('lodash/takeRight');
describe('take', () => {
    it('should take elements from left', () => {
        let array = [1, 2, 3, 4, 5];
        expect(take(array)).toEqual([1]);
        expect(take(array, 3)).toEqual([1, 2, 3]);
    });
    it('should take elements from right', () => {
        let array = [1, 2, 3, 4, 5];
        expect(takeRight(array)).toEqual([5]);
        expect(takeRight(array, 3)).toEqual([3, 4, 5]);
    });
});

const takeWhile = require('lodash/takeWhile');
const takeRightWhile = require('lodash/takeRightWhile');
describe('takeWhile', () => {
    it('should take elements from left', () => {
        let array = [1, 2, 3, 4, 5];
        expect(takeWhile(array, n => n < 3)).toEqual([1, 2]);
    });
    it('should take elements from right', () => {
        let array = [1, 2, 3, 4, 5];
        expect(takeRightWhile(array, n => n < 3)).toEqual([]);
    });
});
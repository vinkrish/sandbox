const concat = require('lodash/concat');
describe('concat', () => {
    it('should concatenate elements', () => {
        expect(concat([1, 2, 3], 4, 5)).toEqual([1, 2, 3, 4, 5]);
    });
    it('should concatenate arrays', () => {
        expect(concat([1, 2, 3], [4, 5], [[6]]))
            .toEqual([1, 2, 3, 4, 5, [6]]);
    });
});

const join = require('lodash/join');
describe('join', () => {
    it('should create strings', () => {
        expect(join([1, 2, 3])).toEqual('1,2,3');
        expect(join([1, 2, 3], '#')).toEqual('1#2#3');
    });
});

const reverse = require('lodash/reverse');
describe('reverse', () => {
    it('should reverse arrays', () => {
        let array = ['a', 'b', 'c'];
        let result = reverse(array);
        expect(result).toEqual(['c', 'b', 'a']);
        expect(array).toEqual(['c', 'b', 'a']);
    });
});
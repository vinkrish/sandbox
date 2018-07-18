const first = require('lodash/first');
describe('first', () => {
    it('should support non-empty arrays', () => {
        expect(first([1, 2, 3])).toEqual(1);
    });
    it('should support empty arrays', () => {
        expect(first([])).toBeUndefined();
    });
});

const last = require('lodash/last');
describe('last', () => {
    it('should support non-empty arrays', () => {
        expect(last([1, 2, 3])).toEqual(3);
    });
    it('should support empty arrays', () => {
        expect(last([])).toBeUndefined();
    });
});

const initial = require('lodash/initial');
describe('initial', () => {
    it('should support arrays with more than one elements', () => {
        expect(initial([1, 2, 3])).toEqual([1, 2]);
    });
    it('should support arrays with one element', () => {
        expect(initial([1])).toEqual([]);
    });
    it('should support empty arrays', () => {
        expect(initial([])).toEqual([]);
    });
});

const tail = require('lodash/tail');
describe('tail', () => {
    it('should support arrays with more than one elements', () => {
        expect(tail([1, 2, 3])).toEqual([2, 3]);
    });
    it('should support arrays with one element', () => {
        expect(tail([1])).toEqual([]);
    });
    it('should support empty arrays', () => {
        expect(tail([])).toEqual([]);
    });
});

const groupBy = require('lodash/groupBy');
const keyBy = require('lodash/keyBy');

describe('groupBy', () => {
    it('should support arrays', () => {
        expect(groupBy([1, 2, 3], n => n > 1)).toEqual({
            true: [2, 3],
            false: [1],
        });
    });
    it('should support objects', () => {
        expect(groupBy({
            a: 1,
            b: 1,
            c: 2,
        }, val => val / 2)).toEqual({
            1: [2],
            0.5: [1, 1],
        });
    });
    it('should support strings', () => {
        expect(groupBy('hello', char => char === 'l')).toEqual({
            true: ['l', 'l'],
            false: ['h', 'e', 'o'],
        });
    });
});

describe('keyBy', () => {
    it('should support arrays', () => {
        expect(keyBy([1, 2, 3], n => n > 1)).toEqual({
            true: 3,
            false: 1,
        });
    });
    it('should support objects', () => {
        expect(keyBy({
            a: 1,
            b: 1,
            c: 2,
        }, val => val / 2)).toEqual({
            1: 2,
            0.5: 1,
        });
    });
    it('should support strings', () => {
        expect(keyBy('hello', char => char === 'l')).toEqual({
            true: 'l',
            false: 'o',
        });
    });
});
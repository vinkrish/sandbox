const each = require('lodash/each');
const every = require('lodash/every');
const some = require('lodash/some');

describe('each', () => {
    it('should support basic iteration', () => {
        let sum = 0;
        each([1, 2, 3], val => sum += val);
        expect(sum).toEqual(6);
    });
});

describe('every', () => {
    it('should support arrays with functions', () => {
        let result = every([1, 2, 3, 4], n => n % 2 === 0);
        expect(result).toBe(false);
    });
    it('should support arrays with property value', () => {
        const fruits = [
            {
                name: 'apple',
                price: 1.99,
                onSale: true
            },
            {
                name: 'orange',
                price: 0.99,
                onSale: true
            }
        ];
        let result = every(fruits, ['onSale', true]);
        expect(result).toBe(true);
    });
    it('should support objects', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 3
        };
        let result = every(obj, n => n % 2 === 0);
        expect(result).toBe(false);
    });
    it('should support strings', () => {
        let result = every('aaaa', c => c === 'a');
        expect(result).toBe(true);
    });
});

describe('some', () => {
    it('should support arrays', () => {
        let result = some([1, 2, 3, 4], n => n % 2 === 0);
        expect(result).toBe(true);
    });
    it('should support strings', () => {
        let result = some('hello', c => c === 'x');
        expect(result).toBe(false);
    });
});
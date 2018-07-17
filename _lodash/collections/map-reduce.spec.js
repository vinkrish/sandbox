const map = require('lodash/map');
const reduce = require('lodash/reduce');
const reduceRight = require('lodash/reduceRight');

describe('map', () => {
    it('should support arrays', () => {
        expect(map([1, 2, 3], n => n * 2)).toEqual([2, 4, 6]);
    });
    it('should support iteratee syntax', () => {
        const users = [
            {
                name: 'Alex',
            },
            {
                name: 'Bob',
            }
        ];
        expect(map(users, 'name')).toEqual(['Alex', 'Bob']);
        expect(map(users, { name: 'Alex' })).toEqual([true, false]);
    });
});

describe('reduce', () => {
    it('should support no initial value', () => {
        let result = reduce([1, 2, 3],
            (accumulator, value) => accumulator + value);
        expect(result).toEqual(6);
    });
    it('should support initial value', () => {
        let result = reduce([1, 2, 3],
            (accumulator, value) => accumulator + value, 100);
        expect(result).toEqual(106);
    });
});

describe('reduceRight', () => {
    it('should support strings', () => {
        let result = reduceRight('hello',
            (accumulator, value) => accumulator.toUpperCase() + value);
        expect(result).toEqual('OLLEh');
        result = reduce('hello',
            (accumulator, value) => accumulator.toUpperCase() + value);
        expect(result).toEqual('HELLo');
    });
});
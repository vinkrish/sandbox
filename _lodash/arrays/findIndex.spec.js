const findIndex = require('lodash/findIndex');
const findLastIndex = require('lodash/findLastIndex');

describe('findIndex', () => {
    it('should support property predicate', () => {
        expect(findIndex(['a', 'da', 'c'], ['length', 2])).toEqual(1);
    });
    it('should support object predicate', () => {
        expect(findIndex([
            {
                name: 'Alex',
                vip: false
            },
            {
                name: 'Bob',
                vip: true
            }
        ], 'vip')).toEqual(1);
    });
});

describe('findLastIndex', () => {
    it('should support function predicate', () => {
        let result = findLastIndex(['a', 'b', 'c'], char => char < 'd');
        expect(result).toEqual(2);
    });
});
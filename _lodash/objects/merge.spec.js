const merge = require('lodash/merge');
describe('merge', () => {
    it('should assign properties recursively', () => {
        let result = merge({ a: { b: 1 } }, { a: { c: 2 } });
        expect(result).toEqual({ a: { b: 1, c: 2 } });
    });
});

const mergeWith = require('lodash/mergeWith');
const isArray = require('lodash/isArray');
describe('mergeWith', () => {
    it('should assign properties recursively using functions', () => {
        let source = { a: { b: [1] } };
        let target = { a: { b: [2, 3] } };
        let result = mergeWith(source, target, (targetValue, sourceValue) => {
            if (isArray(targetValue)) {
                return targetValue.concat(sourceValue).join();
            }
        });
        expect(result).toEqual({ a: { b: '1,2,3' } });
    });
});
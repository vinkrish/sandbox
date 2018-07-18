const has = require('lodash/has');
describe('has', () => {
    it('should check existence of properties', () => {
        let object = { a: 1 };
        expect(has(object, 'a')).toBe(true);
    });
});

const hasIn = require('lodash/hasIn');
function A() {
    this.a = function () { };
}
A.prototype.b = function () { };
describe('hasIn', () => {
    it('should check existence of inherited properties', () => {
        expect(hasIn(new A(), 'b')).toBe(true);
    });
});

const keys = require('lodash/keys');
const keysIn = require('lodash/keysIn');

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.size = function () {
    return this.width * this.height;
};
describe('keys', () => {
    it('should get properties names', () => {
        let rect = new Rectangle(10, 5);
        expect(keys(rect)).toEqual(['width', 'height']);
        expect(keysIn(rect)).toEqual(['width', 'height', 'size']);
    });
});

const values = require('lodash/values');
const valuesIn = require('lodash/valuesIn');
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.size = function () {
    return this.width * this.height;
};
describe('values', () => {
    it('should get properties values', () => {
        let rect = new Rectangle(10, 5);
        expect(values(rect)).toEqual([10, 5]);
        expect(valuesIn(rect)).toEqual([10, 5, Rectangle.prototype.size]);
    });
});

const mapValues = require('lodash/mapValues');
describe('mapValues', () => {
    it('should transform property values', () => {
        let result = mapValues(
            { a: 'hello', b: 'world' },
            str => str + ' rocks');
        expect(result).toEqual({ a: 'hello rocks', b: 'world rocks' });
    });
});

const mapKeys = require('lodash/mapKeys');
describe('mapKeys', () => {
    it('should transform property keys', () => {
        let result = mapKeys(
            { a: 'hello', b: 'world' },
            (val, key) => 'key_' + key);
        expect(result).toEqual({ 'key_a': 'hello', 'key_b': 'world' });
    });
});

const toPairs = require('lodash/toPairs');
describe('toPairs', () => {
    it('should transform objects into name-value pairs', () => {
        let result = toPairs({ a: 1, b: 2 });
        expect(result).toEqual([['a', 1], ['b', 2]]);
    });
});

const at = require('lodash/at');
describe('at', () => {
    it('should get property values as array', () => {
        let object = { a: 1, b: 2 };
        expect(at(object, 'a', 'b')).toEqual([1, 2]);
    });
});

const findKey = require('lodash/findKey');
const findLastKey = require('lodash/findLastKey');
describe('findKey', () => {
    it('should find the key', () => {
        let object = {
            a: 1,
            b: 2,
            c: 3,
        };
        expect(findKey(object, val => val > 1)).toEqual('b');
        expect(findLastKey(object, val => val > 1)).toEqual('c');
    });
});
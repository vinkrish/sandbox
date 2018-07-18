const get = require('lodash/get');
describe('get', () => {
    it('should get property value by path', () => {
        let obj = {
            a: 1,
            b: {
                c: ['alex', 'bob'],
                d: [
                    {
                        e: 1,
                        f: 'hello',
                    }
                ],
            }
        };
        expect(get(obj, 'a')).toEqual(1);
        expect(get(obj, 'b.c[1]')).toEqual('bob');
        expect(get(obj, 'b.d.g', 'empty')).toEqual('empty');
    });
});

const set = require('lodash/set');
describe('set', () => {
    it('should set property value by path', () => {
        let obj = {
            a: 1,
        };
        let result = set(obj, 'a', 2);
        expect(result).toEqual({ a: 2 });
        result = set(obj, 'b.c', 'hello');
        expect(result).toEqual({ a: 2, b: { c: 'hello' } });
        result = set(obj, 'a.d', 'world');
        expect(result).toEqual({ a: { d: 'world' }, b: { c: 'hello' } });
    });
});

const update = require('lodash/update');
describe('update', () => {
    it('should update property values', () => {
        let obj = {
            a: 1,
        };
        let result = update(obj, 'a', n => n * 10);
        expect(result).toEqual({ a: 10 });
    });
});
// -> {a: 10}
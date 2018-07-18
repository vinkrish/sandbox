const functions = require('lodash/functions');
describe('functions', () => {
    it('should list function names', () => {
        let obj = {
            func1: function () { },
            func2: function () { },
        };
        expect(functions(obj)).toEqual(['func1', 'func2']);
    });
});

const functionsIn = require('lodash/functionsIn');
function A() {
    this.a = function () { };
}
A.prototype.b = function () { };
describe('functionsIn', () => {
    it('should list inherited functions', () => {
        expect(functionsIn(new A())).toEqual(['a', 'b']);
    });
});
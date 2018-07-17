const matches = require('lodash/matches');
const matchesProperty = require('lodash/matchesProperty');
const property = require('lodash/property');
const find = require('lodash/find');

const users = require('../shared/users');

describe('matches', () => {
    it('should match strings', () => {
        let f = matches('hello');
        expect(f('world')).toBe(false);
        expect(f('hello')).toBe(true);
    });
    it('should match objects', () => {
        let f = matches([{ a: 1 }, { b: 2 }]);
        expect(f([{ a: 1 }, { b: 3 }])).toBe(false);
    });
});

describe('matchesProperty', () => {
    it('should match property name', () => {
        let f = matchesProperty('name', 'Alex');
        expect(f({ name: 'Alex' })).toBe(true);
    });
    it('should match built-in property', () => {
        let f = matchesProperty('length', 5);
        expect(f('hello')).toBe(true);
    });
    it('should match nested path', () => {
        let f = matchesProperty('user.name', 'Alex');
        expect(f({ user: { name: 'Alex' } })).toBe(true);
    });
});

describe('property', () => {
    it('should extract property value', () => {
        let f = property('name');
        expect(f({ name: 'Alex' })).toBe('Alex');
    });
});

describe('find with different predicates', () => {
    it('should find with a function', () => {
        let user = find(users, user => user.age > 18);
        expect(user).toBeDefined();
        expect(user.name).toBe('Alex');
    });
    it('should find with a property value', () => {
        let user = find(users, 'is_premium');
        expect(user).toBeDefined();
        expect(user.name).toBe('Bob');
    });
    it('should find with an object', () => {
        let user = find(users, { name: 'Alex' });
        expect(user).toBeDefined();
        expect(user.name).toBe('Alex');
    });
});
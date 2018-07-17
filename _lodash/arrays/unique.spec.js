const uniq = require('lodash/uniq');
const uniqBy = require('lodash/uniqBy');
const uniqWith = require('lodash/uniqWith');
const sortedUniq = require('lodash/sortedUniq');
const sortedUniqBy = require('lodash/sortedUniqBy');

describe('uniq', () => {
    it('should remove duplicates', () => {
        expect(uniq([3, 2, 5, 3, 2])).toEqual([3, 2, 5]);
    });
});

describe('uniqBy', () => {
    it('should remove duplicates', () => {
        let result = uniqBy(
            [{ 'name': 'Alex' }, { 'name': 'Bob' }, { 'name': 'Alex' }],
            'name'
        );
        expect(result.length).toEqual(2);
    });
});

describe('uniqWith', () => {
    it('should remove duplicates', () => {
        let result = uniqWith(
            [{ 'name': 'Alex' }, { 'name': 'David' }, { 'name': 'Marry' }],
            (v1, v2) => v1.name.length === v2.name.length
        );
        expect(result.length).toEqual(2);
    });
});

describe('sortedUniq & sortedUniqBy', () => {
    it('should remove duplicates', () => {
        expect(sortedUniq([1, 2, 2, 3])).toEqual([1, 2, 3]);
        expect(sortedUniqBy([1, 2, 2, 3], n => 1)).toEqual([1]);
    });
});
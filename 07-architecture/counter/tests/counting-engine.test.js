// tests/counting-engine.test.js
import CountingEngine from '../counting-engine.js';

describe('Counting engine initialises', () => {
    describe('with invalid initial value ', () => {
        const cases = [
            "foo", NaN, null, new Date()
        ];
        test.each(cases)('when %p is provided', value => {
            let engine = new CountingEngine(value);
            expect(engine.initialValue).toBe(0);
        });
    });
    describe('with valid initial value ', () => {
        const cases = [
            0, 1, 5, 99, 9999999999
        ];
        test.each(cases)('when %p is provided', value => {
            let engine = new CountingEngine(value);
            expect(engine.initialValue).toBe(value);
        });
    });
});

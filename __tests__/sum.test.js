//This example is from https://jestjs.io/docs/getting-started
const sum = require('../src/sum');
test('adds 1 and 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
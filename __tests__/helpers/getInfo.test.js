const getInfo = require('../../src/helpers/getInfo');
//TODO: write a test that checks that the names are joining correctly
//More information can be found here: https://jestjs.io/docs/getting-started
//You might want to have a go at using some of Jest's other matchers: https://jestjs.io/docs/expect
test('test name is joining', () => {
    const ok = {
        country: "Spain",
        currency: "EUR",
        nestedObject: {
            name: "this is the name"
        },
        name: "this is the name"
    }
    expect(getInfo(ok)).toBe( "Spain, EUR, this is the name, this is the name");
});
getInfo()
//TODO: write a test if no data is passed to the function (returns "none")

test('checking none', () => {
    expect(getInfo(null)).toBe("none");
});
import { getInfo } from "../../src/helpers/getInfo";

/*

2. This test suite is building up on the unit tests you learned from sum.test.js

TODO: write a test that checks that the expected value (specify what this is) is returned when we pass null in

1. Have a look at the helper function getInfo and try and understand
what it is doing. Have a look at where it is used.
2. Write a description of the test and what you expect it to do (hint, it's
in the TODO).
3. Pass null into the assertion's function and write the appropriate expectation.
4. Run the test and see if it passes. If not, try and figure out why.
You might have forgotten a step. See the sum.test.js and figure out the missing piece.
*/



test('I want to get the object of getinfo that would be none', () => {
  expect(getInfo(null)).toBe("none");
});


//TODO: write a test that checks that the names are joining correctly
/*
1. Have a look at the helper function getInfo and try and understand what it is doing.
  Have a look at where it is used. (Spain is a good country to check for this.)
  2. Have a look at what the data from the API looks like by using developer's tools in the browser.
  Go to /search and look up a country. In the Network tab, you can find the response from the API that contains
  the 'Object'.
  3. In the line before the assertion and expectation, write a mock object, something like from the API.
  4. Write an appropriate assertion and expectation, passing in your mock object.
  5. Run the tests. If it fails, try and figure out why.
  6. For extra work, try and write another test for both cases, if there is a 'name' in the object, and one without.
*/
const country = { name: "spain" };
const languages = {
  "spa": "Spanish",
  "cat": "Catalan",
  "eus": "Basque",
  "glc": "Galician"
}
test('getinfo object that would be spain', () => {
  expect(getInfo(country)).toBe("spain");
});

test('getinfo object that would check the languages', () => {
  expect(getInfo(languages)).toBe("Spanish, Catalan, Basque, Galician");
});

/*
More information can be found here: https://jestjs.io/docs/getting-started
You might want to have a go at using some of Jest's other matchers: https://jestjs.io/docs/expect

If you are stuck with figuring out the data, here are some tips:
-  The method is called like so: `getInfo(cty.languages)` and `getInfo(cty.currencies)`
- The response from the API is large, but there is a key called `languages` and `currencies`.
- Object.values returns an array/list that would look like this:
Array(2) [ {…}, {…} ]
   0: Object { name: "Euro", symbol: "€" }
   1: Object { spa: "Spanish", cat: "Catalan", eus: "Basque" ... }
- .map goes over each value in the list and applies a change to it, based on a condition.
- 'languages' doesn't contain a key called 'name', but 'currencies' does.
*/


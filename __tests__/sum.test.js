//This example is from https://jestjs.io/docs/getting-started -- I've just changed the import method for React
import { sum } from '../src/sum';

test('adds 1 and 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

/*
A simple test is made up of a description and an expectation. The expectation above makes logical
sense (1 plus 2 usually equals 3!) so we don't want to change it.

TODO: Beginner exercises below

1. Run this test to see it fail (have a look at the package.json for the scripts!)
2. Identify why it has failed.
3. Go into the code (have a look at the import statement to find the file) and fix the component.
4. Run the test again.

If you'd like, try writing a new test in a new test file for a different component called 'divide'.
1. Write an expectation that makes sense and then run the test.
2. Identify the new reason for failure.
3. Try and fix the test to make it pass.
4. Write two other expectations for the same function. How can we test for something that we don't expect,
like we don't expect 9 / 3 = 5.
(Have a look at other matchers here - https://jestjs.io/docs/using-matchers)
*/
//Look at this doc to help you write the test: https://jestjs.io/docs/snapshot-testing

//TODO: write a snapshot test that captures the Search.js component

import renderer from 'react-test-renderer';
import { Search } from '../../src/components/Search';

test('Search box renders correctly', () => {
    expect("REPLACE_ME").toBe("REPLACE_ME");
});

//TODO: write a test that checks that the search field has some text typed in

//This is a hard one! You'll need to use Queries to find the elements you're looking for:
// https://testing-library.com/docs/queries/about/
// And you'll need to simulate someone clicking on the button:
// https://testing-library.com/docs/dom-testing-library/api-events

//Start here: https://testing-library.com/docs/example-findByText
//Look for the line that says: 'describe('findByText Examples', () => {'

test('when a user types in the search bar, the search bar contains text', async () => {
    expect("REPLACE_ME").toBe("REPLACE_ME");
});

//TODO: write a test to check that the Error component appears if no data 
//is found from the call to the API. You will need another mock.
//THIS IS THE HARDEST -- try the getCountryByName.test.js first!

test('when no countries are found, an error message appears', async () => {
    expect("REPLACE_ME").toBe("REPLACE_ME");
});
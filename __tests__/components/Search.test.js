//Look at this doc to help you write the test: https://jestjs.io/docs/snapshot-testing

//TODO: write a snapshot test that captures the Search.js component

import renderer from 'react-test-renderer'; //this is for the snapshot testing
import { cleanup, fireEvent, render } from '@testing-library/react'; //this is for the DOM testing
import { screen } from '@testing-library/dom';
import { Search } from '../../src/components/Search';

test('Search box renders correctly in the snapshot', () => {
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
    // Arrange: render search bar
    const searchBox = render(
        <Search />
    );

    const searchCountryField = screen.getByPlaceholderText('Search a country')
    await fireEvent.change(searchCountryField, { target: { value: 'Spain' } })

    const newSearchCountryField = screen.getByDisplayValue("Spain").value;

    expect(newSearchCountryField).toBe("Spain");
});
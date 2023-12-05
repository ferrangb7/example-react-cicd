import renderer from 'react-test-renderer'; //you will need this for the snapshot test
import { cleanup, fireEvent, render } from '@testing-library/react'; //this is for the DOM testing
import { screen } from '@testing-library/dom';//this is for the DOM testing
import { Search } from '../../src/components/Search';


//TODO: write a test that checks that the search field has some text typed in

//You'll need to use Queries to find the elements you're looking for:
// https://testing-library.com/docs/queries/about/
// And you'll need to simulate someone clicking on the button:
// https://testing-library.com/docs/dom-testing-library/api-events

//Start here: https://testing-library.com/docs/example-findByText
//Look for the line that says: 'describe('findByText Examples', () => {'

test('should check that the search field has some text typed in', async () => {
    const { getByDisplayValue } = render(<Search value = ""/>)
    const input = getByDisplayValue('')
    const value = 'entered value'

    fireEvent.change(input, {
        target: {
            value
        }
    })

    expect(input.value).toBe('entered value');
});

//TODO: write a snapshot test that captures the Search.js component

//Look at this doc to help you write the test: https://jestjs.io/docs/snapshot-testing

test('Search box renders correctly', () => {
    const reactTree = renderer
            .create(<Search/>)
            .toJSON()
    expect(reactTree).toMatchSnapshot();
});


//TODO: write a test to check that the Error component appears if no data 

//is found from the call to the API. You will need another mock.

//This is is a hard test to write - try the getCountryByName.test.js test first!

test('should to check that the Error component appears if no data', async () => {
    

    expect("REPLACE_ME").toEqual("REPLACE_ME");
});




/*
4. This test suite is all about snapshot testing the UI.
*/

import renderer from 'react-test-renderer'; //you will need this for the snapshot test
import { cleanup, fireEvent, render } from '@testing-library/react'; //this is for the DOM testing
import { screen } from '@testing-library/dom';//this is for the DOM testing
import { Search } from '../../src/components/Search';

//TODO: write a test that checks that the search field has some text typed in
/*
Here are some documents to help you get started:

You'll need to use Queries to find the elements you're looking for:
https://testing-library.com/docs/queries/about/

You'll need to simulate someone clicking on the button:
https://testing-library.com/docs/dom-testing-library/api-events

Start here: https://testing-library.com/docs/example-findByText
Look for the line that says: 'describe('findByText Examples', () => {'
*/

test('REPLACE_ME', async () => {
    expect("REPLACE_ME").toBe("REPLACE_ME");
});

//TODO: write a snapshot test that captures the Search.js component
//Look at this doc to help you write the test: https://jestjs.io/docs/snapshot-testing

test('REPLACE_ME', () => {
    expect("REPLACE_ME").toBe("REPLACE_ME");
});
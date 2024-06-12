import renderer from 'react-test-renderer'; //you will need this for the snapshot test
import { cleanup, fireEvent, render } from '@testing-library/react'; //this is for the DOM testing
import { screen } from '@testing-library/dom';//this is for the DOM testing
import { Search } from '../../src/components/Search';

/*
4. This test suite is all about snapshot testing! Testing the UI can be hard, but we can use snapshot testing
to make sure that nothing gets moved around or changed unexpectedly.
*/

//TODO: write a snapshot test that checks that the Search.js component actually renders, then change something to see the test fail
//Look at this doc to help you write the test: https://jestjs.io/docs/snapshot-testing

test("renders correctly", () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test("renders correctly", () => {
//   const tree = renderer.create(<Search />).toJSON();
//   expect(tree).toMatchSnapshot();
// });


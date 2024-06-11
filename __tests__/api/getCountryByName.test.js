/*
5. This test suite is all about creating a mock to test third-party behaviours.

TODO: write a mock to simulate data being fetched from the API
Use this to help: https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
*/

import axios from 'axios'
import {getCountryByName } from "../../src/api/getCountryByName";

jest.mock('axios');

test('REPLACE_ME', async () => { //async means that we need to wait for something to happen (see await below)
  /* Arrange: mock result of axios.get method.

  This should be similar to the object you're getting back from the API.
   If you're stuck, have a look at the response from the API with devtools and have a look at the component to see
  what it is expecting
  */
  axios.get.mockResolvedValue("REPLACE_ME");
  // Act: use the component under test to get countries by name
  const countries = await getCountryByName('REPLACE_ME'); //await is paired with async, this is where we wait for the result from the API

  // Assert: check that the result is the expected one by checking the length and the common name
//  expect(countries.length).toEqual('REPLACE_ME');
//  expect(countries[0].name.common).toEqual('REPLACE_ME');
});

//TODO: If you found that easy, try writing simulating the instance where a user writes 'United' and gets back multiple countries

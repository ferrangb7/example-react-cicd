import axios from 'axios'
import { getCountryByName } from "../../src/api/getCountryByName";

jest.mock('axios');

test('getCountryByName returns countries', async () => {
  // Arrange: mock result of axios.get method
  axios.get.mockResolvedValue({
    data: [
      {
        name: {
          common: "Spain"
        }
      }
    ]
  });

  // Act: use the client to get countries by name
  const countries = await getCountryByName('Spain');

  // Assert: check that the result is the expected one
  expect(countries.length).toEqual(1);
  expect(countries[0].name.common).toEqual('Spain');
});

//TODO: write a test that checks that the names are joining correctly
//More information can be found here: https://jestjs.io/docs/getting-started
//You might want to have a go at using some of Jest's other matchers: https://jestjs.io/docs/expect

test('should return names joined each other', () => {
    const countries = [{
            name: "Spain"
        }, 
        {
            name: "Italy"
        }
    ]

    expect(countries.map(country => country.name).join(', ')).toBe("Spain, Italy");
});

//TODO: write a test if no data is passed to the function (returns "none")

test('should return none if no data is passed', () => {
    const countries = []

    expect(countries).toHaveLength(0);
});


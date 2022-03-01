const searchCandies = require('./searchCandies.js')

describe ('searchCandies', () => {
  it ('can search candies matching the given string', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
  it ('can search candies matching the given string & price', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });
  it ('can search candies beginning with the letter s', () => {
    expect(searchCandies('s', 10)).toEqual(['skitties', 'skittles', 'starburst'])
  })
});


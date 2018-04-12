import { addHouses } from '../actions/';
import { mockResponse } from '../mockData/mockData';

describe('action creator', () => {

  it('should create an action', () => {

    const houses = mockResponse;
    const expected = { type: 'ADD_HOUSES', houses }
    
    expect(addHouses(houses)).toEqual(expected);
  });

})

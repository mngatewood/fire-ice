import { housesReducer } from './housesReducer';
import { addHouses } from '../actions';
import { mockResponse } from '../mockData/mockData';

describe('houses reducer', () => {

  it('should return a new state', () => {
    initialState = [];
    expectedState = mockResponse;
    houses = mockResponse;
    expect(housesReducer(addHouses).toEqual(expectedState))
  })

  it('should return a default state', () => {
    initialState = [];
    expectedState = mockResponse;
    houses = mockResponse;
    expect(housesReducer(addHouses).toEqual(expectedState))

  })


});
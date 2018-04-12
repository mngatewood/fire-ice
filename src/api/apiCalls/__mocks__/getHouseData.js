import { mockResponse } from '../../../mockData/mockData';

export const getHouseData = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockResponse);
});

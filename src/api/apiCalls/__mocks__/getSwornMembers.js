import { mockResponse } from '../../../mockData/mockData';

export const getSwornMembers = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockResponse);
});

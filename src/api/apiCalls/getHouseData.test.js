import { getHouseData } from './getHouseData';
import { getSwornMembers } from './getSwornMembers';
import { mockResponse } from '../../mockData/mockData';

jest.mock('./getSwornMembers');


it('calls fetch', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })
  );
  getHouseData();
  expect(fetch).toHaveBeenCalled();
});
import { getHouseData } from './getHouseData';
import { getSwornMembers } from './getSwornMembers';
import { mockResponse } from '../../mockData/mockData';

jest.mock('./getSwornMembers');

describe('getHouseData', () => {

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

  it.skip('throws an error message on reject', () =>{
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false,
      })
    );
    expect(getHouseData()).rejects.toEqual("Error retrieving house data");
  })

});


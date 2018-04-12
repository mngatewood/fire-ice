import React from 'react';
import App from '../App/App';
import { shallow } from 'enzyme';
// import { getHouseData } from '../../api/apiCalls/getHouseData'
// jest.mock('../../api/apiCalls/getHouseData');

describe('app', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

})

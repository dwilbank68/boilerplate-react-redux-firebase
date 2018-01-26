import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboard from './Dashboard';

test('should render ExpenseDashboard', () => {
    const wrapper = shallow(<ExpenseDashboard/>);
    expect(wrapper).toMatchSnapshot();
})

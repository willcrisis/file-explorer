import React from 'react';
import { mount } from 'enzyme';
import Title from './Title';

describe('Title', () => {
    it('should render the correct text', () => {
        const wrapper = mount((
            <Title>My title</Title>
        ));

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toBe('My title');
    });
})
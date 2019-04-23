import React from 'react';
import { mount } from 'enzyme';
import Tag from './Tag';

const onClick = jest.fn();

const defaultTag = {
    tag: 'anything',
    files: '10',
}

describe('Tag tile', () => {
    function setUp(overrides = {}) {
        const wrapper = mount((
            <Tag 
                tag={defaultTag}
                onClick={onClick}
                {...overrides}
            />
        ));

        const link = wrapper.find('Link');

        return { wrapper, link }
    }

    it('should render the correct tag name', () => {
        const { link } = setUp();
        expect(link.exists()).toBe(true);
        expect(link.text()).toBe('anything');
    });
    
    it('should render the correct file number', () => {
        const { wrapper } = setUp();
        expect(wrapper.text()).toBe('anything (10)');
    });

    it('should call function when clicked', () => {
        const { link } = setUp();
        link.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
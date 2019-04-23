import React from 'react';
import { mount } from 'enzyme';
import File from './File';

const defaultFile = {
    id: 'file',
    name: 'A file'
};

describe('File tile', () => {
    function setUp(overrides = {}) {
        const wrapper = mount((
            <File
                file={defaultFile}
                {...overrides}
            />
        ));

        const fileName = wrapper.find('Link');

        return { wrapper, fileName };
    }

    it('should render the icon', () => {
        const { wrapper } = setUp();
        expect(wrapper.find('Image').exists()).toBe(true);
    });

    it('should render the name', () => {
        const { fileName } = setUp();

        expect(fileName.exists()).toBe(true);
        expect(fileName.text()).toBe('A file');
    });
});
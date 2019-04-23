import React from 'react';
import { mount } from 'enzyme';
import TagList from './TagList';
import Tag from './Tag';
import Title from '../common/Title/Title';

const defaultData = [{
    tag: 'tag1',
    files: '2'
}, {
    tag: 'tag2',
    files: '5'
}];

const onSelect = jest.fn();

describe('Tag list', () => {
    function setUp(overrides = {}) {
        const wrapper = mount((
            <TagList 
                data={defaultData}
                onSelect={onSelect}
                {...overrides}
            />
        ));

        const title = wrapper.find(Title);

        const tags = wrapper.find(Tag);

        return { wrapper, title, tags };
    }

    it('should render the correct title', () => {
        const { title } = setUp();
        expect(title.exists()).toBe(true);
        expect(title.text()).toBe('Tags');
    });

    it('should render all tags', () => {
        const { tags } = setUp();

        expect(tags.exists()).toBe(true);
        expect(tags.length).toBe(2);
    })
})
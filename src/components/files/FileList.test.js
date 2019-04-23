import React from 'react';
import { mount } from 'enzyme';
import FileList from './FileList';
import File from './File';
import Paginator from './Paginator';
import Title from '../common/Title/Title';

const onPaginate = jest.fn();

const defaultData = {
    total_files: 3,
    files: [
        { id: '1', name: 'file 1' },
        { id: '2', name: 'file 2' },
        { id: '3', name: 'file 3' },
    ],
};

describe('File list', () => {
    function setUp(overrides = {}) {
        const wrapper = mount((
            <FileList
                data={defaultData}
                currentPage={1}
                onPaginate={onPaginate}
                {...overrides}
            />
        ));

        const title = wrapper.find(Title);
        const list = wrapper.find('List');
        const paginator = wrapper.find(Paginator);

        return { wrapper, title, list, paginator };
    }

    describe('Title', () => {
        it('should render the default title if no tag is selected', () => {
            const { title } = setUp();
            expect(title.text()).toBe('Search Results - No Tag Selected');
        });

        it('should render the selected tag name', () => {
            const { title } = setUp({ selectedTag: 'anything' });
            expect(title.text()).toBe('Search Results - "anything" Tag');
        });
    });

    it('should have rendered all items on the list', () => {
        const { list } = setUp();
        expect(list.exists()).toBe(true);
        expect(list.find(File).length).toBe(3);
    });

    it('should have rendered the paginator', () => {
        const { paginator } = setUp();
        expect(paginator.exists()).toBe(true);
        expect(paginator.prop('total')).toBe(3);
        expect(paginator.prop('currentPage')).toBe(1);
    });
});
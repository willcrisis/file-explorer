import React from 'react';
import { mount } from 'enzyme';
import Paginator from './Paginator';

const onPaginate = jest.fn();

describe('Paginator', () => {
    function setUp(overrides = {}) {
        const wrapper = mount((
            <Paginator
                currentPage={1}
                onPaginate={onPaginate}
                {...overrides}
            />
        ));

        const links = wrapper.find('Link');
        
        return { wrapper, links };
    }

    it('should render the paginator', () => {
        const { links } = setUp({ total: 10 });

        expect(links.exists()).toBe(true);
        expect(links.length).toBe(1);
    });

    it('should render 4 pages', () => {
        const { links } = setUp({ total: 35 });

        expect(links.length).toBe(4);
    });

    it('should render 4 pages and ellipsis', () => {
        const { links } = setUp({ total: 45 });
        const ellipsis = mount(links.get(3));

        expect(ellipsis.prop('isNumber')).toBe(false);
        expect(ellipsis.text()).toBe('…');
    });

    it('should start in page 3', () => {
        const { links } = setUp({ total: 100, currentPage: 5 });
        const firstPage = mount(links.get(0));

        expect(firstPage.text()).toBe('3');
    });

    it('should not render ellipsis if current page is lesser than total - 3', () => {
        const { links } = setUp({ total: 100, currentPage: 7 });

        expect(links.length).toBe(6);

        const notEllipsis = mount(links.get(4));

        expect(notEllipsis.text()).not.toBe('…');
    });

    it('should call function when clicked', () => {
        const { links } = setUp({ total: 100, currentPage: 7 });
        mount(links.get(0)).simulate('click');
        expect(onPaginate).toHaveBeenCalledTimes(1);
    });
});
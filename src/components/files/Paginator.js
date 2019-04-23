import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ITEMS_PER_PAGE = 10;

const Container = styled.div`
    margin-top: 30px;
`;

// isNumber is used to avoid styling the ellipsis as a link
const Link = styled.span`
    margin-right: 10px;
    ${({ isNumber, isCurrentPage }) => (isNumber && !isCurrentPage) && `
        color: blue;
        text-decoration: underline;
        cursor: pointer;
    `}
`;
Link.displayName = 'Link';

Link.propTypes = {
    isNumber: PropTypes.bool,
    isCurrentPage: PropTypes.bool,
};

const buildPageNumbers = (lastPage, currentPage) => {
    let pages = [];

    // Start at page 1
    let startFrom = 1;

    // End 2 pages after current page
    let endAt = currentPage + 2;

    // If current page is greater than 2, render only 2 pages before the current page
    if (currentPage > 2) {
        startFrom = currentPage - 2;
    }

    // If current page is greater than last page - 2, then render only one page after the current one
    if (currentPage >= lastPage - 2) {
        endAt = lastPage - 1;
    }

    for (let i = startFrom; i <= endAt; i++) {
        pages = [...pages, i];
    }

    // If there's more than 3 pages after the current one to be shown, then show an ellipsis
    if (lastPage > currentPage + 3) {
        pages = [...pages, '…'];
    }

    pages = [...pages, lastPage];

    return pages;
};

const Paginator = ({ total, onPaginate, currentPage }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const lastPage = Math.ceil(total / ITEMS_PER_PAGE);
        setPages(buildPageNumbers(lastPage, currentPage));
    }, [total, currentPage]);

    return (
        <Container>
            {pages.map((page) => (
                <Link
                    key={page}
                    isNumber={typeof page === 'number'}
                    isCurrentPage={page === currentPage}
                    onClick={() => onPaginate(page)}
                >
                    {page}
                </Link>
            ))}
        </Container>
    );
};

Paginator.propTypes = {
    total: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPaginate: PropTypes.func.isRequired,
};

export default Paginator;
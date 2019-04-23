import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
    padding-bottom: 5px;
`;

const Link = styled.span`
    color: blue;
    text-decoration: underline;
    cursor: pointer;
`;
Link.displayName = 'Link';

const Tag = ({ tag: { tag, files }, onClick }) => (
    <Container>
        <Link onClick={() => onClick(tag)}>{tag}</Link> ({files})
    </Container>
);

Tag.propTypes = {
    tag: PropTypes.shape({
        tag: PropTypes.string.isRequired,
        files: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Tag;
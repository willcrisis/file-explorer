import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
    padding-bottom: 5px;
`;

const Tag = ({ tag: { tag, files } }) => (
    <Container>
        <a href={`#${tag}`}>{tag}</a> ({files})
    </Container>
);

Tag.propTypes = {
    tag: PropTypes.shape({
        tag: PropTypes.string.isRequired,
        files: PropTypes.number.isRequired,
    }).isRequired,
};

export default Tag;
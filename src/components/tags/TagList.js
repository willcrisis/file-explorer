import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import Title from '../common/Title/Title';
import Tag from './Tag';

const Container = styled.div`
    flex: 1;
    padding: 10px;
`;

const TagList = ({ data }) => (
    <Container>
        <Title>Tags</Title>
        {data.map((tag) => (
            <Tag key={tag.tag} tag={tag} />
        ))}
    </Container>
);

TagList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            tag: PropTypes.string.isRequired,
            files: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TagList;
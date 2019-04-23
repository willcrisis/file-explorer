import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import image from '../images/document.svg';

const Container = styled.div`
    padding: 10px;
    width: 140px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Image = styled.img`
    width: 30px;
    margin-right: 10px;
`;

const Link = styled.a`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px;
`;

const File = ({ file: { id, name } }) => (
    <Container>
        <Image src={image} alt="file" />
        <Link href={`#${id}`}>{name}</Link>
    </Container>
);

File.propTypes = {
    file: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default File;
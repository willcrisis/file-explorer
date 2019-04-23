import React from 'react';
import styled from '@emotion/styled'
import Title from '../common/Title/Title';

const Container = styled.div`
    flex: 3;
`;

const FileList = () => (
    <Container>
        <Title>Search Results - No Tag Selected</Title>
    </Container>
);

export default FileList;
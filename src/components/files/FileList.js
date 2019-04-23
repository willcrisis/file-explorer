import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import Title from '../common/Title/Title';
import File from './File';
import Paginator from './Paginator';

const Container = styled.div`
    flex: 3;
`;

const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const FileList = ({ data: { total_files, files }, selectedTag }) => (
    <Container>
        <Title>
            Search Results - {
                selectedTag
                    ? `"${selectedTag}" Tag`
                    : 'No Tag Selected'
            }
        </Title>
        <List>
            {files.map((file) => (
                <File key={file.id} file={file} />
            ))}
        </List>
        <Paginator 
            total={total_files} 
            onPaginate={(page) => console.log(`Changed to page ${page}`)}
        />
    </Container>
);

FileList.propTypes = {
    data: PropTypes.shape({
        total_files: PropTypes.number.isRequired,
        files: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            })
        ),
    }),
    selectedTag: PropTypes.string,
};

export default FileList;
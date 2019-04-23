import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import TagList from '../tags/TagList'
import FileList from '../files/FileList';

const tags = [{ "tag": "Test1", "files": "2" }, { "tag": "Test2", "files": "1" }, { "tag": "absorbed", "files": "8" }, { "tag": "blue", "files": "9" }, { "tag": "cheerful", "files": "2" }, { "tag": "concerned", "files": "10" }, { "tag": "deserted", "files": "23" }, { "tag": "educated", "files": "9" }, { "tag": "empty", "files": "7" }, { "tag": "equal", "files": "3" }, { "tag": "erect", "files": "2" }, { "tag": "functional", "files": "18" }, { "tag": "gray", "files": "3" }, { "tag": "green", "files": "2" }, { "tag": "guarded", "files": "9" }, { "tag": "huge", "files": "7" }, { "tag": "innate", "files": "3" }, { "tag": "lame", "files": "4" }, { "tag": "nostalgic", "files": "7" }, { "tag": "nutritious", "files": "1" }, { "tag": "oceanic", "files": "5" }, { "tag": "past", "files": "17" }, { "tag": "recondite", "files": "10" }, { "tag": "ritzy", "files": "7" }, { "tag": "roomy", "files": "7" }, { "tag": "sable", "files": "16" }, { "tag": "secretive", "files": "9" }, { "tag": "sordid", "files": "3" }];

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
  max-width: 900px;
  display: flex;
  flex-direction: row;
`;


const App = () => (
  <AppContainer>
    <Global styles={globalStyle} />
    <Container>
      <TagList data={tags} />
      <FileList />
    </Container>
  </AppContainer>
);

export default App;

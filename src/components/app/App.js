import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import TagList from '../tags/TagList'
import FileList from '../files/FileList';

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 900px;
`;

const App = () => (
  <AppContainer>
    <Global styles={globalStyle} />
    <TagList />
    <FileList />
  </AppContainer>
);

export default App;

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import TagList from '../tags/TagList'
import FileList from '../files/FileList';

// Mocked data
const tags = [{ "tag": "Test1", "files": "2" }, { "tag": "Test2", "files": "1" }, { "tag": "absorbed", "files": "8" }, { "tag": "blue", "files": "9" }, { "tag": "cheerful", "files": "2" }, { "tag": "concerned", "files": "10" }, { "tag": "deserted", "files": "23" }, { "tag": "educated", "files": "9" }, { "tag": "empty", "files": "7" }, { "tag": "equal", "files": "3" }, { "tag": "erect", "files": "2" }, { "tag": "functional", "files": "18" }, { "tag": "gray", "files": "3" }, { "tag": "green", "files": "2" }, { "tag": "guarded", "files": "9" }, { "tag": "huge", "files": "7" }, { "tag": "innate", "files": "3" }, { "tag": "lame", "files": "4" }, { "tag": "nostalgic", "files": "7" }, { "tag": "nutritious", "files": "1" }, { "tag": "oceanic", "files": "5" }, { "tag": "past", "files": "17" }, { "tag": "recondite", "files": "10" }, { "tag": "ritzy", "files": "7" }, { "tag": "roomy", "files": "7" }, { "tag": "sable", "files": "16" }, { "tag": "secretive", "files": "9" }, { "tag": "sordid", "files": "3" }];
const files = { "total_files": 50, "files": [{ "id": "1", "name": "\ud83d\ude0f_TEST_\ud83d\ude0f" }, { "id": "2", "name": "Best Implemt 2 3" }, { "id": "3", "name": "By Nicholas Petersen Edited 2" }, { "id": "4", "name": "Hey Jude, don't make it bad Take a sad song and make it better Remember to let her into your heart Then you can start to make it better Hey Jude, don't be afraid You were made to go out and get her The minute you let her under your skin Then you begin to make it better And anytime you feel the pain, hey Jude, refrain Don't carry the world upon your shoulders For well you know that it's a fool who plays it cool By making his world a little colder Nah nah nah nah nah nah nah nah nah Hey Jude, don't let me down You have found her, now go and get her Remember to let her into your heart Then you can start to make it better So let it out and let it in, hey Jude, begin You're waiting for someone to perform with And don't you know that it's just you, hey Jude, you'll do The movement you need is on your shoulder Nah nah nah nah nah nah nah nah nah yeah Hey Jude, don't make it bad Take a sad song and make it better Remember to let her under your skin Then you'll begin to make it Better better better better better better, oh Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude<a href=\"\">JUDE<\/a>" }, { "id": "5", "name": "Coding chall" }, { "id": "6", "name": "made with love\u2764\ufe0f" }, { "id": "7", "name": "by neramirez" }, { "id": "8", "name": "SARESs" }, { "id": "9", "name": "New File nameb" }, { "id": "10", "name": "Quality" }] };

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


const App = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <AppContainer>
      <Global styles={globalStyle} />
      <Container>
        <TagList
          data={tags}
          onSelect={(tag) => setSelectedTag(tag)}
        />
        <FileList
          data={files}
          selectedTag={selectedTag}
        />
      </Container>
    </AppContainer>
  )
};

export default App;

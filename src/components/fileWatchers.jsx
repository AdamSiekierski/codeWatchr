import React from 'react';
import styled from 'styled-components';
import FileWatcher from './watchers/fileWatcherTemplate';

const FileWatchersWrapper = styled.div`

`;

const FileWatchers = () => (
  <FileWatchersWrapper>
    <FileWatcher label="Changed files" />
    <FileWatcher label="Added lines" />
    <FileWatcher label="Commits made" />
  </FileWatchersWrapper>
);

export default FileWatchers;

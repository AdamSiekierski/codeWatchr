import React from 'react';
import styled from 'styled-components';

import AddedLinesWatcher from './watchers/addedLinesWatcher';
import ChangedFilesWatcher from './watchers/changedFilesWatcher';
import CommitsMadeWatcher from './watchers/commitsMadeWatcher';

const FileWatchersWrapper = styled.div`
  display: flex;
  padding-top: 25px;
`;

class FileWatchers extends React.Component {
  render() {
    return (
      <FileWatchersWrapper>
        <CommitsMadeWatcher />
        <AddedLinesWatcher />
        <ChangedFilesWatcher dirPath="./" />
      </FileWatchersWrapper>
    );
  }
}

export default FileWatchers;

import React from 'react';
import styled from 'styled-components';

import Changes from './watchers/changes';
import ChangedFilesWatcher from './watchers/changedFilesWatcher';
import CommitsMadeWatcher from './watchers/commitsMadeWatcher';

const FileWatchersWrapper = styled.div`
  display: flex;
  padding-top: 25px;
`;

class FileWatchers extends React.Component {
  constructor(props) {
    super(props);

    this.changedFilesWatcher = React.createRef();

    this.startWatching = this.startWatching.bind(this);
    this.stopWatching = this.stopWatching.bind(this);
  }

  startWatching(dirPath) {
    this.changedFilesWatcher.current.startWatching(dirPath);
  }

  stopWatching() {
    this.changedFilesWatcher.current.startWatching();
  }

  render() {
    return (
      <FileWatchersWrapper>
        <CommitsMadeWatcher />
        <Changes />
        <ChangedFilesWatcher ref={this.changedFilesWatcher} />
      </FileWatchersWrapper>
    );
  }
}

export default FileWatchers;

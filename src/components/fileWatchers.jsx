import React from 'react';
import styled from 'styled-components';

import LinesAddedWatcher from './watchers/linesAddedWatcher';
import ChangedFilesWatcher from './watchers/changedFilesWatcher';
import FileSavesWatcher from './watchers/fileSavesWatcher';

const FileWatchersWrapper = styled.div`
  display: flex;
  padding-top: 25px;
`;

class FileWatchers extends React.Component {
  constructor(props) {
    super(props);

    this.changedFilesWatcher = React.createRef();
    this.fileSavesWatcher = React.createRef();
    this.linesAddedWatcher = React.createRef();

    this.startWatching = this.startWatching.bind(this);
    this.stopWatching = this.stopWatching.bind(this);
  }

  startWatching(dirPath) {
    this.changedFilesWatcher.current.startWatching(dirPath);
    this.fileSavesWatcher.current.startWatching(dirPath);
    this.linesAddedWatcher.current.startWatching(dirPath);
  }

  stopWatching() {
    this.changedFilesWatcher.current.stopWatching();
    this.fileSavesWatcher.current.stopWatching();
    this.linesAddedWatcher.current.stopWatching();
  }

  render() {
    return (
      <FileWatchersWrapper>
        <FileSavesWatcher ref={this.fileSavesWatcher} />
        <LinesAddedWatcher ref={this.linesAddedWatcher} />
        <ChangedFilesWatcher ref={this.changedFilesWatcher} />
      </FileWatchersWrapper>
    );
  }
}

export default FileWatchers;

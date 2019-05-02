import React from 'react';
import FileWatcherTemplate from './fileWatcherTemplate';

class CommitsMadeWatcher extends React.Component {
  render() {
    return (
      <FileWatcherTemplate label="Commits made" />
    );
  }
}

export default CommitsMadeWatcher;

import React from 'react';
import FileWatcherTemplate from './fileWatcherTemplate';

class AddedLinesWatcher extends React.Component {
  render() {
    return (
      <FileWatcherTemplate label="Added lines" />
    );
  }
}

export default AddedLinesWatcher;

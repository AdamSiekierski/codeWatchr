import React from 'react';
import chokidar from 'chokidar';
import FileWatcherTemplate from './fileWatcherTemplate';

class ChangedFilesWatcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changedFiles: 0,
    };

    this.files = [];

    this.startWatching = this.startWatching.bind(this);
    this.stopWatching = this.stopWatching.bind(this);

    this.watcherTemplate = React.createRef();
  }

  startWatching(dirPath) {
    this.setState({ changedFiles: 0 });
    this.watcher = chokidar.watch(dirPath, { ignored: ['node_modules', '.idea', '.vscode', '.git'] }).on('change', (event, path) => {
      if (!this.files.includes(path)) {
        const correctedState = this.watcherTemplate.current.state.watcherNumber + 1;
        this.watcherTemplate.current.setState({
          watcherNumber: correctedState,
        });
        this.files.push(path);
      }
    });
  }

  stopWatching() {
    this.watcher.close();
  }

  render() {
    return (
      <FileWatcherTemplate label="Changed files" ref={this.watcherTemplate} />
    );
  }
}

export default ChangedFilesWatcher;

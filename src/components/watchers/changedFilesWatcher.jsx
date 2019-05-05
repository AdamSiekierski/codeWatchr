import React from 'react';
import chokidar from 'chokidar';
import debounce from 'lodash.debounce';
import FileWatcherTemplate from './fileWatcherTemplate';

class ChangedFilesWatcher extends React.Component {
  constructor(props) {
    super(props);

    this.files = [];

    this.startWatching = this.startWatching.bind(this);
    this.stopWatching = this.stopWatching.bind(this);

    this.watcherTemplate = React.createRef();
  }

  startWatching(dirPath) {
    this.watcherTemplate.current.setState({ watcherNumber: 0 });
    this.watcher = chokidar.watch(dirPath, { ignored: ['node_modules', '.idea', '.vscode', '.git'] }).on('change', debounce((file) => {
      if (!this.files.includes(file)) {
        const correctedState = this.watcherTemplate.current.state.watcherNumber + 1;
        this.watcherTemplate.current.setState({
          watcherNumber: correctedState,
        });
        this.files.push(file);
      }
    }, 1000));
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

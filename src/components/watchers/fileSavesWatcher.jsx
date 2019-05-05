import React from 'react';
import chokidar from 'chokidar';
import debounce from 'lodash.debounce';
import FileWatcherTemplate from './fileWatcherTemplate';

class FileSavesWatcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      saves: 0,
    };

    this.startWatching = this.startWatching.bind(this);
    this.stopWatching = this.stopWatching.bind(this);

    this.watcherTemplate = React.createRef();
  }

  startWatching(dirPath) {
    this.watcherTemplate.current.setState({ watcherNumber: 0 });
    this.watcher = chokidar.watch(dirPath, { ignored: ['node_modules', '.idea', '.vscode', '.git'] }).on('change', debounce(() => {
      const correctedState = this.watcherTemplate.current.state.watcherNumber + 1;
      this.watcherTemplate.current.setState({
        watcherNumber: correctedState,
      });
    }, 1000));
  }

  stopWatching() {
    this.watcher.close();
  }

  render() {
    return (
      <FileWatcherTemplate label="File saves" ref={this.watcherTemplate} />
    );
  }
}

export default FileSavesWatcher;

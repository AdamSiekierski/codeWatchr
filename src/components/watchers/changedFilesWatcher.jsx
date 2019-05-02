import React from 'react';
import PropTypes from 'prop-types';
import chokidar from 'chokidar';
import FileWatcherTemplate from './fileWatcherTemplate';

class ChangedFilesWatcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changedFiles: 0,
    };

    this.startWatching = this.startWatching.bind(this);
    this.stopWatching = this.stopWatching.bind(this);

    this.watcherTemplate = React.createRef();

    this.startWatching();
  }

  startWatching() {
    this.watcher = chokidar.watch(this.props.dirPath, { ignored: ['node_modules', '.idea', '.vscode', '.git'] }).on('add', (path) => {
      const correctedState = this.watcherTemplate.current.state.watcherNumber + 1;
      this.watcherTemplate.current.setState({
        watcherNumber: correctedState,
      });
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

ChangedFilesWatcher.propTypes = {
  dirPath: PropTypes.string.isRequired,
};

export default ChangedFilesWatcher;

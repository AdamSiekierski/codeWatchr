import React from 'react';
import chokidar from 'chokidar';
import follow from 'text-file-follower';
import debounce from 'lodash.debounce';
import FileWatcherTemplate from './fileWatcherTemplate';

class LinesAddedWatcher extends React.Component {
  constructor(props) {
    super(props);

    this.followers = [];
    this.files = [];

    this.startWatching = this.startWatching.bind(this);
    this.stopWatching = this.stopWatching.bind(this);

    this.watcherTemplate = React.createRef();
  }

  startWatching(dirPath) {
    this.watcherTemplate.current.setState({ watcherNumber: 0 });
    this.watcher = chokidar.watch(dirPath, { ignored: ['node_modules', '.idea', '.vscode', '.git'] }).on('change', debounce((filename) => {
      if (!this.files.includes(filename)) {
        const fileFollower = follow(filename);
        fileFollower.on('line', () => {
          const correctedState = this.watcherTemplate.current.state.watcherNumber + 1;
          this.watcherTemplate.current.setState({
            watcherNumber: correctedState,
          });
        });
        this.followers.push(fileFollower);
        this.files.push(filename);
      }
    }, 1000));
  }

  stopWatching() {
    this.watcher.close();
    this.followers = [];
  }

  render() {
    return (
      <FileWatcherTemplate label="Added lines" ref={this.watcherTemplate}/>
    );
  }
}

export default LinesAddedWatcher;

import React from 'react';
import styled from 'styled-components';

import TimeCounter from '../components/timeCounter';
import FileWatchers from '../components/fileWatchers';

const { dialog } = require('electron').remote;

const HomeWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const WatchButton = styled.button`
  color: white;
  background-color: #587191;
  border: 1px solid #253e5e;
  border-radius: 2px;
  padding: 10px;
  outline: none;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: #253e5e;
  }
`;

const PathButton = styled(WatchButton)``;

const PathBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #777;
  font-size: 0.6em;
`;

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWatchingStarted: false,
      isPathSelected: false,
      path: null,
      buttonText: '',
    };

    this.counter = React.createRef();
    this.fileWatchers = React.createRef();

    this.startCodeWatching = () => {
      console.log('Started');
      this.setState({
        isWatchingStarted: true,
        buttonText: 'Stop',
      });
      this.counter.current.startCounting();
      this.fileWatchers.current.startWatching(this.state.path);
      this.props.parentWatchingCallback(true); // eslint-disable-line
    };

    this.stopCodeWatching = () => {
      console.log('Stopped');
      this.setState({
        isWatchingStarted: false,
        buttonText: 'Reset & Start',
      });
      this.counter.current.stopCounting();
      this.fileWatchers.current.stopWatching();
      this.props.parentWatchingCallback(false); // eslint-disable-line
    };

    this.selectPath = () => {
      dialog.showOpenDialog({
        title: 'Open watching directory',
        defaultPath: require('os').homedir(),
        properties: [
          'openDirectory',
        ],
      }, (filePaths) => {
        this.setState({
          path: filePaths[0],
          isPathSelected: true,
        });
      });
    };
  }

  componentDidMount() {
    this.setState({
      buttonText: 'Start',
    });
  }

  render() {
    return (
      <HomeWrapper>
        <TimeCounter ref={this.counter} />
        { this.state.isPathSelected === true
          ? (
            <WatchButton type="button" onClick={this.state.isWatchingStarted ? this.stopCodeWatching : this.startCodeWatching}>
              {
                this.state.buttonText
              }
            </WatchButton>
          ) : (
            <PathButton type="button" onClick={this.selectPath}> Select Path </PathButton>
          )
        }
        <FileWatchers ref={this.fileWatchers} />
        <PathBar>
          Current path: {this.state.path}
        </PathBar>
      </HomeWrapper>
    );
  }
}

export default Watch;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TimeCounter from '../components/timeCounter';

const HomeWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWatchingStarted: false,
    };

    this.counter = React.createRef();

    this.startCodeWatching = () => {
      console.log('Started');
      this.setState({ isWatchingStarted: true });
      this.counter.current.startCounting();
      this.props.parentWatchingCallback(true); // eslint-disable-line
    };

    this.stopCodeWatching = () => {
      console.log('Stopped');
      this.setState({ isWatchingStarted: false });
      this.counter.current.stopCounting();
      this.props.parentWatchingCallback(false); // eslint-disable-line
    };
  }

  render() {
    return (
      <HomeWrapper>
        <TimeCounter ref={this.counter} />
        <WatchButton type="button" onClick={this.state.isWatchingStarted ? this.stopCodeWatching : this.startCodeWatching}>
          {
            this.state.isWatchingStarted ? 'Stop' : 'Start'
          }
        </WatchButton>
      </HomeWrapper>
    );
  }
}

export default Watch;

import React from 'react';
import styled from 'styled-components';
import statman from 'statman';
import moment from 'moment';

const StyledTimeCounter = styled.h1`
  font-size: 4em;
`;

class TimeCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stopwatch: '00:00:00',
      isCounting: false,
    };

    this.startCounting = this.startCounting.bind(this);
    this.stopCounting = this.stopCounting.bind(this);

    this.stopwatch = new statman.Stopwatch();
  }

  startCounting() {
    this.setState({ isCounting: true });
    this.stopwatch.reset();
    this.stopwatch.start();
    const updateInterval = setInterval(() => {
      this.setState({
        stopwatch: this.stopwatch.read(),
      });
      if (!this.state.isCounting) clearInterval(updateInterval);
    }, 100);
  }

  stopCounting() {
    this.setState({
      isCounting: false,
    });
    this.stopwatch.stop();
  }

  render() {
    return (
      <div>
        <StyledTimeCounter>
          {
            moment().hours(0).minutes(0).seconds(0)
              .milliseconds(this.state.stopwatch)
              .format('HH:mm:ss')
          }
        </StyledTimeCounter>
      </div>
    );
  }
}

export default TimeCounter;

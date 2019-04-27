import React from 'react';
import styled from 'styled-components';

const StyledTimeCounter = styled.h1`
  font-size: 4em;
`;

class TimeCounter extends React.Component {
  render() {
    return (
      <div>
        <StyledTimeCounter>00:00</StyledTimeCounter>
      </div>
    );
  }
}

export default TimeCounter;

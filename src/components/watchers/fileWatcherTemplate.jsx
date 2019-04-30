import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WatcherNumber = styled.h4`

`;

const WatcherLabel = styled.h5`

`;

class FileWatcherTemplate extends React.Component {
  render() {
    return (
      <div>
        <WatcherNumber> 0 </WatcherNumber>
        <WatcherLabel> { this.props.label } </WatcherLabel>
      </div>
    );
  }
}

FileWatcherTemplate.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FileWatcherTemplate;

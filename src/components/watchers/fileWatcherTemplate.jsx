import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WatcherNumber = styled.h4`
  margin: 0;
  font-size: 1.8em;
`;

const WatcherLabel = styled.h5`
  margin-top: 10px;
`;

const FileWatcherWrapper = styled.div`
  padding: 5px;
  text-align: center;
  width: 150px;
  color: #555;
`;

class FileWatcherTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watcherNumber: 0,
    };

    this.returnData = this.returnData.bind(this);
  }

  returnData() {
    return this.state.watcherNumber;
  }

  render() {
    return (
      <FileWatcherWrapper>
        <WatcherNumber> { this.state.watcherNumber } </WatcherNumber>
        <WatcherLabel> { this.props.label } </WatcherLabel>
      </FileWatcherWrapper>
    );
  }
}

FileWatcherTemplate.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FileWatcherTemplate;

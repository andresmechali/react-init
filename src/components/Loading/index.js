import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import './styles.css';

const Loading = ({ error, retry, timedOut, pastDelay }) => {
  if (error) {
    // When the loader has errored
    return (
      <div>
        Error!{' '}
        <button onClick={retry} type="button">
          Retry
        </button>
      </div>
    );
  }
  if (timedOut) {
    // When the loader has taken longer than the timeout
    return (
      <div>
        Taking a long time...{' '}
        <button onClick={retry} type="button">
          Retry
        </button>
      </div>
    );
  }
  if (pastDelay) {
    // When the loader has taken longer than the delay
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }
  return null;
};

Loading.propTypes = {
  error: PropTypes.bool,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
  retry: PropTypes.func.isRequired,
};

Loading.defaultProps = {
  error: false,
  timedOut: false,
  pastDelay: false,
};

export default Loading;

import React, { Component } from 'react';

import { Link } from "@reach/router"

class StreamRecorder extends Component {
  componentWillUnmount() {
    // TODO - Here we should call to kill this stream
  }

  render() {
    return (
      <div>
      <Link to="/">Home</Link>{" "}
      Create stream route
      </div>
    )
  }
}

export default StreamRecorder;

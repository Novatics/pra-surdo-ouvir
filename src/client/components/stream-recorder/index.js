import React, { Component } from 'react';

import { Link } from '@reach/router';
import Button from 'antd/lib/button';
import AudioStreamer from '../../util/audioStreamer';

class StreamRecorder extends Component {
  state = {
    isRecording: false,
  }

  componentWillUnmount() {
    // TODO - Here we should call to kill this stream
  }

  startStream = () => {
    const tmpID = 'cjq5xi8zy1tp00a55qyd1lic8';
    this.setState({ isRecording: true });
    AudioStreamer.initRecording(tmpID);
  }

  stopStrem = () => {
    this.setState({ isRecording: false });
    AudioStreamer.stopRecording();
  }

  render() {
    const { isRecording } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        Create stream route
        <Button
          onClick={isRecording ? this.stopStream : this.startStream}
          type="primary"
        >
          { isRecording ? 'Stop' : 'Start' }
        </Button>
        <br />
      </div>
    );
  }
}

export default StreamRecorder;

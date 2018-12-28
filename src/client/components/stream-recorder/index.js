import React, { Component } from 'react';
import Button from 'antd/lib/button';
import { Link } from '@reach/router';
import AudioStreamer from '../../util/audioStreamer';

class StreamRecorder extends Component {
  state = {
    streamText: '',
  }

  componentWillUnmount() {
    // TODO - Here we should call to kill this stream
  }

  startStream = () => {
    AudioStreamer.initRecording((data) => {
      this.setState({ streamText: data.results[0].alternatives[0].transcript });
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    const { streamText } = this.state;

    return (
      <div>
        <Link to="/">Home</Link>
        {' '}
        Create stream route
        <Button onClick={this.startStream} type="primary">Record</Button>
        <span>{streamText}</span>
      </div>
    );
  }
}

export default StreamRecorder;

import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from "@reach/router"
import AudioStreamer from '../../util/audioStreamer';

class StreamRecorder extends Component {

  state = {
    streamText: '',
    isRecording: false,
  }

  startStream = () => {
    this.setState({isRecording: true});
    AudioStreamer.initRecording(data => {
      this.setState({streamText: data.results[0].alternatives[0].transcript});
    }, error => {
      console.log(error)
    })
  }

  stopStream = () => {
    this.setState({isRecording: false});
    AudioStreamer.stopRecording();
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    // TODO - Here we should call to kill this stream
  }

  render() {
    const { isRecording, streamText } = this.state;
    return (
      <div>
      <Link to="/">Home</Link>{" "}
      Create stream route
      <Button onClick={ isRecording ? this.stopStream : this.startStream } 
        type="primary"
      >
        { isRecording ? 'Encerrar' : 'Gravar' }
      </Button>
      <br></br>
      <span>{streamText}</span>
      </div>
    )
  }
}

export default StreamRecorder;

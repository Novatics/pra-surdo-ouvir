import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from "@reach/router"
import AudioStreamer from '../../util/audioStreamer';

class StreamRecorder extends Component {

  state = {
    streamText: '',
  }

  startStream = () => {
    AudioStreamer.initRecording(data => {
      //console.log(data.results[0].alternatives[0].transcript)
      this.setState({streamText: data.results[0].alternatives[0].transcript});
    }, error => {
      console.log(error)
    })
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    // TODO - Here we should call to kill this stream
  }

  render() {
    return (
      <div>
      <Link to="/">Home</Link>{" "}
      Create stream route
      <Button onClick={this.startStream} type="primary">Record</Button>
      <br></br>
      <span>{this.state.streamText}</span>
      </div>
    )
  }
}

export default StreamRecorder;

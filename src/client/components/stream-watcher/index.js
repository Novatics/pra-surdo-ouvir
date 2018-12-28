import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Socket from 'socket.io-client';

const GET_STREAM = gql`
  query Stream($streamId: ID!) {
    stream(streamId: $streamId) {
      title
      description
    }
  }`;

class StreamWatcher extends React.Component {
  state = {
    streamText: '',
  };

  componentDidMount() {
    const socket = Socket('172.16.140.120:5000');
    const { id } = this.props;
    console.log(`speechData-${id}`);
    socket.on(`speechData-${id}`,
      (data) => {
        console.log(data);
        this.setState({ streamText: data.results[0].alternatives[0].transcript });
      });
  }

  render() {
    const { id } = this.props;
    const { streamText } = this.state;
    return (
      <Query query={GET_STREAM} variables={{ streamId: id }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              <Link to="/">Home</Link>
              <h1>Stream {data.stream.title} comendo solta!</h1>
              <p>{ streamText }</p>
            </div>
          );
        }}
      </Query>
    );
  }
}

StreamWatcher.propTypes = {
  id: PropTypes.string.isRequired,
};

export default StreamWatcher;

import React, { Component } from 'react';

export default class Hello extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return <div>{username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}</div>;
  }
}

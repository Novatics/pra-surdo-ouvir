import React from 'react';
import { Link } from '@reach/router';
import io from 'socket.io-client';

export default function StreamWatcher({ id }) {
  const socket = io('http://localhost');

  socket.on(id, function (from, msg) {
    return (
      <div> msg </div>
    )
  });
 
  return(
    <div>
      <Link to="/">Home</Link>{" "}
      Stream {id} comendo solta!
    </div>
  )
}

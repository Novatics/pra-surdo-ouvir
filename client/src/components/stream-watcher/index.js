import React from 'react';

import { Link } from "@reach/router"

export default function StreamWatcher({ id }) {
  return(
    <div>
      <Link to="/">Home</Link>{" "}
      Stream {id} comendo solta!
    </div>
  )
}

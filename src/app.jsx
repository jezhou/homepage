import React from 'react';

import { Router } from '@reach/router';
import useGravatar from './hooks/useGravatar';
import Homepage from './homepage';


export default function App() {
  const data = useGravatar();

  if (data?.entry) {
    return (
      <Router>
        <Homepage path="/" {...data.entry[0]} />
      </Router>
    );
  }

  return null;
}

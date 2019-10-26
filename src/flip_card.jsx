import React from 'react';
import { func } from 'prop-types';
import { useTrail, config, animated } from 'react-spring';

export default function FlipCard({ front, back }) {
  return (
    <div className="photo-container">
      { front() || back() }
    </div>
  );
}

FlipCard.propTypes = {
  front: func.isRequired,
  back: func.isRequired,
};

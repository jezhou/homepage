import React, { useState } from 'react';
import { func } from 'prop-types';
import { useSpring, animated } from 'react-spring';

export default function FlipCard({ front, back }) {
  const [flip, setFlip] = useState(false);

  const style = useSpring({
    opacity: flip ? 0 : 1,
    transform: `perspective(600px) rotateX(${flip ? 180 : 0}deg)`,
  });

  return (
    <div className="photo-container" onClick={() => setFlip(true)}>
      <animated.div style={style} className="front">
        {front()}
      </animated.div>
      <animated.div style={style} className="back">
        {back({ flipBack: () => setFlip(false) }) }
      </animated.div>
    </div>
  );
}

FlipCard.propTypes = {
  front: func.isRequired,
  back: func.isRequired,
};

import React from 'react';
import { string } from 'prop-types';
import { useTrail, config, animated } from 'react-spring';

export default function Title({ title }) {
  const titleArray = title.split('');

  const nameSpring = useTrail(titleArray.length, {
    opacity: 1,
    transform: 'translate(0px, 0px)',
    from: {
      opacity: 0,
    },
    config: config.molasses,
    reset: true,
  });

  return (
    <h1 className="title">
      {nameSpring.map((props, index) => (
        <animated.span key={titleArray[index]} style={props}>
          {titleArray[index]}
        </animated.span>
      ))}
    </h1>
  );
}

Title.propTypes = {
  title: string.isRequired,
};

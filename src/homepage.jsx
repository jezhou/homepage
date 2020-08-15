import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { animated, useSpring } from 'react-spring';

import Title from './title';
import FlipCard from './flip_card';
import './styles.css';

function HandWave({ onAnimationEnd }) {
  const wave = useSpring({
    onRest: () => onAnimationEnd(),
  });

  return (
    <animated.div style={{
      width: '100%', textAlign: 'center', fontSize: '100px', ...wave,
    }}
    >
      <p>👋</p>
    </animated.div>
  );
}

function Homepage({
  preferredUsername,
  displayName,
  photos: [{ value: photoUrl }],
  aboutMe,
  currentLocation,
  name: { formatted: fullName },
  urls,
  emails: [{ value: personalEmail }],
}) {
  const location = `Livin' it up in ${currentLocation}`;

  return (
    <div className="App container">
      <div className="item-1">
        <FlipCard
          front={() => (
            <img
              className="photo"
              src={`${photoUrl}?s=400`}
              alt={`${fullName}'s profile`}
            />
          )}
          back={({ flipBack }) => <HandWave onAnimationEnd={flipBack} />}
        />
      </div>
      <div className="item-1">
        <Title title={preferredUsername || displayName} />
        <p>{location}</p>
        <p>{aboutMe}</p>
        {urls.map(({ value, title: label }) => (
          <div key={`${value}+${label}`}>
            <a className="external-link" href={value}>
              {label}
            </a>
          </div>
        ))}
        <hr />
        <a className="contact external-link" href={`mailto:${personalEmail}`}>
          contact
        </a>
      </div>
    </div>
  );
}

Homepage.propTypes = {
  preferredUsername: string,
  displayName: string.isRequired,
  photos: arrayOf(shape({ value: string.isRequired })).isRequired,
  aboutMe: string,
  currentLocation: string,
  name: shape({ formatted: string }),
  urls: arrayOf(shape({ value: string, title: string })),
  emails: arrayOf(shape({ value: string })),
};

Homepage.defaultProps = {
  preferredUsername: null,
  aboutMe: '',
  currentLocation: '',
  name: { formatted: '' },
  urls: [{}],
  emails: [{}],
};

export default Homepage;

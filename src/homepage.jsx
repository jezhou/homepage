import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import './styles.css';

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
      <div className="item-1 w3-animate-left">
        <img
          className="photo"
          src={`${photoUrl}?s=400`}
          alt={`${fullName}'s profile`}
        />
      </div>
      <div className="item-1 w3-animate-right">
        <h1 className="title">{preferredUsername || displayName}</h1>
        <p>{location}</p>
        <p>{aboutMe}</p>
        {urls.map(({ value, title }) => (
          <div key={`${value}+${title}`}>
            <a className="external-link" href={value}>
              {title}
            </a>
          </div>
        ))}
        <hr />
        <a className="external-link" href={`mailto:${personalEmail}`}>
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

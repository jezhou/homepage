import React from "react";
import ReactDOM from "react-dom";

import useGravatar from "./hooks/useGravatar";

import "./styles.css";

function App() {
  const data = useGravatar();

  if (data && data.entry) {
    const {
      preferredUsername,
      displayName,
      photos: [{ value: photoUrl }],
      aboutMe,
      currentLocation,
      name: { formatted: fullName },
      urls,
      emails: [{ value: personalEmail }]
    } = data.entry[0];

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
          <p>Livin' it up in {currentLocation}.</p>
          <p>{aboutMe}</p>
          {urls.map(({ value, title }) => (
            <div key={`${value}+${title}`}>
              <a className="external-link" href={value}>
                {title}
              </a>
            </div>
          ))}
          <br />
          <hr />
          <br />
          <a className="external-link" href={`mailto:${personalEmail}`}>
            email me
          </a>
        </div>
      </div>
    );
  }

  return null;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

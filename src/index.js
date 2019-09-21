import React from "react";
import ReactDOM from "react-dom";

import useGravatar from "./hooks/useGravatar";

import "./styles.css";

function App() {
  const data = useGravatar();

  if (data && data.entry) {
    console.log(data.entry[0]);
    const {
      preferredUsername,
      displayName,
      photos: [{ value: photoUrl }],
      aboutMe,
      currentLocation,
      name: { formatted: fullName }
    } = data.entry[0];

    return (
      <div className="App container">
        <div className="item-1">
          <img
            className="photo"
            src={`${photoUrl}?s=400`}
            alt={`${fullName}'s profile`}
          />
        </div>
        <div className="item-1">
          <h1 className="title">{preferredUsername || displayName}</h1>
          <br />
          <p>Livin' it up in {currentLocation}.</p>
          <p>{aboutMe}</p>
        </div>
      </div>
    );
  }

  return <div>Loading</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

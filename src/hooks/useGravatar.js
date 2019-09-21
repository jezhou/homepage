import { useState, useEffect } from "react";

const GRAVATAR_PROFILE_URL =
  "https://en.gravatar.com/7b672441a51dcd3e6e10178ac6d7dd13.json";

const useGravatar = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch(GRAVATAR_PROFILE_URL)
      .then(response => response.json())
      .then(gravatarProfile => setProfile(gravatarProfile));
  }, []);

  return profile;
};

export default useGravatar;

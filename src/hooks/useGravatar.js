import { useState, useEffect } from 'react';
import md5 from 'md5';

const EMAIL = 'jesse.cy.zhou@gmail.com';
const GRAVATAR_PROFILE_URL = `https://en.gravatar.com/${md5(EMAIL)}.json`;

const useGravatar = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(GRAVATAR_PROFILE_URL)
      .then((response) => response.json())
      .then((gravatarProfile) => setProfile(gravatarProfile));
  }, []);

  return profile;
};

export default useGravatar;

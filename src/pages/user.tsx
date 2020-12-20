import React, { useState, useEffect, useContext } from 'react';
import swal from 'sweetalert2';
import useFetch from '../hooks/useFetch';
import UserTopFourRepos from '../components/UserTopFourRepos';

import LoadingIcon from '../components/LoadingIcon';
import { QueryContext } from '../context/QueryProvider';

interface User {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
}

const UserPage: React.FC = (): any => {
  const [userFound, setUserFound] = useState<boolean>(false);
  const { query } = useContext(QueryContext);

  const { data: userData } = useFetch<User>(
    `https://api.github.com/users/${query}`
  );

  // Alert if no user was found or displays the user
  useEffect((): void => {
    console.log(userData);
    if (userData !== undefined) {
      if (userData.message === 'Not Found') {
        swal.fire({
          title: 'Invalid username',
          icon: 'error',
        });
        setUserFound(false);
      } else {
        setUserFound(true);
      }
    }
  }, [userData]);
  return (
    <>
      {!userData ? (
        <LoadingIcon />
      ) : (
        userFound && (
          <>
            <h1>{userData.name}</h1>
            <p>Username: {userData.login}</p>
            <img src={userData.avatar_url} alt="avatar" />
            <p>Followers:{userData.followers}</p>
            <p>Repositories: {userData.public_repos}</p>
            <UserTopFourRepos />
          </>
        )
      )}
    </>
  );
};

export default UserPage;

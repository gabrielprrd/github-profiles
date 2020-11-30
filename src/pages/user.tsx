import React, { useState, useEffect } from 'react';
import swal from 'sweetalert2';
import useFetch from '../hooks/useFetch';
import UserTopFourRepos from '../components/UserTopFourRepos';

interface User {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
}

const UserPage: React.FC<{ query: string }> = ({ query }): any => {
  const [userFound, setUserFound] = useState<boolean>(false);
  const { data } = useFetch<User>(`https://api.github.com/users/${query}`);

  // Alert if no user was found or displays the user
  useEffect((): void => {
    if (data !== undefined) {
      if (data.message === 'Not Found') {
        swal.fire({
          title: 'Invalid username',
          icon: 'error',
        });
        setUserFound(false);
      } else {
        setUserFound(true);
      }
    }
  }, [data]);
  return (
    <>
      {!data ? (
        <p>Loading...</p>
      ) : (
        userFound && (
          <>
            <h1>{data.name}</h1>
            <p>Username: {data.login}</p>
            <img src={data.avatar_url} alt="avatar" />
            <p>Followers:{data.followers}</p>
            <p>Repositories: {data.public_repos}</p>
            <UserTopFourRepos query={query} />
          </>
        )
      )}
    </>
  );
};

export default UserPage;

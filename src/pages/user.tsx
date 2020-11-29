import React from 'react';
import useFetch from '../hooks/useFetch';

interface User {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
}

const UserPage: React.FC<{ query: string }> = ({ query }) => {
  const { userData } = useFetch<User>(`https://api.github.com/users/${query}`);

  return (
    <>
      {!userData ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{userData.name}</h1>
          <p>Username: {userData.login}</p>
          <img src={userData.avatar_url} alt="avatar" />
          <p>Followers:{userData.followers}</p>
          <p>Repositories: {userData.public_repos}</p>
        </>
      )}
    </>
  );
};

export default UserPage;

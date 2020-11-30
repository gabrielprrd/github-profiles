import React from 'react';
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
  const { data } = useFetch<User>(`https://api.github.com/users/${query}`);

  return (
    <>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{data.name}</h1>
          <p>Username: {data.login}</p>
          <img src={data.avatar_url} alt="avatar" />
          <p>Followers:{data.followers}</p>
          <p>Repositories: {data.public_repos}</p>
          <UserTopFourRepos query={query} />
        </>
      )}
    </>
  );
};

export default UserPage;

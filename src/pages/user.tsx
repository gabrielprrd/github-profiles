import React from 'react';

const UserPage: React.FC<{
  name: string;
  login: string;
  avatarUrl: string;
  followers: number;
  repositories: number;
}> = ({ name, login, avatarUrl, followers, repositories }) => (
  <div>
    <h1>{name}</h1>
    <p>Username: {login}</p>
    <img src={avatarUrl} alt="avatar" />
    <p>Followers:{followers}</p>
    <p>Repositories: {repositories}</p>
  </div>
);

export default UserPage;

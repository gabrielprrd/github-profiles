import React, { useState } from 'react';
import Head from 'next/head';

// Pages
import UserPage from './user';

// Components
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';
import useFetch from '../hooks/useFetch';

export interface User {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
}

const Home: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { userData } = useFetch<User>(`https://api.github.com/users/${query}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <form onSubmit={handleSubmit}>
          <TextInput placeholder="Type an username" onChange={handleChange} />
          <SubmitButton value="Search" />
        </form>

        {isSubmitted && (
          <UserPage
            name={userData.name}
            login={userData.login}
            avatarUrl={userData.avatar_url}
            followers={userData.followers}
            repositories={userData.public_repos}
          />
        )}
      </main>
    </>
  );
};

export default Home;

import React, { useState } from 'react';
import Head from 'next/head';

// Components
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const Home: React.FC = () => {
  const [query, setquery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setquery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Hello World</h1>
        <form onSubmit={handleSubmit}>
          <TextInput placeholder="Type an username" onChange={handleChange} />
          <SubmitButton>Search</SubmitButton>
        </form>
      </main>
    </>
  );
};

export default Home;

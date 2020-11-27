import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import TextInput from '../components/TextInput';

const Home: React.FC = () => {
  const [query, setquery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setquery(e.target.value);
  };

  useEffect((): void => {
    console.log(query);
  }, [query]);

  return (
    <>
      <Head>
        func
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Hello World</h1>
        <TextInput placeholder="Type an username" onChange={handleChange} />
      </main>
    </>
  );
};

export default Home;

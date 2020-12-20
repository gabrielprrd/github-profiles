import React, { useState, useContext } from 'react';
import Head from 'next/head';

// Pages
import UserPage from './user';

// Components
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

// Context
import { QueryContext } from '../context/QueryProvider';

const Home: React.FC = () => {
  const [queryOnInput, setQueryOnInput] = useState<string>('');
  const { setQuery } = useContext(QueryContext);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryOnInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(queryOnInput);
    setIsSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <form onSubmit={handleSubmit} data-testid="form">
          <TextInput placeHolder="Type an username" onChange={handleChange} />
          <SubmitButton label="search" />
        </form>

        {isSubmitted && <UserPage />}
      </main>
    </>
  );
};

export default Home;

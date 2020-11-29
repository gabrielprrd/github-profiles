import React, { useState } from 'react';
import Head from 'next/head';

// Pages
import UserPage from './user';

// Components
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const Home: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [submittedQuery, setSubmittedQuery] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedQuery(query);
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

        {isSubmitted && <UserPage query={submittedQuery} />}
      </main>
    </>
  );
};

export default Home;

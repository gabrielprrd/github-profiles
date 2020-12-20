import React, { useState, useEffect, useContext } from 'react';
import useFetch from '../hooks/useFetch';

import LoadingIcon from './LoadingIcon';

// Context
import { QueryContext } from '../context/QueryProvider';

interface Repository {
  name: string;
  url: string;
  watchers: number;
}

const UserTopFourRepos: React.FC = (): any => {
  const [topFourRepos, setTopFourRepos] = useState<Repository[]>([]);
  const { query } = useContext(QueryContext);
  const { data } = useFetch<Repository[]>(
    `https://api.github.com/users/${query}/repos`
  );

  // Gets top four repositories based on stars
  useEffect(() => {
    if (data !== undefined) {
      if (data.message !== 'Not Found') {
        const repositories = data
          .sort((repo1, repo2) => repo1.watchers - repo2.watchers)
          .filter((repo, index) => index < 4);
        setTopFourRepos(repositories);
      }
    }
  }, [data]);

  return (
    <>
      {!data ? (
        <LoadingIcon />
      ) : (
        topFourRepos.map((repo) => (
          <div>
            <a href={repo.url}>{repo.name}</a>
          </div>
        ))
      )}
    </>
  );
};

export default UserTopFourRepos;

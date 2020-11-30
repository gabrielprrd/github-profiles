import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

interface Repository {
  name: string;
  url: string;
  watchers: number;
}

const UserTopFourRepos: React.FC<{ query: string }> = ({ query }): any => {
  const [topFourRepos, setTopFourRepos] = useState<Repository[]>([]);
  const { data } = useFetch<Repository[]>(
    `https://api.github.com/users/${query}/repos`
  );

  // Gets top four repositories based on stars
  useEffect(() => {
    if (data !== undefined) {
      const repositories = data
        .sort((repo1, repo2) => repo1.watchers - repo2.watchers)
        .filter((repo, index) => index < 4);
      setTopFourRepos(repositories);
    }
  }, [data]);

  return (
    <>
      {!data ? (
        <p>Loading...</p>
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

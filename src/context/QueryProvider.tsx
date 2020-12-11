import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

interface ContextProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const QueryContext = createContext<Partial<ContextProps>>({});

const QueryProvider = ({ children }): any => {
  const [query, setQuery] = useState<string>('');

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;

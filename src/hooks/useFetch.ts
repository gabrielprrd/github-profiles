/* eslint comma-dangle: ["error", "never"] */
import useSWR from 'swr';

export default function useFetch<Data = any, Error = any>(url: string): any {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  });
  return {
    userData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

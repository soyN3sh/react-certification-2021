import { useState, useEffect } from 'react';

const useData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const { items } = await response.json();

        setData(items.filter((item) => item.id.kind === 'youtube#video'));
      } catch (error) {
        console.error('Bad request: ', error);
      }
    };

    getData();
  }, [url]);

  return { data };
};

export { useData };

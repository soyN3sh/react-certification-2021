import { useState, useEffect } from 'react';
import { resolveUrl } from '../resolveUrl';

const useData = (endpoint, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const YOUTUBE_API_URL = resolveUrl(endpoint, params);

        const response = await fetch(YOUTUBE_API_URL);
        const { items } = await response.json();

        items.forEach((item) => {
          if (item.id.videoId) {
            item.id = item.id.videoId; // eslint-disable-line no-param-reassign
          }
        });

        setData(items);
        setLoading(false);
      } catch (error) {
        console.log('Oops! Something went wrong...');
        setLoading(false);
      }
    };

    getData();
  }, [endpoint, params]);

  return { data, loading };
};

export default useData;

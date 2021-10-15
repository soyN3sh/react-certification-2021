import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import VideoCard from '../VideoCard/VideoCard.component';

const Content = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    const response = await fetch('youtube-videos-mock.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);
  return data ? (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ padding: '12px' }}
    >
      {data.items &&
        data.items.map((item) => (
          <Grid item key={item.etag}>
            <VideoCard data={item} />
          </Grid>
        ))}
    </Grid>
  ) : (
    'loading'
  );
};

export default Content;

import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import VideoCard from '../VideoCard/VideoCard.component';

const Content = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('youtube-videos-mock.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ padding: '12px' }}
    >
      {data.items &&
        data.items.length > 0 &&
        data.items.map((item) => (
          <Grid item key={item.etag}>
            <VideoCard data={item} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Content;

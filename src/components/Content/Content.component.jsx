import React from 'react';
import Grid from '@mui/material/Grid';
import VideoCard from '../VideoCard/VideoCard.component';

const Content = ({ data }) => {
  return data ? (
    <Grid
      id="videoCardsContainer"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ padding: '12px' }}
    >
      {data.map((item) => (
        <Grid item key={item.id}>
          <VideoCard data={item} />
        </Grid>
      ))}
    </Grid>
  ) : (
    'loading'
  );
};

export default Content;

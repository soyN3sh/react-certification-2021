import React from 'react';
import Grid from '@mui/material/Grid';
import FavoriteRelatedVideo from '../FavoriteRelatedVideo/FavoriteRelatedVideo.component';

const FavoriteRelatedVideosList = ({ data }) => {
  const filteredData = data.filter((item) => item.snippet !== undefined);

  return filteredData ? (
    <Grid
      id="relatedVideosListContainer"
      container
      direction="column"
      spacing={1}
      sx={{
        width: '30%',
        height: '100%',
        overflow: 'scroll',
        padding: '16px',
        flexWrap: 'nowrap',
      }}
    >
      {filteredData.map((video) => (
        <Grid item key={video.id}>
          <FavoriteRelatedVideo video={video} />
        </Grid>
      ))}
    </Grid>
  ) : (
    'loading'
  );
};

export default FavoriteRelatedVideosList;

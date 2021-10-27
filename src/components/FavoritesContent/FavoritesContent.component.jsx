import React from 'react';
import Grid from '@mui/material/Grid';
import FavoriteVideoCard from '../FavoriteVideoCard/FavoriteVideoCard.component';

const FavoritesContent = ({ data }) => {
  return data ? (
    <Grid
      id="favoriteVideosCardsContainer"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ padding: '12px' }}
    >
      {data.map((item) => (
        <Grid item key={item.id}>
          <FavoriteVideoCard data={item} />
        </Grid>
      ))}
    </Grid>
  ) : (
    'loading'
  );
};

export default FavoritesContent;

import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import FavoritesContent from '../../components/FavoritesContent/FavoritesContent.component';
import GlobalContext from '../../providers/Global/GlobalContext';

const FavoriteVideos = () => {
  const {
    state: { favoriteVideos },
  } = useContext(GlobalContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FavoritesContent data={favoriteVideos} />
    </Box>
  );
};

export default FavoriteVideos;

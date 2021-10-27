import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GlobalContext from '../../providers/Global/GlobalContext';
import { actions } from '../../utils/reducer/actions';
import { storage } from '../../utils/storage';

const FavoriteButton = ({ video }) => {
  const {
    state: { user, favoriteVideos },
    dispatch,
  } = useContext(GlobalContext);

  const isFavoriteVideo = () => {
    return favoriteVideos.find((favoriteVideo) => {
      return favoriteVideo.id.videoId === video.id.videoId;
    });
  };

  return (
    <div>
      {user.authenticated &&
        (isFavoriteVideo() ? (
          <IconButton
            data-testid="favButton"
            size="large"
            edge="end"
            aria-label="favorite button"
            aria-haspopup="true"
            color="primary"
            sx={{
              position: 'absolute',
              zIndex: 9999,
            }}
            onClick={async () => {
              const tmpFavoriteVideos = storage.get('favoriteVideos');
              dispatch({
                type: actions.removeFavoriteVideoWithIcon,
                payload: video,
              });
              storage.set(
                'favoriteVideos',
                tmpFavoriteVideos.filter((item) => item.id.videoId !== video.id.videoId)
              );
            }}
          >
            <FavoriteIcon />
          </IconButton>
        ) : (
          <IconButton
            data-testid="favButton"
            size="large"
            edge="end"
            aria-label="favorite button"
            aria-haspopup="true"
            color="primary"
            sx={{
              position: 'absolute',
              zIndex: 9999,
            }}
            onClick={async () => {
              dispatch({
                type: actions.addFavoriteVideoWithIcon,
                payload: video,
              });
              storage.set('favoriteVideos', [...favoriteVideos, video]);
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        ))}
    </div>
  );
};

export default FavoriteButton;

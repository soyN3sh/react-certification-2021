import React, { useState, useEffect, useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useData from '../../utils/hooks/useData';
import {
  Container,
  VideoContainer,
  DetailsContainer,
  DetailsHeader,
} from './FavoriteVideoDetail.styles';
import FavoriteRelatedVideosList from '../../components/FavoriteRelatedVideosList/FavoriteRelatedVideosList.component';
import DescriptionAccordion from '../../components/DescriptionAccordion';
import GlobalContext from '../../providers/Global/GlobalContext';
import { actions } from '../../utils/reducer/actions';
import { storage } from '../../utils/storage';

const FavoriteVideoDetail = () => {
  const {
    state: { user, favoriteVideos },
    dispatch,
  } = useContext(GlobalContext);

  const params = useParams();

  const isFavoriteVideo = (video) => {
    return favoriteVideos.find((favoriteVideo) => {
      if (favoriteVideo.id.videoId) {
        return favoriteVideo.id.videoId === video.id;
      }
      return favoriteVideo.id === video.id;
    });
  };

  const [apiParamsInfoVideo, setApiParamsInfoVideo] = useState({
    id: params.videoId,
  });

  const infoVideo = useData('videos', apiParamsInfoVideo);

  const { title, description } = !infoVideo.loading && infoVideo.data[0].snippet;

  useEffect(() => {
    setApiParamsInfoVideo({ id: params.videoId });
  }, [params.videoId]);

  return (
    <Container>
      <VideoContainer>
        <iframe
          id="youtubeVideo"
          title="youtubeVideo"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${params.videoId}`}
        />
        <DetailsContainer>
          <DetailsHeader>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            {user.authenticated &&
              (isFavoriteVideo(!infoVideo.loading && infoVideo.data[0]) ? (
                <Button
                  color="inherit"
                  onClick={async () => {
                    const tmpFavoriteVideos = storage.get('favoriteVideos');
                    dispatch({
                      type: actions.removeFavoriteVideo,
                      payload: infoVideo.data[0],
                    });
                    storage.set(
                      'favoriteVideos',
                      tmpFavoriteVideos.filter((video) =>
                        video.id.videoId
                          ? video.id.videoId
                          : video.id !== infoVideo.data[0].id
                      )
                    );
                  }}
                >
                  Remove from favorites
                </Button>
              ) : (
                <Button
                  color="inherit"
                  onClick={async () => {
                    dispatch({
                      type: actions.addFavoriteVideo,
                      payload: infoVideo.data[0],
                    });
                    storage.set('favoriteVideos', [...favoriteVideos, infoVideo.data[0]]);
                  }}
                >
                  Add to favorites
                </Button>
              ))}
          </DetailsHeader>
          <DescriptionAccordion description={description} />
        </DetailsContainer>
      </VideoContainer>
      <FavoriteRelatedVideosList data={favoriteVideos} />
    </Container>
  );
};

export default FavoriteVideoDetail;

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import useData from '../../utils/hooks/useData';
import { Container, VideoContainer, DetailsContainer } from './VideoDetail.styles';
import VideoList from '../../components/VideoList/VideoList.component';

const VideoDetail = () => {
  const params = useParams();

  const [apiParamsInfoVideo, setApiParamsInfoVideo] = useState({
    id: params.videoId,
  });

  const [apiParamsRelatedVideos, setApiParamsRelatedVideos] = useState({
    relatedToVideoId: params.videoId,
    maxResults: 25,
    type: 'video',
  });

  const infoVideo = useData('videos', apiParamsInfoVideo);
  const relatedVideos = useData('search', apiParamsRelatedVideos);

  const { title, description } = !infoVideo.loading && infoVideo.data[0].snippet;

  useEffect(() => {
    setApiParamsInfoVideo({ id: params.videoId });
    setApiParamsRelatedVideos((current) => {
      return { ...current, relatedToVideoId: params.videoId };
    });
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
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </DetailsContainer>
      </VideoContainer>
      {!relatedVideos.loading && <VideoList data={relatedVideos.data} />}
    </Container>
  );
};

const StyledVideoDetail = styled(VideoDetail)(() => ({}));

export default StyledVideoDetail;

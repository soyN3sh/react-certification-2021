import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Divider } from '@mui/material';
import { useHistory } from 'react-router';
import { useData } from '../../utils/hooks/useData';
import { REACT_APP_API_KEY } from '../../utils/constants';
import {
  Container,
  VideoContainer,
  DetailsContainer,
  DivListVideo,
  DivListItem,
  ImgVideo,
  VideoListDetails,
} from './VideoDetail.styles';

const VideoList = ({ data, setVideo }) => {
  const history = useHistory();

  const handleClick = (video) => {
    setVideo(video);
    history.push('/video-detail');
  };

  return data ? (
    <DivListVideo>
      {data.map((video) => (
        <Fragment key={video.id.videoId}>
          <DivListItem onClick={() => handleClick(video)}>
            <ImgVideo src={video.snippet.thumbnails.medium.url} alt="image" />
            <VideoListDetails>
              <Typography>{video.snippet.title}</Typography>
            </VideoListDetails>
          </DivListItem>
          <Divider />
        </Fragment>
      ))}
    </DivListVideo>
  ) : (
    'loading'
  );
};

const VideoDetail = ({ video, setVideo }) => {
  const YOUTUBE_RELATED_API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&maxResults=25&relatedToVideoId=${video.id.videoId}&type=video&key=${REACT_APP_API_KEY}`;

  const { data } = useData(YOUTUBE_RELATED_API_URL);

  return (
    <Container>
      <VideoContainer>
        <iframe
          title="video"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
        <DetailsContainer>
          <Typography gutterBottom variant="h5" component="div">
            {video.snippet.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {video.snippet.description}
          </Typography>
        </DetailsContainer>
      </VideoContainer>
      <VideoList data={data} setVideo={setVideo} />
    </Container>
  );
};

const StyledVideoDetail = styled(VideoDetail)(() => ({}));

export default StyledVideoDetail;

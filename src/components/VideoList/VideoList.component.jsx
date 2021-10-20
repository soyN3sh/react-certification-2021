import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { Typography, Divider } from '@mui/material';
import {
  DivListVideo,
  DivListItem,
  ImgVideo,
  VideoListDetails,
} from './VideoList.styles';

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

export default VideoList;

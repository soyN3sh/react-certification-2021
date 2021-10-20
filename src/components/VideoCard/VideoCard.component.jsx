import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useHistory } from 'react-router';

const VideoCard = ({ data, setVideo }) => {
  const history = useHistory();

  const handleClick = () => {
    setVideo(data);
    history.push('/video-detail');
  };

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 345, width: 345, height: 345 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="140"
          image={data.snippet.thumbnails.medium.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.snippet.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.snippet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;

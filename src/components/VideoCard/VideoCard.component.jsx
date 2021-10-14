import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const VideoCard = (props) => {
  const { data } = props;

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 345, width: 345, height: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.snippet.thumbnails.default.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.snippet.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.snippet.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

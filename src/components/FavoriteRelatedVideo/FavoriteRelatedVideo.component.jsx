import React from 'react';
import { useHistory } from 'react-router';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const FavoriteRelatedVideo = ({ video }) => {
  const { thumbnails, title } = video.snippet;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/favorites/${video.id}`);
  };
  return (
    <Card
      sx={{
        widht: '100%',
        height: '100px',
      }}
    >
      <CardActionArea
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}
        onClick={handleClick}
      >
        <CardMedia
          component="img"
          sx={{ width: 120, height: 90, paddingLeft: '10px', paddingTop: '10px' }}
          image={thumbnails.medium.url}
        />
        <CardContent
          sx={{
            height: '100%',
            flexGrow: 0,
            padding: '5px',
            boxSizing: 'border-box',
          }}
        >
          <Typography>{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FavoriteRelatedVideo;

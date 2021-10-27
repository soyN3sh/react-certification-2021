import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useHistory } from 'react-router';

const FavoriteVideoCard = ({ data }) => {
  const { thumbnails, title, description } = data.snippet;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/favorites/${data.id.videoId ? data.id.videoId : data.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 345, width: 345, height: 345 }}>
      <CardActionArea id="cardActionArea" onClick={handleClick}>
        <CardMedia component="img" height="140" image={thumbnails.medium.url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FavoriteVideoCard;

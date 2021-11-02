import React, { useContext, useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import FavoriteButton from '../FavoriteButton/FavoriteButton.component';
import GlobalContext from '../../providers/Global/GlobalContext';

const FavoriteVideoCard = ({ data }) => {
  const {
    state: { user },
  } = useContext(GlobalContext);

  const { thumbnails, title, description } = data.snippet;

  const [showButton, setShowButton] = useState(false);

  const history = useHistory();

  const handleClick = () => {
    history.push(`/favorites/${data.id}`);
  };

  const handleMouseEnter = (e) => {
    e.preventDefault();
    setShowButton(true);
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    setShowButton(false);
  };

  return (
    <Card
      id="favoriteVideoCard"
      sx={{ maxWidth: 345, maxHeight: 345, width: 345, height: 345 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {user.authenticated && showButton ? <FavoriteButton video={data} /> : null}
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

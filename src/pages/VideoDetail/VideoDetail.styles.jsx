import { styled } from '@mui/material/styles';

const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
}));

const VideoContainer = styled('div')(() => ({
  width: '70%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
}));

const DetailsContainer = styled('div')(() => ({
  padding: '10px 30px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
}));

const DivListVideo = styled('div')(() => ({
  width: '30%',
  height: '100%',
  overflow: 'scroll',
}));

const DivListItem = styled('div')(() => ({
  widht: '100%',
  height: '100px',
  position: 'relative',
  display: 'flex',
  alignitems: 'center',

  '& :hover': {
    cursor: 'pointer',
  },
}));

const ImgVideo = styled('img')(() => ({
  width: '120px',
  height: '90px',
}));

const VideoListDetails = styled('div')(() => ({
  height: '100%',
  flexGrow: 0,
  padding: '5px',
  boxSizing: 'border-box',
}));

export {
  Container,
  VideoContainer,
  DetailsContainer,
  DivListVideo,
  DivListItem,
  ImgVideo,
  VideoListDetails,
};

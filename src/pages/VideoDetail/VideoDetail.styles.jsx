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
  padding: '16px',
}));

const DetailsContainer = styled('div')(() => ({
  padding: '10px 30px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
}));

export { Container, VideoContainer, DetailsContainer };

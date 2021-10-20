import { styled } from '@mui/material/styles';

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

export { DivListVideo, DivListItem, ImgVideo, VideoListDetails };

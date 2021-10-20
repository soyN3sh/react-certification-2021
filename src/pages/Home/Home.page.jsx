import React from 'react';
import Box from '@mui/material/Box';
import Content from '../../components/Content/Content.component';

function HomePage({ data, setVideo }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Content data={data} setVideo={setVideo} />
    </Box>
  );
}

export default HomePage;

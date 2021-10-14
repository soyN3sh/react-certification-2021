import React from 'react';
import Box from '@mui/material/Box';
import MyAppBar from '../../components/MyAppBar/MyAppBar.component';
import Content from '../../components/Content/Content.component';

function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar />
      <Content />
    </Box>
  );
}

export default HomePage;

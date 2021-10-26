import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Content from '../../components/Content/Content.component';
import GlobalContext from '../../providers/Global/GlobalContext';
import useData from '../../utils/hooks/useData';

function HomePage() {
  const { state } = useContext(GlobalContext);

  const { data } = useData('search', state.apiParams);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Content data={data} />
    </Box>
  );
}

export default HomePage;

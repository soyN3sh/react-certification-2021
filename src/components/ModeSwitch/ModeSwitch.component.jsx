import React from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

const ModeSwitch = () => {
  return (
    <FormGroup sx={{ justifyContent: 'center' }}>
      <FormControlLabel disabled control={<Switch />} label="Dark mode" />
    </FormGroup>
  );
};

export default ModeSwitch;

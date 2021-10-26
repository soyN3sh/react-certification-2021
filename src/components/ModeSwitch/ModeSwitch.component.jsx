import React, { useContext } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import GlobalContext from '../../providers/Global/GlobalContext';
import { actions } from '../../utils/reducer/actions';

const ModeSwitch = () => {
  const {
    state: { toggleMode },
    dispatch,
  } = useContext(GlobalContext);

  const handleModeChange = () => {
    dispatch({ type: actions.toggleDarkMode, payload: !toggleMode });
  };

  return (
    <FormGroup sx={{ justifyContent: 'center' }}>
      <FormControlLabel
        control={<Switch id="modeSwitch" onChange={handleModeChange} />}
        label="Dark mode"
      />
    </FormGroup>
  );
};

export default ModeSwitch;

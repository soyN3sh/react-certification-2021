import React, { useContext, useState } from 'react';
import {
  Alert,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import GlobalContext from '../../providers/Global/GlobalContext';
import { actions } from '../../utils/reducer/actions';
import loginApi from '../../utils/login.api';
import { storage } from '../../utils/storage';

const LoginForm = () => {
  const {
    state: { isLoginDialogOpen },
    dispatch,
  } = useContext(GlobalContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFormClose = () => {
    dispatch({ type: actions.toggleLoginDialog, payload: false });
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const authenticateUser = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const tmpUser = await loginApi(username, password);
      storage.set('user', { ...tmpUser, authenticated: true });
      dispatch({ type: actions.setUser, payload: { ...tmpUser, authenticated: true } });
      setLoading(false);
      handleFormClose();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={isLoginDialogOpen} onClose={handleFormClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {error !== '' ? <Alert severity="error">{error}</Alert> : null}
          <TextField
            autoFocus
            required
            margin="dense"
            id="usernameInput"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            value={username}
            onChange={handleUsername}
            disabled={loading}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="passwordInput"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            value={password}
            onChange={handlePassword}
            disabled={loading}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={authenticateUser} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginForm;

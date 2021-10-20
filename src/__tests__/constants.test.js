import { REACT_APP_AUTH_STORAGE_KEY, REACT_APP_API_KEY } from '../utils/constants';

it('check AUTH_STORAGE_KEY', () => {
  expect(REACT_APP_AUTH_STORAGE_KEY).toBe('wa_cert_authenticated');
});

it('check API_KEY', () => {
  expect(REACT_APP_API_KEY).not.toBe(null);
});

import { AUTH_STORAGE_KEY, API_KEY } from '../utils/constants';

it('check AUTH_STORAGE_KEY', () => {
  expect(AUTH_STORAGE_KEY).toBe('wa_cert_authenticated');
});

it('check API_KEY', () => {
  expect(API_KEY).not.toBe(null);
});

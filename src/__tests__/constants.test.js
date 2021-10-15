import { AUTH_STORAGE_KEY } from '../utils/constants';

it('check AUTH_STORAGE_KEY', () => {
  expect(AUTH_STORAGE_KEY).toBe('wa_cert_authenticated');
});

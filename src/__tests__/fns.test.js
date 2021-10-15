import { random } from '../utils/fns';

it('random number greater than 0 ', () => {
  const num = random(1000);
  expect(num).toBeGreaterThan(0);
});

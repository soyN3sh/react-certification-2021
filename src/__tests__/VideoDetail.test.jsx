import React from 'react';
import { render } from '@testing-library/react';

import StyledVideoDetail from '../pages/VideoDetail/VideoDetail.page';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({
    params: {
      videoId: 'nmXMgqjQzls',
    },
  }),
}));

it('renders title for selected video', () => {
  render(<StyledVideoDetail />);

  const youtubeVideo = document.querySelector('#youtubeVideo');
  expect(youtubeVideo).toHaveAttribute('title', 'youtubeVideo');
});

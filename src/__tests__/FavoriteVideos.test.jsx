import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import GlobalContext from '../providers/Global/GlobalContext';

import FavoriteVideos from '../pages/FavoriteVideos/FavoriteVideos.page';

const fakeVideo = [
  {
    kind: 'youtube#searchResult',
    etag: 'uyV-xf8yG6xa2tQKagAt55iBXnw',
    id: 'nmXMgqjQzls',
    snippet: {
      publishedAt: '2019-09-30T23:54:32Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Video Tour | Welcome to Wizeline Guadalajara',
      description:
        'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2019-09-30T23:54:32Z',
    },
  },
];

const initialState = {
  state: {
    toggleMode: false,
    favoriteVideos: fakeVideo,
    user: {
      authenticated: false,
    },
  },
};

const FavoriteVideosWithContext = ({ state }) => {
  return (
    <GlobalContext.Provider value={{ ...state }}>
      <FavoriteVideos />
    </GlobalContext.Provider>
  );
};

describe('HomePage tests', () => {
  it('Renders async data', async () => {
    await act(async () => {
      render(<FavoriteVideosWithContext state={initialState} />);
    });

    expect(
      screen.getByText('Video Tour | Welcome to Wizeline Guadalajara')
    ).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalContext from '../providers/Global/GlobalContext';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton.component';

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

const video = fakeVideo[0];

describe('FavoriteButton tests', () => {
  const initialState = {
    state: {
      user: {
        authenticated: true,
      },
      favoriteVideos: fakeVideo,
    },
    dispatch: jest.fn(),
  };

  const FavoriteButtonWithContext = ({ state, dispatch }) => {
    return (
      <GlobalContext.Provider value={{ ...state, dispatch }}>
        <FavoriteButton video={video} />
      </GlobalContext.Provider>
    );
  };

  it('RemoveFavoriteButton renders correctly', () => {
    const state = initialState;
    render(<FavoriteButtonWithContext state={state} />);

    expect(screen.getByTestId('removefavButton')).toBeInTheDocument();
  });

  it('AddFavoriteButton renders correctly', () => {
    const state = {
      state: {
        user: {
          authenticated: true,
        },
        favoriteVideos: [],
      },
      dispatch: jest.fn(),
    };
    render(<FavoriteButtonWithContext state={state} />);

    expect(screen.getByTestId('addFavButton')).toBeInTheDocument();
  });
});

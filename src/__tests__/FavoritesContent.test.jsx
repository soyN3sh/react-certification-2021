import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalContext from '../providers/Global/GlobalContext';
import FavoritesContent from '../components/FavoritesContent/FavoritesContent.component';

const testData = [
  {
    kind: 'youtube#searchResult',
    etag: 'uT5DcxqXLmHXWTfTRy0fKwoX8q4',
    id: {
      kind: 'youtube#video',
      videoId: '9kMZnNxum_w',
    },
    snippet: {
      publishedAt: '2021-06-28T23:21:42Z',
      channelId: 'UCW5NNtTSY5z5mENZ8dt-RCw',
      title: 'I Went To the Wrong Hood In Mexico City 🇲🇽',
      description:
        'Downtown Mexico City Travel Tour. In this video, I travel to Downtown Mexico City Streets to learn more about the Mexican culture there. and end finding myself in a bad neighborhood \n\nMexico City is the capital of Mexico and is the 5th largest and populated city in the world. Located in the Valley of Mexico at a high altitude, Mexico City is one of the most important cultural and financial centers in the world with a GDP of $411 billion in 2011',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/9kMZnNxum_w/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/9kMZnNxum_w/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/9kMZnNxum_w/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/9kMZnNxum_w/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/9kMZnNxum_w/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Ace Live',
      liveBroadcastContent: 'none',
      publishTime: '2021-06-28T23:21:42Z',
    },
  },
];

describe('FavoritesContent tests', () => {
  const initialState = {
    state: {
      user: {
        authenticated: false,
      },
    },
    dispatch: jest.fn(),
  };

  const FavoritesContentWithContext = ({ state }) => {
    return (
      <GlobalContext.Provider value={{ ...state }}>
        <FavoritesContent data={testData} />
      </GlobalContext.Provider>
    );
  };

  it('FavoritesContent renders correctly', () => {
    const state = initialState;
    render(<FavoritesContentWithContext state={state} />);

    expect(
      screen.getByText('I Went To the Wrong Hood In Mexico City 🇲🇽')
    ).toBeInTheDocument();
  });
});

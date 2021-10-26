import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App/App.component';

const fakeData = {
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'uyV-xf8yG6xa2tQKagAt55iBXnw',
      id: {
        kind: 'youtube#video',
        videoId: 'nmXMgqjQzls',
      },
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
  ],
};

const mockFetch = (mockData) => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );
};

const mockFetchCleanUp = () => {
  global.fetch.mockClear();
  delete global.fetch;
};

describe('App tests', () => {
  it('navigates to home', async () => {
    mockFetch(fakeData);
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
    });

    expect(screen.getByText('Dark mode')).toBeInTheDocument();

    const videoCardsContainer = document.querySelector('#videoCardsContainer');

    expect(videoCardsContainer).toBeInTheDocument();

    mockFetchCleanUp();
  });
});

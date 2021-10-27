import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import GlobalContext from '../providers/Global/GlobalContext';
import useData from '../utils/hooks/useData';
import FavoriteVideoDetail from '../pages/FavoriteVideoDetail/FavoriteVideoDetail.component';

const mockDataFetch = {
  items: [
    {
      kind: 'youtube#searchResult',
      etag: '2SIswwoogRycpIP6d_C0gIWrbM8',
      id: {
        kind: 'youtube#channel',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      },
      snippet: {
        publishedAt: '2014-09-27T01:39:18Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline',
        description:
          "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
        thumbnails: {
          default: {
            url: 'https://yt3.ggpht.com/ytc/AKedOLTUzsZphFQtqKpjljMZHmnaZU2rKpo6SGbv_NOGyg=s88-c-k-c0xffffffff-no-rj-mo',
          },
          medium: {
            url: 'https://yt3.ggpht.com/ytc/AKedOLTUzsZphFQtqKpjljMZHmnaZU2rKpo6SGbv_NOGyg=s240-c-k-c0xffffffff-no-rj-mo',
          },
          high: {
            url: 'https://yt3.ggpht.com/ytc/AKedOLTUzsZphFQtqKpjljMZHmnaZU2rKpo6SGbv_NOGyg=s800-c-k-c0xffffffff-no-rj-mo',
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'upcoming',
        publishTime: '2014-09-27T01:39:18Z',
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

const endpoint = 'videos';
const apiParams = {
  id: 'nmXMgqjQzls',
};

const mockFetchCleanUp = () => {
  global.fetch.mockClear();
  delete global.fetch;
};

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({
    params: {
      videoId: 'nmXMgqjQzls',
    },
  }),
}));

const initialState = {
  state: {
    user: {
      authenticated: false,
    },
    favoriteVideos: [],
  },
  dispatch: jest.fn(),
};

const FavoriteVideoDetailWithContext = ({ state }) => {
  return (
    <GlobalContext.Provider value={{ ...state }}>
      <FavoriteVideoDetail />
    </GlobalContext.Provider>
  );
};

it('renders title for selected video and async data for related videos', async () => {
  render(<FavoriteVideoDetailWithContext state={initialState} />);

  mockFetch(mockDataFetch);
  const { result, waitForNextUpdate } = renderHook(() => useData(endpoint, apiParams));
  expect(result.current).toMatchObject({
    data: null,
    loading: true,
  });
  await waitForNextUpdate();
  expect(result.current.data).toMatchObject(mockDataFetch.items);
  mockFetchCleanUp();

  const youtubeVideo = document.querySelector('#youtubeVideo');
  expect(youtubeVideo).toHaveAttribute('title', 'youtubeVideo');
});

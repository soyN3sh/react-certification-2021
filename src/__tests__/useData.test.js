import { renderHook } from '@testing-library/react-hooks';
import useData from '../utils/hooks/useData';

const endpoint = 'wizeline';
const apiParams = {
  q: 'wizeline',
  maxResults: 25,
  type: 'video',
};

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

const mockFetchError = () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.reject());
};

const mockFetchCleanUp = () => {
  global.fetch.mockClear();
  delete global.fetch;
};

it('default state', () => {
  const { result } = renderHook(() => useData(endpoint, apiParams));
  expect(result.current.data).toStrictEqual(null);
});

describe('useData async tests', () => {
  it('loads data', async () => {
    mockFetch(mockDataFetch);
    const { result, waitForNextUpdate } = renderHook(() => useData(endpoint, apiParams));
    expect(result.current).toMatchObject({
      data: null,
      loading: true,
    });
    await waitForNextUpdate();
    expect(result.current.data).toMatchObject(mockDataFetch.items);
    mockFetchCleanUp();
  });

  it('error', async () => {
    mockFetchError();
    const { result, waitForNextUpdate } = renderHook(() => useData(endpoint, apiParams));
    await waitForNextUpdate();
    expect(result.current.data).toBeNull();
    mockFetchCleanUp();
  });
});

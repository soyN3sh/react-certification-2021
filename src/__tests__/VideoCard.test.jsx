import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VideoCard from '../components/VideoCard/VideoCard.component';

const mockHistoryPush = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const testData = {
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
};

it('render Wizeline title on a card', () => {
  render(<VideoCard data={testData} />);

  const videoCard = screen.getByText('Video Tour | Welcome to Wizeline Guadalajara');
  expect(videoCard).toBeInTheDocument();
});

it('handle click on cardActionArea', () => {
  render(<VideoCard data={testData} />);

  const videoCard = screen.getByText('Video Tour | Welcome to Wizeline Guadalajara');

  fireEvent.click(videoCard);

  expect(mockHistoryPush).toHaveBeenCalledWith(`/video-detail/${testData.id.videoId}`);
});

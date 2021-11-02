import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RelatedVideo from '../components/RelatedVideo/RelatedVideo.component';

const mockHistoryPush = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const testVideo = {
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
};

describe('RelatedVideo tests', () => {
  it('RelatedVideo renders correctly', () => {
    render(<RelatedVideo video={testVideo} />);

    const relatedVideo = screen.getByText('Video Tour | Welcome to Wizeline Guadalajara');

    expect(relatedVideo).toBeInTheDocument();
  });

  it('handle click on cardActionArea', () => {
    render(<RelatedVideo video={testVideo} />);

    const relatedVideo = screen.getByText('Video Tour | Welcome to Wizeline Guadalajara');

    fireEvent.click(relatedVideo);

    expect(mockHistoryPush).toHaveBeenCalledWith(`/video-detail/${testVideo.id}`);
  });
});

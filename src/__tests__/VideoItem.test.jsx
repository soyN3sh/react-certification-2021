import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VideoItem from '../components/VideoItem/VideoItem.component';

const mockHistoryPush = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const testVideo = {
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
};

describe('VideoItem tests', () => {
  it('VideoItem renders correctly', () => {
    render(<VideoItem video={testVideo} />);

    const videoItem = screen.getByText('Wizeline');

    expect(videoItem).toBeInTheDocument();
  });

  it('handle click on cardActionArea', () => {
    render(<VideoItem video={testVideo} />);

    const videoItem = screen.getByText('Wizeline');

    fireEvent.click(videoItem);

    expect(mockHistoryPush).toHaveBeenCalledWith(`/video-detail/${testVideo.id.videoId}`);
  });
});

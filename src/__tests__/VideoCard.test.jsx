import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from '../components/VideoCard/VideoCard.component';

const testData = {
  kind: 'youtube#searchResult',
  etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
  id: '{channelId: "UCPGzT4wecuWM0BH9mPiulXg", kind: "yout…}',
  snippet: {
    publishedAt: '2014-09-27T01:39:18Z',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    title: 'Wizeline',
    description:
      "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
    thumbnails: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
      },
      medium: '{url: "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_…}',
      high: '{url: "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_…}',
    },
    channelTitle: 'Wizeline',
    liveBroadcastContent: 'upcoming',
    publishTime: '2014-09-27T01:39:18Z',
  },
};

it('render dark mode label', () => {
  render(<VideoCard data={testData} />);
  expect(screen.getByText('Wizeline')).toBeInTheDocument();
});

import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import StyledVideoDetail from '../../pages/VideoDetail';
import MyAppBar from '../MyAppBar/MyAppBar.component';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import { useData } from '../../utils/hooks/useData';
import { REACT_APP_API_KEY } from '../../utils/constants';

function App() {
  const [query, setQuery] = useState('wizeline');

  const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&maxResults=25&q=${query}&key=${REACT_APP_API_KEY}`;

  const [url, setUrl] = useState(YOUTUBE_API_URL);
  const { data } = useData(url);

  const [video, setVideo] = useState(null);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setUrl(YOUTUBE_API_URL);
    }
  };

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <MyAppBar
            query={query}
            handleQuery={handleQuery}
            handleKeyDown={handleKeyDown}
          />
          <Switch>
            <Route exact path="/">
              <HomePage data={data} setVideo={setVideo} />
            </Route>
            <Route exact path="/video-detail">
              <StyledVideoDetail video={video} setVideo={setVideo} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

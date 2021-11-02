import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomePage from '../pages/Home/Home.page';
import StyledVideoDetail from '../pages/VideoDetail/VideoDetail.page';
import FavoriteVideoDetail from '../pages/FavoriteVideoDetail/FavoriteVideoDetail.component';
import FavoriteVideos from '../pages/FavoriteVideos/FavoriteVideos.page';
import NotFound from '../pages/NotFound/NotFound.page';

const routesList = [
  {
    name: 'Home',
    path: '/',
    icon: HomeIcon,
    component: HomePage,
    exact: true,
    listed: true,
    private: false,
  },
  {
    name: 'Video Detail',
    path: '/video-detail/:videoId',
    component: StyledVideoDetail,
    exact: true,
    private: false,
  },
  {
    name: 'Favorites',
    path: '/favorites',
    icon: FavoriteIcon,
    component: FavoriteVideos,
    exact: true,
    listed: true,
    private: true,
  },
  {
    name: 'Favorite Videos Detail',
    path: '/favorites/:videoId',
    component: FavoriteVideoDetail,
    exact: true,
    private: true,
  },
  {
    name: 'Not Found',
    path: '*',
    component: NotFound,
    exact: false,
  },
];

export default routesList;

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar.styles';
import GlobalContext from '../../providers/Global/GlobalContext';
import { actions } from '../../utils/reducer/actions';

const SearchBar = () => {
  const history = useHistory();

  const {
    state: { apiParams },
    dispatch,
  } = useContext(GlobalContext);

  const [query, setQuery] = useState(apiParams.q);

  const loadHomeWithQuery = () => {
    history.push('/');
    dispatch({ type: actions.setQuery, payload: query });
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      loadHomeWithQuery();
    }
  };

  const handleClick = () => {
    loadHomeWithQuery();
  };

  return (
    <Search>
      <SearchIconWrapper>
        <IconButton id="searchButton" edge="start" color="inherit" onClick={handleClick}>
          <SearchIcon />
        </IconButton>
      </SearchIconWrapper>
      <StyledInputBase
        value={query}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleQuery}
        onKeyDown={handleKeyDown}
      />
    </Search>
  );
};

export default SearchBar;

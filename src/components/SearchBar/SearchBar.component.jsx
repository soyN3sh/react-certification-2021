import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
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

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push('/');
      dispatch({ type: actions.setQuery, payload: query });
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
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

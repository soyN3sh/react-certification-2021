import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar.styles';

const SearchBar = ({ query, handleQuery, handleKeyDown }) => {
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


import {InputBase,Box,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SEARCH_PLACEHOLDER } from "../../../data/staticData"; 


const Search=({ placeholder })=>{
    return (
    <SearchContainer>
    <InputSearchBase placeholder={placeholder || SEARCH_PLACEHOLDER}
    inputProps={{ 'aria-label': 'search books' }}/>
    <SearchIconWrapper>
      <SearchIcon data-testid="SearchIcon"/></SearchIconWrapper>
    </SearchContainer>
    )
}
export default Search;
 

const SearchContainer = styled(Box)`
  background: #fff;
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #e0e0e0;

  width: 60%;
  margin-left: 3rem;

  /* Tablet */
  @media (max-width: 1024px) {
    width: 55%;
    margin-left: 1rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    height: 40px;
  }
`;

const InputSearchBase = styled(InputBase)`
  flex: 1;
  font-size: 12px;

  & input {
    padding: 0 10px;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
  }

  /* Mobile */
  @media (max-width: 600px) {
    & input {
      font-size: 14px;
    }
  }
`;

const SearchIconWrapper = styled(Box)`
  background-color: #eb7311;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;

  width: 13%;
  border-radius: 0 4px 4px 0;

  /* Tablet */
  @media (max-width: 1024px) {
    width: 15%;
  }

  /* Mobile */
  @media (max-width: 600px) {
    width: 48px;
  }
`;


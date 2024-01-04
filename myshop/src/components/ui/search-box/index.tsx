import { SearchWrapper, SearchInput, SearchButton } from './search-box.styles'
import styles from'./search-box.module.css'
import SearchIcon from 'src/components/svg/search';
const SearchBox = () => {
    
    return (
    <SearchWrapper>
    <input className={styles.searchQueryInput} type="text" name="searchQueryInput" defaultValue="" onChange={function() {}}  />
    <button className={styles.searchQuerySubmit} type="submit" name="searchQuerySubmit">
    <SearchIcon/>
    </button>
    </SearchWrapper>
    );
};

export default SearchBox;
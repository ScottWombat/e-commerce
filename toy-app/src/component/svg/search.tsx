import styles from './svg.module.css'
export const SearchIcon = () =>{
    return(
        <svg id="search_icon" x="0px" y="0px" height="124" width="124" className={styles.svg_icon + ' ' + styles.search_icon} aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className={styles.search_path} fill="none" stroke="#000"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
    );
}


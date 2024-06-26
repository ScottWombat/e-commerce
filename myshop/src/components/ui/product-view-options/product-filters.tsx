import styles from './product-sort-by.module.css'
import FiltersIcon from 'src/components/svg/filters';
const ProductFilters = (props) => {
    const {showFilters, setShowFilters} = props;
    const handleClick = (e:any) => {
        setShowFilters(!showFilters)
    }
    return(
        <button onClick={handleClick} className={styles.btnNav1}>Hide Filters<FiltersIcon/></button>
    )
}

export default ProductFilters;
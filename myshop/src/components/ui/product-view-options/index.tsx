import ProductFilters from "./product-filters";
import ProductSortBy from "./product-sort-by";
import styles from "./product-view-options.module.css"
const ProductViewOptions = (props) => {
    return(
        <div className={styles.container}>
            <ProductFilters showFilters={props.showFilters} setShowFilters={props.setShowFilters}/>
            <ProductSortBy/>
        </div>
    )
}

export default ProductViewOptions;
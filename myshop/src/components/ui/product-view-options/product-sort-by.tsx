import styles from './product-sort-by.module.css'
const ProductSortBy = () => {
    return(
    <div className={styles.btnDropdown}>
        
        <button className={styles.btnNav}>Sort By:featured<span className={styles.chevron}>&#8250;</span></button>
        <div className={styles.dropdown}>
            <div className={styles.dropdown_content}>
            <ul>
             <li>Newest</li>
             <li>Price:High-Low</li>
             <li>Price:Low-High</li>
            </ul>
            </div>
        </div>
    </div>
    )
}

export default ProductSortBy;
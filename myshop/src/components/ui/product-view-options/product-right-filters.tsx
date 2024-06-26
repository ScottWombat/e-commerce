import styles from './product-right-filters.module.css'

const ProductRightFilters = (props) => {
    return (
        <div className={styles.filters_wrapper}>
            <ul className={styles.ul_accord}>
                <li className={styles.li_accord}>
                    <input type="checkbox" className={styles.in_accord} />
                    <span className={styles.i_span}>
                    <div className={styles.h2_accord}>Sort By Price</div>
                    <i className={styles.arrow}></i>
                    </span>
                    <p className={styles.p_accord}>
                        <div style={{width: '80%',margin: '5px'}}>
                        <input className={styles.checkbox_filter} type="checkbox" id={"id1"} name="id_1" key="id1"/>
                        <span style={{marginLeft: '5px'}}>$100-$150</span>
                        </div>
                        <div style={{width: '80%',margin: '5px'}}>
                        <input className={styles.checkbox_filter} type="checkbox" id={"id2"} name="id_2" key="id2"/>
                        <span style={{marginLeft: '5px'}}>$150-$200</span>
                        </div>
                        <div style={{width: '80%',margin: '5px'}}>
                        <input className={styles.checkbox_filter} type="checkbox" id={"id3"} name="id_3" key="id3"/>
                        <span style={{marginLeft: '5px'}}>Over $200</span>
                        </div>
                    
                    </p>
                </li>
                <li className={styles.li_accord}>
                    <input type="checkbox" className={styles.in_accord} />
                    <span className={styles.i_span}>
                    <div className={styles.h2_accord}>Product Discount</div>
                    <i className={styles.arrow}></i>
                    </span>
                    <p className={styles.p_accord}>
                        <div style={{width: '80%',margin: '5px'}}>
                        <input className={styles.checkbox_filter} type="checkbox" id={"id1"} name="id_1" key="id1"/>
                        <span style={{marginLeft: '5px'}}>$100-$150</span>
                        </div>
                        <div style={{width: '80%',margin: '5px'}}>
                        <input  className={styles.checkbox_filter} type="checkbox" id={"id2"} name="id_2" key="id2"/>
                        <span style={{marginLeft: '5px'}}>$150-$200</span>
                        </div>
                        <div style={{width: '80%',margin: '5px'}}>
                        <input className={styles.checkbox_filter} type="checkbox" id={"id3"} name="id_3" key="id3"/>
                        <span style={{marginLeft: '5px'}}>Over $200</span>
                        </div>
                    
                    </p>
                </li>
            </ul>
        </div>
    );

}
export default ProductRightFilters;
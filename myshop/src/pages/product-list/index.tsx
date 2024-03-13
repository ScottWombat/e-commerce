import React, { useEffect } from 'react';
import styles from './product-list.module.css'
import { useParams } from "react-router";
import Breadcrumbs from 'src/components/breadcrumb';
const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Category', link: '/products/category' },
    { label: 'Product Detail' },
    ];

    

const ProductList = (props) => {
   
    const { catalog } = useParams();
    useEffect(() => {
        //const params = new URLSearchParams(search);
        //const queryValue = params.get('catalog');
        console.log('ddddd')
        console.log(catalog)
    }, [])


    const classes = `${styles.selected} fa fa-th`
    //const count = props.location.state?.count || 0;    
    return (
        <div className={styles.p_container}>
            <div className={styles.breadcrumb_view}>
                <div className={styles.breadcrumb_row}>
                    <a href="#">  <i className="fa fa-home fa-lg"></i></a>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                   
                </div>
          
            </div>
            <div className={styles.left_view}>
                <ul className={styles.label_ul}>

                    <li><label htmlFor="blue" className={styles.blue_label} >BLUE</label></li>
                    <li><label htmlFor="red">RED</label></li>
                    <li><label htmlFor="green">GREEN</label></li>
                    <li><label htmlFor="reset">RESET</label> </li>

                </ul>
            </div>{/*-- end left view */}
            <div className={styles.right_view}>

                <div className={styles.filter_buttons}>
                    <div className={styles.list_view_button}><i className="fa fa-bars" aria-hidden="true"></i> List view</div>
                    <div className={styles.grid_view_button}><i className="fa fa-th-large" aria-hidden="true"></i> Grid view</div>
                </div>

            </div>
            <div className={styles.product_content}>

                <input type="radio" id="blue" name="color" />
                <input type="radio" id="red" name="color" />
                <input type="radio" id="green" name="color" />
                <input type="radio" id="reset" name="color" />
                <ul className={styles.test}>

                    <li className={styles.tile + ' ' + styles.blue}>1dddd</li>
                    <li className={styles.tile + ' ' + styles.red}>2</li>
                    <li className={styles.tile + ' ' + styles.blue}>3</li>
                    <li className={styles.tile + ' ' + styles.green}>4</li>
                    <li className={styles.tile + ' ' + styles.blue}>5</li>
                    <li className={styles.tile + ' ' + styles.red}>6</li>
                    <li className={styles.tile + ' ' + styles.red}>7</li>
                    <li className={styles.tile + ' ' + styles.green}>8</li>
                    <li className={styles.tile + ' ' + styles.blue}>9</li>
                    <li className={styles.tile + ' ' + styles.green}>10</li>
                    <li className={styles.tile + ' ' + styles.red}>11</li>
                    <li className={styles.tile + ' ' + styles.green}>12</li>
                    <li className={styles.tile + ' ' + styles.blue}>13</li>
                    <li className={styles.tile + ' ' + styles.blue}>14</li>
                    <li className={styles.tile + ' ' + styles.green}>15</li>
                    <li className={styles.tile + ' ' + styles.red}>16</li>
                </ul>
            </div>
        </div>
    );
}

export default ProductList;
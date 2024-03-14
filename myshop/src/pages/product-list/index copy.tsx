import React, { useEffect, useState } from 'react';
import styles from './product-list.module.css'
import { useParams } from "react-router";
import Breadcrumbs from 'src/components/breadcrumb';
import { ULWrapper} from './product-list.styled';
const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Category', link: '/products/category' },
    { label: 'Product Detail' },
    ];

    

const ProductList = (props) => {
    const [gridListStyle, setGridListStyle] = useState(false);
    const { catalog } = useParams();
    useEffect(() => {{}
        //const params = new URLSearchParams(search);
        //const queryValue = params.get('catalog');
        setGridListStyle(true);
       
    }, [])
    const gridBlueStyle = gridListStyle?styles.blue:styles.blue_row;
    const gridRedStyle = gridListStyle?styles.red:styles.red_row;
    const gridGreenStyle = gridListStyle?styles.green:styles.green_row;
    const blueStyle = styles.tile + ' ' + gridBlueStyle;
    const redStyle = styles.tile + ' ' + gridRedStyle;
    const greenStyle = styles.tile + ' ' + gridGreenStyle;

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
                
                <ULWrapper>
                    <li className={blueStyle}>1dddd</li>
                    <li className={redStyle}>2</li>
                    <li className={blueStyle}>3</li>
                    <li className={greenStyle}>4</li>
                    <li className={blueStyle}>5</li>
                    <li className={redStyle}>6</li>
                    <li className={redStyle}>7</li>
                    <li className={greenStyle}>4</li>
                    <li className={blueStyle}>9</li>
                    <li className={greenStyle}>4</li>
                    <li className={redStyle}>11</li>
                    <li className={greenStyle}>4</li>
                    <li className={blueStyle}>13</li>
                    <li className={blueStyle}>14</li>
                    <li className={greenStyle}>4</li>
                    <li className={redStyle}>16</li>
                </ULWrapper>
              
            </div>
        </div>
    );
}

export default ProductList;
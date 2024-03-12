import React, { useEffect } from 'react';
import styles from './product-list.module.css'
import { useParams } from "react-router";

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
            <div className={styles.left_view}>

                <label htmlFor="blue">BLUE</label>
                <label htmlFor="red">RED</label>
                <label htmlFor="green">GREEN</label>
                <label htmlFor="reset">RESET</label>
            </div>{/*-- end left view */}
            <div className={styles.right_view}>
                <div>
                    kkk
                </div>
            </div>
            <div className={styles.content}>
                <input type="radio" id="blue" name="color" />
                <input type="radio" id="red" name="color" />
                <input type="radio" id="green" name="color" />
                <input type="radio" id="reset" name="color" />
                <ul className={styles.test}>
                
                <li className={styles.tile + ' ' + styles.blue}>1</li>
                <li className={styles.tile  + ' ' + styles.red}>2</li>
                <li className={styles.tile  + ' ' + styles.blue}>3</li>
                <li className={styles.tile  + ' ' + styles.green}>4</li>
                <li className={styles.tile  + ' ' + styles.blue}>5</li>
                <li className={styles.tile  + ' ' + styles.red}>6</li>
                <li className={styles.tile  + ' ' + styles.red}>7</li>
                <li className={styles.tile  + ' ' + styles.green}>8</li>
                <li className={styles.tile  + ' ' + styles.blue}>9</li>
                <li className={styles.tile  + ' ' + styles.green}>10</li>
                <li className={styles.tile  + ' ' + styles.red}>11</li>
                <li className={styles.tile  + ' ' + styles.green}>12</li>
                <li className={styles.tile  + ' ' + styles.blue}>13</li>
                <li className={styles.tile  + ' ' + styles.blue}>14</li>
                <li className={styles.tile  + ' ' + styles.green}>15</li>
                <li className={styles.tile  + ' ' + styles.red}>16</li>
                </ul>
            </div>
        </div>
    );
}

export default ProductList;
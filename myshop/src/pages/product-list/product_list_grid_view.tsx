import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './product_list_grid_view.module.css'
import { useParams } from "react-router";
import Breadcrumbs from 'src/components/breadcrumb';


const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Category', link: '/products/category' },
    { label: 'Product Detail' },
    ];

const ULWrapper = styled.ul`
    list-style: none;
    padding: 0px 20px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: 3px solid #000;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
    flex-flow: row wrap;
  }
  `;
  
  export const ListItem = styled.li`
  float: left;
  width: 50px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  margin: 2px 15px;
  padding: 0 20px 15px;
  text-align: left;
  `;
  
  export const StyledDiv = styled.div<{displayStyle?:string;}>`
      display: ${props => props.displayStyle};
  `;

const ProductListGridView = (props) => {
    const [gridListStyle, setGridListStyle] = useState(false);
    const { catalog } = useParams();
    useEffect(() => {{}
        //const params = new URLSearchParams(search);
        //const queryValue = params.get('catalog');
        setGridListStyle(true);
       
    }, [])
  
    const gridWidth = gridListStyle?styles.tile:styles.title_width;

    const blueStyle = gridWidth + ' ' + styles.blue;
    const redStyle = gridWidth + ' ' + styles.red;
    const greenStyle = gridWidth + ' ' + styles.green;

    const displayStyle = gridListStyle?'inline':'flex';

    const changeListStyle = () => {
        setGridListStyle(false)
    }
    const changeGridStyle = () => {
        setGridListStyle(true)
    }
    

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

                    <li><label htmlFor="blue" className={styles.list_view_button} >BLUE</label></li>
                    <li><label htmlFor="red" className={styles.list_view_button}>RED</label></li>
                    <li><label htmlFor="green" className={styles.list_view_button}>GREEN</label></li>
                    <li><label htmlFor="reset" className={styles.list_view_button}>RESET</label> </li>

                </ul>
            </div>{/*-- end left view */}
            <div className={styles.right_view}>

                <div className={styles.filter_buttons}>
                    <div className={styles.list_view_button} onClick = {changeListStyle}><i className="fa fa-bars" aria-hidden="true"></i> List view</div>
                    <div className={styles.grid_view_button} onClick = {changeGridStyle}><i className="fa fa-th-large" aria-hidden="true"></i> Grid view</div>
                </div>

            </div>
            <div className={styles.product_content}>

                <input type="radio" id="blue" name="color" />
                <input type="radio" id="red" name="color" />
                <input type="radio" id="green" name="color" />
                <input type="radio" id="reset" name="color" />
                
                <ULWrapper>
                <li className={blueStyle}>
                    <StyledDiv displayStyle={displayStyle}>
                        <div><img src="http://farm8.staticflickr.com/7254/7740405218_deedfa35cb_t.jpg" /></div>
                        <div>Parrot</div>
                    </StyledDiv>
                </li>
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

export default ProductListGridView;
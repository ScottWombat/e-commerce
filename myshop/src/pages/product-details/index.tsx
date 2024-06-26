import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './product-details.module.css'
import styles1 from './image-view.module.css'
import Breadcrumbs from 'src/components/breadcrumb';
import Item from 'src/pages/product/item';
import { useAppDispatch,useAppSelector } from 'src/store/hooks';
import { addItem } from 'src/store/cart/cartReducer';
import { CartData } from 'src/types/user_data';
const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Category', link: '/products/category' },
    { label: 'Product Detail' },
];


const ProductDetails = (props) => {
    //const [searchParams] = useSearchParams();
    //const type = searchParams.get('category');
    const dispatch = useAppDispatch();
    let { catalog, category } = useParams();
    const stars=2;
    const onAddToBagClick = (e) =>{
        let item = {id:'22',price:20.20,key:'123',qty:2}
        dispatch(addItem(item))
    }

    return (
        <div className={styles.main_view}>
            <div className={styles.breadcrumb_view}>
                <div className={styles.breadcrumb_row}>
                    <a href="#">  <i className="fa fa-home fa-lg"></i></a>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                </div>
            </div>
            
            <div className={styles.product_view}>
                <div className={styles.product_view_left}>
                    <Item key='1'/>
                </div>
                <div className={styles.product_view_right}>
                    <div className={styles.item_tag}>Sustainable Materials</div>
                    <div className={styles.item_name_row}>
                        <div className={styles.item_name}>Nike Air Max Dn</div>
                        <div className={styles.product_header_star}>
                        {[...Array(5)].map((e, index) => 
                            (stars <= index)?
                            <i className="fa fa-star" aria-hidden="true" style={{color:'#ccc'}}></i>
                            :
                            <i className="fa fa-star" aria-hidden="true" style={{color:'#FF5F1F'}}></i>
                           
                        )}
                         <span>&#40;4 reviews&#41;</span>
                        </div>
                    </div>
                    <div className={styles.item_desc}>Men's Shoes</div>
                    <div className={styles.item_price}>
                        <span className={styles.price_discount}>$149.99</span>
                        <span className={styles.price_original}>$169.99</span>
                    </div>
                    <div className={styles.cart_checkout}>
                    <button className={styles.cta_btn} onClick={onAddToBagClick}>
                    <img className={styles.cta_icon} src="https://kellychi22.github.io/frontend-mentor-solutions/01-product-preview-card-component/images/icon-cart.svg" alt="cart icon"/>
                    <span>Add to Bag</span>
                    </button>
                    <button className={styles.cta_btn}>
                    <img className={styles.cta_icon} src="https://kellychi22.github.io/frontend-mentor-solutions/01-product-preview-card-component/images/icon-cart.svg" alt="cart icon"/>
                    <span>Checkout</span>
                    </button>
                    </div>
                    <div className={styles.product_details}>
                        <input type="checkbox" className={styles.acc_check} id="detail1" name="detail1" /> 
                        <div className={styles.features}>
                            <div className={styles.features_left}>Details and Features</div>
                            <div className={styles.button_dev}>
                            <label htmlFor="detail1" className={styles.acc_button}></label>
                            </div>
                        </div>
                        <div className={styles.acc_content}>
                                <h2>you wanna read more about me</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                                <p>sorry, nothing to read.</p>
                        </div>
                    </div>
                    <div className={styles.product_specifications}>
                        <input type="checkbox" className={styles.spec_check} id="spec1" name="spec1" />
                        <div className={styles.specfications}>
                            <div className={styles.spec_left}>Product Specifications</div>
                            <div className={styles.button1_dev}>
                               <label htmlFor="spec1" className={styles.spec_button}></label>
                            </div>
                        </div>
                        <div className={styles.spec_content}>
                                <h2>Specication</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                                <p>sorry, nothing to read.</p>
                        </div>
                    </div>
                    <div className={styles.product_shipping}>
                        <input type="checkbox" className={styles.shipping_check} id="ship1" name="ship1" />
                        <div className={styles.shipping}>
                            <div className={styles.ship_left}>Shipping and Returns</div>
                            <div className={styles.button2_dev}>
                               <label htmlFor="ship1" className={styles.ship_button}></label>
                            </div>
                        </div>
                        <div className={styles.shipping_content}>
                                <h2>Shippping</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                                <p>sorry, nothing to read.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ProductDetails;
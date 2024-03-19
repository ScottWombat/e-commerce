import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './product-details.module.css'
import Breadcrumbs from 'src/components/breadcrumb';
const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Category', link: '/products/category' },
    { label: 'Product Detail' },
];


const ProductDetails = (props) => {
    //const [searchParams] = useSearchParams();
    //const type = searchParams.get('category');
    let { catalog, category } = useParams();

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
                    ProductDetails  {catalog} {category}
                </div>
                <div className={styles.product_view_right}>
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
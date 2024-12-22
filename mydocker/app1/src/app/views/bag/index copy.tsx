import React, { useState,useEffect } from "react";
import * as styles from './bag.module.css';
import * as styles2 from './input_number.module.css';
import { Trash } from 'app/svg/trash';
import { useAppDispatch,useAppSelector } from 'app/store/hooks';
import { selectAllItems, getAmountInCart ,removeItem,getTotalPrice,updateCart,increaseQty,decreaseQty} from 'app/store/cart/cartReducer'

const ViewBag = () => {
    const items = useAppSelector(state => selectAllItems(state))
    const totalPrice = useAppSelector(state => getTotalPrice(state))
    const dispatch = useAppDispatch();
    const [data, setData] = useState([]);
    const [subTotal, setSubTotal] = useState(0)
    const [grandTotal,setGrandTotal] = useState(0)
    const [flatRate ,setFlatRate] = useState(15.00)
    const [emptyBag,setEmptyBag] = useState(false)
    useEffect(() => {
        if (data.length === 0) {
            let g = 0;
            items.map(p => {
                g = g + p.price;
            })
            let format_g = (Math.round(g * 100) / 100).toFixed(2);
            setSubTotal(parseFloat(format_g))
            //setSubTotal(totalPrice)
            setData(items)
            setGrandTotal(parseFloat(format_g)+flatRate)
            setEmptyBag(true)
        }

    }, [data]);
    const increase = (id) => {
        let temp = []

        data.map(p => {
            if (id === p.id) {
                let copyData = Object.assign({}, p)
                let qty = copyData['qty'] + 1
                copyData['qty'] = qty;
                let total = copyData['price'] * qty;
                copyData['total'] = (Math.round(total * 100) / 100).toFixed(2);

                temp.push(copyData)

            } else {

                temp.push(p)
            }

        })
        let grand_total = 0.0;

        temp.map(p => {
            console.log((p.total + ":" + p.qty))
            grand_total = grand_total + parseFloat(p.total);
            console.log(grand_total)
        })
        let g = (Math.round(grand_total * 100) / 100).toFixed(2)

        setSubTotal(parseFloat(g));
        setGrandTotal(parseFloat(g)+flatRate)
        //setData(temp)
        let tmp = {
            items: temp,
            totalPrice: parseFloat(g)
        }
        
        dispatch(updateCart(tmp))
        setData(temp)
        //console.log("inddd")
        //console.log(items)
    }
    const decrease = (id,qty) =>{
        const quantity = qty
        let temp = []

        data.map(p => {
            if (id === p.id ) {
                if (p.qty !== quantity){
                    let copyData = Object.assign({}, p)
                    let qty = copyData['qty'] - 1
                    copyData['qty'] = qty;
                    let total = copyData['price'] * qty;
                    copyData['total'] = (Math.round(total * 100) / 100).toFixed(2);

                    temp.push(copyData)
                }

            } else {

                temp.push(p)
            }

        })
        let tmp = {
            items: temp,
            //totalPrice: parseFloat(g)
        }
        if(temp.length==0){
            setEmptyBag(true)
        }
        dispatch(updateCart(tmp))
        setData(temp)
    }
    return(
        <div className={styles.container}>
            <div className={styles.left_container}>
                <div className={styles.bag_message}>
                    <div className={styles.header}>YOUR BAG</div>
                    <div>
                        <div className={styles.left_total}>TOTAL (4 items) 888</div>
                        <div className={styles.description}>Items in your bag are not reserved — check out now to make them yours.</div>
                    </div>
                 </div>
                 <div>dddd</div>
                
             
                {data.map(item => (
                <div className={styles.items}>
                    <div className={styles.item_image}><img src="/assets/images/img1.jpg"  className={styles.img}/></div>
                    <div className={styles.item_details}>
                        <div className={styles.item_title}>
                            <div>{item.title}</div>
                            <div className={styles.item_price}>${item.price}</div>
                        </div>
                        <div className={styles.item_title}>
                            <div className={styles.item_counter}>
                                <div className={styles2.quantity_field} >
                                   <button onClick={()=>decrease(item.id,item.qty)}
                                        className={styles2.value_button + ' ' + styles2.decrease_button}
                                        title="decreae">{item.qty ==1?<Trash/>:'-'}</button>
                                    <div className={styles2.number}>{item.qty}</div>
                                    <button onClick={() => increase(item.id)}
                                        className={styles2.value_button + ' ' + styles2.increase_button}
                                        title="increase">+</button>
                                </div>
                            </div>
                            <div className={styles.item_price}>${item.total}</div>
                        </div>
                        <div>&nbsp;</div>
                    </div>
                </div>
                 ))}
               
            </div>
            <div className={styles.right_container}>
                <div className={styles.right_container_wrapper}>
                <div className={styles.header}>SUMMARY</div>
                <div className={styles.subtotal}>
                    <div className={styles.c_subtotal_1}>Subtotal</div>
                    <div className={styles.c_subtotal_2}>{subTotal}</div>
                </div>
                <div className={styles.subtotal}>
                    <div className={styles.c_subtotal_1}>Estimated Delivery & Handling</div>
                    <div className={styles.c_subtotal_2}>${flatRate}</div>
                </div>
                <div>&nbsp;</div>
                <div className={styles.total}>
                    <div className={styles.c_subtotal_1}>Total</div>
                    <div className={styles.c_subtotal_2}>${grandTotal}</div>
                </div>
                <div>&nbsp;</div>
                <div>
                    <button className={styles.checkout_button1}>CHECKOUT</button>
                    <div>&nbsp;</div>
                    <button className={styles.checkout_button}>CONTINUE SHOPPING</button>
                </div>
                
                </div>
            </div>
        </div>
       
    )
}
export default ViewBag;
import React, { useState, useRef, useEffect } from 'react';
import { Trash } from '../../svg/trash';
import {
    Wrapper, Cart, CouponWrapper, Coupon, Title, InputCoupon, ApplyCoupon, UpdateCart, Container,
    UpdateButton, CartTotalsWrapper, CartTotalsTitle, CartTotals, Shipping
} from './cart.styled';
import { Table, TableHeader, ItemsHeader, DescriptionHeader, PriceHeader, QuantityHeader, SubtotalHeader, RemoveHeader } from './table.styled';
import * as styles from './cart.module.css'
import * as styles1 from './input_number.module.css'
import { ContentWrapper, InputText, AddressButton, Label, Content, CountryUl, CountryLi, CountryWrapper, CountryInput, SelectWrapper, AddressWrapper, Span, Span1 } from "./input.styled"
import { StyledCheckbox, AddressContainer } from './address.styled';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { selectAllItems, getAmountInCart } from '../../store/cart/cartReducer'
const CartPage = () => {

    const [data, setData] = useState([]);
    const [subTotal, setSubTotal] = useState(0)
    const [grandTotal,setGrandTotal] = useState(0)
    const [streetValue, setStreetValue] = useState("");
    const [townValue, setTownValue] = useState("");
    const [stateValue, setStateValue] = useState("");
    const [countryValue, setCountryValue] = useState("");
    const [fullAddress,setFullAddress] = useState("");
    const [showAddress,setShowAddress] = useState(true)
    const [flatRate,setFlatRate] = useState(12)
    
    const [val, setVal] = useState(0)
    const [open, setOpen] = useState(false)
    const [load, setLoad] = useState(false)
    const [checked, setChecked] = useState(false)
    const amount = useAppSelector(state => getAmountInCart(state))
    const items = useAppSelector(state => selectAllItems(state))

    useEffect(() => {
        if (data.length === 0) {
            let g = 0;
            items.map(p => {
                g = g + p.price;
            })
            let format_g = (Math.round(g * 100) / 100).toFixed(2);
            setSubTotal(parseFloat(format_g))
            setData(items)
            setGrandTotal(parseFloat(format_g)+flatRate)
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
        setData(temp)

    }
    const decrease = (id) => {
        let temp = []
        data.map(p => {
            if (id === p.id && p.qty > 1) {
                let copyData = Object.assign({}, p)
                let qty = copyData['qty'] - 1
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
        setData(temp)
    }
    //const format = (val)=>{
    //    setVal(val)
    //}
    const handleChange = () => {
        setChecked(!checked);
    };
    const onAddressClick = () =>{
        setFullAddress(streetValue + " " + townValue + " " + stateValue + " " + countryValue);
        setChecked(!checked);
        setShowAddress(false)
    }
    return (
        <Wrapper>
            <Cart>
                <div className={styles.table}>
                    <div className={styles.table_row_header}>
                        <div className={styles.table_cell + ' ' + styles.header1}>Items&nbsp;(1)</div>
                        <div className={styles.table_cell + ' ' + styles.header2}>&nbsp;</div>
                        <div className={styles.table_cell + ' ' + styles.header3}>Price</div>
                        <div className={styles.table_cell + ' ' + styles.header4}>Quantiy</div>
                        <div className={styles.table_cell + ' ' + styles.header5}>Total</div>
                        <div className={styles.table_cell + ' ' + styles.header6}>Remove</div>
                    </div>
                    {data.map(p => (

                        <div className={styles.table_row}>
                            <div className={styles.table_cell + ' ' + styles.cell1}>
                                <img width="150px" height="150px" src="./assets/images/img1.jpg" sizes="(max-width:150px) 100vw,150px" />
                            </div>
                            <div className={styles.table_cell + ' ' + styles.cell2}>{p.title}<br />{p.description}</div>
                            <div className={styles.table_cell + ' ' + styles.cell3}>${p.price}</div>
                            <div className={styles.table_cell + ' ' + styles.cell4}>
                                <div className={styles1.quantity_field} >
                                    <button onClick={() => decrease(p.id)}
                                        className={styles1.value_button + ' ' + styles1.decrease_button}
                                        title="decreae">-</button>
                                    <div className={styles1.number}>{p.qty}</div>
                                    <button onClick={() => increase(p.id)}
                                        className={styles1.value_button + ' ' + styles1.increase_button}
                                        title="increase">+</button>
                                </div>

                            </div>
                            <div className={styles.table_cell + ' ' + styles.cell3}>${p.total}</div>
                            <div className={styles.table_cell + ' ' + styles.cell3}><Trash /></div>
                        </div>
                    ))}
                    <div className={styles.table_row_bottom}>
                        <div className={styles.table_cell + ' ' + styles.bottom1}>&nbsp;</div>
                        <div className={styles.table_cell + ' ' + styles.bottom1}>&nbsp;</div>
                        <div className={styles.table_cell + ' ' + styles.bottom1}>&nbsp;</div>
                        <div className={styles.table_cell + ' ' + styles.bottom1}>&nbsp;</div>
                        <div className={styles.table_cell + ' ' + styles.bottom1}>&nbsp;</div>
                        <div className={styles.table_cell + ' ' + styles.bottom1}>&nbsp;</div>
                    </div>
                </div>
            </Cart>
            <CouponWrapper>
                <Coupon>
                    <Title>COUPON:</Title>
                    <InputCoupon type="text" placeholder="Coupon code" />
                    <ApplyCoupon type="submit" value="APPLY COUPON" />
                </Coupon>
                <UpdateCart>
                    <Container>
                        <UpdateButton>UPDATE CART</UpdateButton>
                    </Container>
                </UpdateCart>
            </CouponWrapper>
            <CartTotalsWrapper>
                <CartTotalsTitle>Cart Totals</CartTotalsTitle>
                <CartTotals>
                    <div className={styles.cart_totals_table}>
                        <div className={styles.cart_totols_table_row}>
                            <div className={styles.table_cell + ' ' + styles.name}>Sub Total</div>
                            <div className={styles.table_cell + ' ' + styles.value}>$ {subTotal}</div>
                        </div>
                        <div className={styles.cart_totols_table_row}>
                            <div className={styles.table_cell + ' ' + styles.name}>Shipping</div>
                            <div className={styles.table_cell + ' ' + styles.value}>
                                <div className={styles.shipping_section}>
                                    <div className={styles.shipping_rate}><input readOnly type="checkbox" id='shipping' checked={true}/>&nbsp;FLAT RATE:&nbsp;<b>$&nbsp;{flatRate}</b></div>
                                    <div className={styles.shipping}>Shipping to: <span className={styles.fullAddress}>{fullAddress}</span></div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.cart_totols_table_row}>
                            <div className={styles.table_cell + ' ' + styles.name}>&nbsp;</div>
                            <div className={styles.table_cell + ' ' + styles.value1}>

                                <label htmlFor="state">
                                    <div className={styles.address_button}>{showAddress?'Add address':'Update address'}</div>
                                </label>
                                <StyledCheckbox id="state" hidden checked={checked} onChange={handleChange} />
                                <AddressContainer>
                                    <Span>
                                    <input onChange={(e) => setStreetValue(e.target.value)} className={styles.input} type="text" id="addr" value={streetValue} placeholder='No. Street'/>
                                    </Span>
                                    <Span>
                                        <input onChange={(e) => setTownValue(e.target.value)} className={styles.input} type="text" id="town" value={townValue} placeholder="Town/City" />
                                    </Span>
                                    <Span>
                                        <input onChange={(e) => setStateValue(e.target.value)} className={styles.input} type="text" id="state" value={stateValue} placeholder="State" />
                                    </Span>
                                    <Span  >
                                        <input onChange={(e) => setCountryValue(e.target.value)} className={styles.input}  type="text" id="country" value={countryValue} placeholder="Country" />
                                    </Span>
                                    <Span>
                                       <input type='button' value={showAddress?'Add':'Update'} className={styles.button} onClick={onAddressClick}/>
                                    </Span>
                                </AddressContainer>
                            </div>
                        </div>
                        <div className={styles.cart_totols_table_row}>
                            <div className={styles.table_cell + ' ' + styles.name}>Grand Total</div>
                            <div className={styles.table_cell + ' ' + styles.value2}>$ {grandTotal}</div>
                        </div>
                    </div>
                </CartTotals>
                <div> <input type='button' value='PROCESS TO CHECKOUT' className={styles.button}/></div>
            </CartTotalsWrapper>
        </Wrapper>
    )
}

export default CartPage;
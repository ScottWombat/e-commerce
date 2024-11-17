import React,{useState,useRef} from 'react';
import { Trash } from '../../svg/trash';
import {
    Wrapper, Cart, CouponWrapper, Coupon, Title, InputCoupon, ApplyCoupon, UpdateCart, Container,
    UpdateButton, CartTotalsWrapper, CartTotalsTitle, CartTotals, Shipping
} from './cart.styled';
import { Table, TableHeader, ItemsHeader, DescriptionHeader, PriceHeader, QuantityHeader, SubtotalHeader, RemoveHeader } from './table.styled';
import * as styles from './cart.module.css'
import {ContentWrapper, InputText, AddressButton, Label, Content, CountryUl,CountryLi, CountryWrapper, CountryInput, SelectWrapper, AddressWrapper, Span,Span1 } from "./input.styled"
import { StyledCheckbox,AddressContainer } from './address.styled';
import { useAppDispatch,useAppSelector } from '../../store/hooks';

import {selectAllItems, getAmountInCart } from '../../store/cart/cartReducer'   
const CartPage = () =>{
    const [inputValue, setInputValue] = useState("");
    const [val, setVal] = useState(1)
    const [open, setOpen] = useState(false)
    const [load, setLoad] = useState(false)
    const inputRef = useRef();
    
    const [checked, setChecked] = useState(false)
    const amount = useAppSelector(state => getAmountInCart(state))
    const items = useAppSelector(state => selectAllItems (state))
    console.log("ITems");
    console.log(items)
    return(
        <Wrapper>
            <Cart>
                <div className={styles.table}>
                    <div className={styles.table_row_header}>
                        <div className={styles.table_cell + ' ' + styles.header1}>Items&nbsp;(1)</div>
                        <div className={styles.table_cell + ' ' + styles.header2}>&nbsp;</div>
                        <div className={styles.table_cell + ' ' + styles.header3}>Price</div>
                        <div className={styles.table_cell + ' ' + styles.header4}>Quantiy</div>
                        <div className={styles.table_cell + ' ' + styles.header5}>Subtotal</div>
                        <div className={styles.table_cell + ' ' + styles.header6}>Remove</div>
                    </div>
                    {items.map(p => (
                    <div className={styles.table_row}>
                        <div className={styles.table_cell + ' ' + styles.cell1}>
                            <img width="150px" height="150px" src="./assets/images/img1.jpg" sizes="(max-width:150px) 100vw,150px" />
                        </div>
                        <div className={styles.table_cell + ' ' + styles.cell2}>{p.title}<br/>{p.description}</div>
                        <div className={styles.table_cell + ' ' + styles.cell3}>${p.price}</div>
                        <div className={styles.table_cell + ' ' + styles.cell4}>${p.qty}</div>
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
                            <div className={styles.table_cell + ' ' + styles.name}>Subtotal</div>
                            <div className={styles.table_cell + ' ' + styles.value}>$123.30</div>
                        </div>
                        <div className={styles.cart_totols_table_row}>
                            <div className={styles.table_cell + ' ' + styles.name}>Shipping</div>
                            <div className={styles.table_cell + ' ' + styles.value}>
                                <div className={styles.shipping_section}>
                                    <div className={styles.shipping_rate}><input type="checkbox" id='shipping' />&nbsp;FLAT RATE:&nbsp;<b>$&nbsp;12</b></div>
                                    <div className={styles.shipping}>Shipping to: </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.cart_totols_table_row}>
                            <div className={styles.table_cell + ' ' + styles.name}>&nbsp;</div>
                            <div className={styles.table_cell + ' ' + styles.value1}>
                               
                                <label htmlFor="state">
                                    <div className={styles.address_button}>Add address</div>
                                </label>
                                <StyledCheckbox id="state" hidden checked={checked} />
                                <AddressContainer>
                                        <Span className={styles.country} >
                                        <input className={styles.input} autoComplete="new-password" value={inputValue} type="text" id="addr" placeholder="Country" />
                                        </Span>
                                        <Span1 open={open}>
                                        CountryList
                                      
                                        </Span1>
                                        <Span>
                                        <input className={styles.input} autoComplete="off" value={inputValue} type="text" id="state" placeholder="State" />
                                        </Span>
                                        <Span >
                                        <input className={styles.input} autoComplete="off" value={inputValue} type="text" id="suburb" placeholder="Town/City" />
                                        </Span>
                                        <Span  >
                                        <input className={styles.input} autoComplete="off" value={inputValue} type="text" id="address1" placeholder="Address" />
                                        </Span>
                                        <Span className={styles.state}>
                                            <input type="button" value="Close" />
                                        </Span>
                                </AddressContainer>
                            </div>
                        </div>
                        
                    </div>
                </CartTotals>
            </CartTotalsWrapper>
        </Wrapper>
    )
}

export default CartPage;
import React, { useState, useEffect,useRef } from "react";
import {
    Wrapper, Cart, CouponWrapper, Coupon, Title, InputCoupon, ApplyCoupon, UpdateCart, Container,
    UpdateButton, CartTotalsWrapper, CartTotalsTitle, CartTotals, Shipping
} from './cart.styled';
import { Table, TableHeader, ItemsHeader, DescriptionHeader, PriceHeader, QuantityHeader, SubtotalHeader, RemoveHeader } from './table.styled';
import styles from './cart.module.css'
import { Trash } from 'src/component/svg/trash';
import { TruckSVG } from "src/component/svg/truck";
import {ContentWrapper, InputText, AddressButton, Label, Content, CountryUl,CountryLi, CountryWrapper, CountryInput, SelectWrapper, AddressWrapper, Span,Span1 } from "./input.styled";

import { StyledCheckbox,AddressContainer } from './address.styled';
import { RetrieveWorldCities } from "src/utils/export-to-csv";
import IPAddressService from "src/utils/requests/ip";
const CartPage = (props: any) => {
    const apiClient = new IPAddressService();
    const inputRef = useRef();
    const [inputValue,setInputValue] = useState('');
    const [checked, setChecked] = useState(false)
    const [val, setVal] = useState(1)
    const [open, setOpen] = useState(false)
    const [load, setLoad] = useState(false)
    const [countryList, setCountryList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [countryName, setCountryName] = useState("");
    const getCountries = async () => {
        let countryList: string[] = [];
        fetch(`http://localhost:5000/api/countries/all_countries`)
            .then(response => response.json())
            .then(json => {
                let dataList = json[0]['data']
                dataList.forEach((c: any) => {

                    countryList.push(c)
                })
            });
        setCountryList(countryList)
    };

    useEffect(() =>{
        console.log("ipaddress")
        apiClient.getIPAddress().then(ipaddr => setCountryName(ipaddr.country))
    },[setCountryName])

    let search = '';

    useEffect (() =>{
        RetrieveWorldCities()
    })

    useEffect(() => {
        console.info("One")
        if (!load) {
            getCountries();
            setLoad(true)
        }

        let cancel = false;

    }, [load])

    const onChange = (e: any) => {
        setVal(Number(e.target.value));
    }
    const onClick = (e: any) => {
        setOpen(!open)
    }

    const onClick1 = (e:any) =>{
        setOpen(!open)
        //if(e.target.value.length===0){
            setFilteredList(countryList);
        //}

    }
    const justClick = (e:any)=>{
        setChecked(!checked)
    }
    const ulOnClick = (e:any) =>{
        setInputValue(e.target.id);
        setOpen(!open);
        setFilteredList([])
    }
    const searchedInput = (words:any) => {
        setInputValue(words);
        var n = words.split(" ");
        if (n.length !== 0) {
          if (n[n.length - 1] === "") {
            n.pop();
          }
          return n[n.length - 1];
        } else return "";
      };

    const handleList = (text:any) => {
        let inputText = text.toLowerCase();
        return countryList.filter((item) => item.toLowerCase().includes(inputText));
    };
    const handleChange=(e:any)=>{
        let text = searchedInput(e.target.value);;
        if (text === undefined || text === "") {
            return;
          } else {
            let filteredData = handleList(text);
            return setFilteredList(filteredData);
          }
    }
    const onBlur=(e:any)=>{
        setOpen(!open);
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
                        <div className={styles.table_cell + ' ' + styles.header5}>Subtotal</div>
                        <div className={styles.table_cell + ' ' + styles.header6}>Remove</div>
                    </div>
                    <div className={styles.table_row}>
                        <div className={styles.table_cell + ' ' + styles.cell1}>
                            <img width="150px" height="150px" src="./asset/images/img1.jpg" sizes="(max-width:150px) 100vw,150px" />
                        </div>
                        <div className={styles.table_cell + ' ' + styles.cell2}>Pro Prostate Massager</div>
                        <div className={styles.table_cell + ' ' + styles.cell3}>$123.30</div>
                        <div className={styles.table_cell + ' ' + styles.cell4}>1</div>
                        <div className={styles.table_cell + ' ' + styles.cell3}>$123.30</div>
                        <div className={styles.table_cell + ' ' + styles.cell3}><Trash /></div>
                    </div>
                    <div className={styles.table_row}>
                        <div className={styles.table_cell + ' ' + styles.cell1}>
                            <img width="150px" height="150px" src="./asset/images/img1.jpg" sizes="(max-width:150px) 100vw,150px" />
                        </div>
                        <div className={styles.table_cell + ' ' + styles.cell2}>Pro Prostate Massager</div>
                        <div className={styles.table_cell + ' ' + styles.cell3}>$123.30</div>
                        <div className={styles.table_cell + ' ' + styles.cell4}>
                            <input id="123" type="number" value={val} className={styles.input_number} onChange={e => onChange(e)} />

                        </div>
                        <div className={styles.table_cell + ' ' + styles.cell3}>$123.30</div>
                        <div className={styles.table_cell + ' ' + styles.cell3}><Trash /></div>
                    </div>
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
                                    <div className={styles.shipping}>Shipping to: {countryName}</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.cart_totols_table_row}>
                            <div className={styles.table_cell + ' ' + styles.name}>&nbsp;</div>
                            <div className={styles.table_cell + ' ' + styles.value1}>
                               
                                <label htmlFor="state">
                                    <div className={styles.address_button}>Add address</div>
                                </label>
                                <StyledCheckbox id="state" hidden checked={checked} onClick={justClick}/>
                                <AddressContainer>
                                        <Span className={styles.country} >
                                        <input className={styles.input} value='d'/>
                                        </Span>
                                        <Span1 open={open}>
                                       
                                        <CountryUl open={open} onClick={ulOnClick}>
                                               {filteredList.map((x)=>(
                                                 <CountryLi id={x}>{x}:</CountryLi>
                                               ))}
                                        </CountryUl>
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
                                            <input type="button" value="Close" onClick={justClick}/>
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


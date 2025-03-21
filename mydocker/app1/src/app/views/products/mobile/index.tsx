import React, { useState, useEffect } from 'react';
import * as styles from './index.module.css';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
////import { ListSVG } from 'app/svg/list';
//import { ThumbnailsSVG } from 'app/svg/thumbnails';
import { ListSVG, ThumbnailsSVG, FilterSVG } from 'app/svg';
import ProductService from 'app/services/product.service';
import Products from '../products';
import { X } from 'app/svg/x';
interface SlideRightPanel {
    isVisible: boolean
}
const Container = styled.div`
    width:100%;
    height:100%;
`;

const Wrapper = styled.div`
    width:100%;
    Height:100%;
    display:flex;
    flex-direction: row;
    column-gap: 1px;
    flex-wrap: wrap;
    align-items: center;
    justtify-content:center;
    
  
`;
const Box = styled.div`
    width: 100px;
    height:170px;
    margin: 10px 5px 10px 17px;
    text-align: center;
`;

const Header = styled.div`
    text-align:center;
`;
const Item = styled.div`
    width:100px;
    height:100px;
    background-image:'./assets/images/img1.jpg'
`;
const ListItem = styled.div`
    width:30%
    background-color:red;
`;

const Span = styled.div`
    margin-top:10px;
    display:flex;
    width:100%;
    margin:0;
`;
const LeftMenu = styled.div`
    text-align:left;
    width:20%;
    margin-left:12px;
    display:inline-flex;
`;
const FloatLeft = styled.div`
    text-align:left;
    width:30px;
`;
const RightMenu = styled.span`
    text-align:right;
    width:80%;
    margin-right:0;
   
`;
const Description = styled.div`
    width:100px;
    text-align:left;
`;
const Price = styled.div`
    width:30px;
    text-align:left;
    float:left;
`;
const AddToCart = styled.div`
    width:70px;
    float:right;
    text-align:right;
`;


const style = {
    width: '130px',
    height: '130px',
    padding: '10px'
}


const ListWrapper = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: 140px auto;
`;
const ListImage = styled.div`
    width:140px;
    height:140px;
`;
const ListDetails = styled.div`
    display: grid;
    height:50px;
    grid-template-rows: repeat(4, 1fr);
    margin-top:30px;
    font-size:1.5em;
`;
const SlideRightPanel = styled.div<SlideRightPanel>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0px;
  height: 100%;
  width: 100%;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: visibility ${props => props.isVisible ? '0s 0s' : '0s 0.6s'};
  z-index:20;
  
`;

const FilterWrapper = styled.div`
    height:100vh;
    width:100%;
    display: block;
    position: absolute;
    margin:auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0px;
    padding: 3px;
    width: 100%;
    background-color:#ffffff;
    margin-left: auto;
    margin-right: auto;
    ul {
        list-style: none;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
      }
      
      ul li {
        color: #000000;
        display: block;
        position: relative;
        float: left;
        width: 100%;
        height: 80px;
      }
      ul li input[type="radio"] {
        position: absolute;
        visibility: hidden;
      }
      
      ul li label {
        display: block;
        position: relative;
        font-weight: 400;
        font-size: 1em;
        padding: 25px 25px 25px 80px;
        margin: 10px auto;
        height: 30px;
        z-index: 9;
        cursor: pointer;
        -webkit-transition: all 0.25s linear;
      }
      
      ul li:hover label {
        color: #000000;
      }
      
      ul li .radiobutton {
        display: block;
        position: absolute;
        border: 4px solid #CCCCCC;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        top: 30px;
        left: 20px;
        transition: border 0.25s linear;
        -webkit-transition: border 0.25s linear;
      }
      
      ul li:hover .radiobutton {
        border: 4px solid #000000;
      }
      
      ul li .radiobutton::before {
        display: block;
        position: absolute;
        content: "";
        border-radius: 100%;
        height: 20px;
        width: 20px;
        top: 1px;
        left: 1px;
        margin: auto;
        transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear;
      }
      input[type="radio"]:checked ~ .radiobutton::before {
        background: #000000;
        margin: auto;
        transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear;
      }
      input[type="radio"]:checked ~ .radiobutton {
        border: 4px solid #000000;
      }
      
      input[type="radio"]:checked ~ label {
        color: #000000;
        font-weight: 700;
      }
`;
const FilterClose = styled.div`
    float:right;
    padding:50px;
`;
const FilterHeader = styled.div`
   color: #000000;
   margin-top:50px;
   margin-left:20px;
   font-size:2.5em;
   font-weight: 400;
   
`;
const FilterBy = styled.div`
    margin-top:20px;
    font-size:2.5em;
`;
const FilterButtonWrapper = styled.div`
    font-size:2.5em;
    margin-top:550px;
    width:100%;
    text-align:center;
    z-index:21;
`;

const FilterButton = styled.button`
    top:0;
	font-size: 0.7em;
	background: none;
	cursor: pointer;
	padding: 10px 40px;
	display: inline-block;
	margin: 15px 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 500;
	outline: none;
	position: relative;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
    border: 3px solid #cccccc;
	color: #000;
    &:hover{
        border: 3px solid #000;
        font-weight: 700;
    }
    
`;

const ThumbnailsView = ({ productList }) => {
    console.log(productList)

    return (
        <Wrapper>
            {productList.map(p => (
                <Box>
                    <Item><img style={style} src='/assets/images/img1.jpg' /></Item>
                    <Description>{p.title}</Description>
                    <Span>
                        <Price>${p.price}</Price>
                        <AddToCart>Add to Cart</AddToCart>
                    </Span>
                </Box>
            ))}
        </Wrapper>
    )
}
const ListView = ({ productList }) => {
    return (
        <ListWrapper>
            {productList.map(p => (
                <>
                    <ListImage><img style={style} src='/assets/images/img1.jpg' /></ListImage>
                    <ListDetails>
                        <div style={{ fontWeight: 'bold' }}>{p.title}</div>
                        <div>{p.description}</div>
                        <div>&nbsp;</div>
                        <span style={{ display: 'inline-flex' }}><div style={{ fontWeight: 'bold' }}>${p.price}</div><div style={{ marginLeft: '50px' }}>Add to cart</div></span>
                    </ListDetails>
                </>

            ))}
        </ListWrapper>
    )
}

const ProductList = (props) => {
    const { catalog, category } = useParams();
    const [isList, setIsList] = useState(false)
    const [slideRightVisible, setSlideRightVisible] = useState(false);
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);
    const apiClient = new ProductService();

    useEffect(() => {
        apiClient.getProducts(catalog, category).then(products => {

            setProducts(products['data'])
            setTotalProducts(products['totalProducts'])
        })
    }, [products])
    useEffect(() => {

    }, [slideRightVisible])
    const onViewClick = () => {
        setIsList(!isList);
    }
    const onFilterClick = () => {
        //alert('d')
        setSlideRightVisible(!slideRightVisible);
        console.log(slideRightVisible)
    }
    return (
        <>
            <SlideRightPanel isVisible={slideRightVisible}>
                <FilterWrapper>
                    <FilterClose>
                        <a onClick={onFilterClick}>
                            <X fille="#00000" widht="20px" height="20px" />
                        </a>
                    </FilterClose>
                    <FilterHeader>FILTER SORTY BY</FilterHeader>
                    <FilterBy>
                        <ul>
                            <li>
                                <input type="radio" id="title1" name="selector" />
                                <label htmlFor="title1">Title</label>
                                <div className={"radiobutton"}></div>
                            </li>
                            <li>
                                <input type="radio" id="keywords" name="selector" />
                                <label htmlFor="keywords">Key words</label>
                                <div className={"radiobutton"}></div>
                            </li>
                            <li>
                                <input type="radio" id="highlow" name="selector" />
                                <label htmlFor="highlow">Price: High-Low</label>
                                <div className="radiobutton"></div>
                            </li>
                            <li>
                                <input type="radio" id="lowhigh" name="selector" />
                                <label htmlFor="lowhigh">Price: Low-Hight</label>
                                <div className="radiobutton"></div>
                            </li>
                            <li>
                                <input type="radio" id="arrivals" name="selector" />
                                <label htmlFor="arrivals">New Arrivals</label>
                                <div className="radiobutton"></div>
                            </li>
                            <li>
                                <input type="radio" id="sales" name="selector" />
                                <label htmlFor="sales">Sales</label>
                                <div className="radiobutton"></div>
                            </li>
                        </ul>
                     
                    </FilterBy>
                    <FilterButtonWrapper><FilterButton>Apply</FilterButton></FilterButtonWrapper>
                </FilterWrapper>
            </SlideRightPanel>

            <Container>
                <Header>{catalog}/{category}</Header>
                <Span>
                    <LeftMenu>
                        <FloatLeft onClick={onViewClick}>
                            <ThumbnailsSVG />
                        </FloatLeft>
                        <FloatLeft onClick={onViewClick}>
                            <ListSVG />
                        </FloatLeft>
                    </LeftMenu>
                    <RightMenu>
                        <FilterSVG onClick={onFilterClick} />
                    </RightMenu>
                </Span>
                {isList ? <ListView productList={products} /> : <ThumbnailsView productList={products} />}

                <div>Load Mores</div>
            </Container>
        </>
    )
}

export default ProductList;
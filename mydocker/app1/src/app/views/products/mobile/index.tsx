import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
////import { ListSVG } from 'app/svg/list';
//import { ThumbnailsSVG } from 'app/svg/thumbnails';
import {ListSVG,ThumbnailsSVG,FilterSVG} from 'app/svg';
import ProductService from 'app/services/product.service';
import Products from '../products'
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
const Span= styled.div`
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

const ListView = ({productList}) =>{
    return (
       <>List view</>
    )
}
const style ={
    width: '100%',
    height:'100%'

}

const ThumbnailsView = ({productList})=>{
    console.log(productList)
    
    return (
        <Wrapper>
        {productList.map(p => (
        <Box>
            <Item><img style={style} src='/assets/images/img1.jpg'/></Item>
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
const ProductList = (props) =>{
    const { catalog, category } = useParams();
    const [isList,setIsList] = useState(false)
    const [products, setProducts] = useState([]);
    const [totalProducts,setTotalProducts]= useState(0);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);
    const apiClient = new ProductService();

    useEffect(()=>{
        apiClient.getProducts(catalog,category).then(products=>{
          
          setProducts(products['data'])
          setTotalProducts(products['totalProducts'])
        })
    },[products])

    return (
        <Container>
        <Header>{catalog}/{category}</Header>
        
        <Span>
            <LeftMenu>
                <FloatLeft>
                <ListSVG/>
                </FloatLeft>
                <FloatLeft>
                <ThumbnailsSVG/>
                </FloatLeft>
            </LeftMenu>
            <RightMenu><FilterSVG/></RightMenu>
        </Span>
        {isList ? <ListView productList={products}/> : <ThumbnailsView productList={products}/>}
        
        <div>Load Mores</div>
        </Container>
    )
}

export default ProductList;
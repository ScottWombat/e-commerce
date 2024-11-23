import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
padding: 2rem 0;
box-sizing: border-box;
`;

export const Cart = styled.div`
    width: 100%;
`;
export const CouponWrapper = styled.div`
    width: 90%;
    display:grid;
    grid-template-columns:50% 50%;
    
`;
export const Coupon = styled.div`
    display:flex;
    float:left;
    
`;
export const Title = styled.div`
    font-weight:bold;
`;

export const InputCoupon = styled.input`
padding: 20px 10px 20px 30px;  
  line-height: 35px;
  margin-left:10px;
  font-size:20px;
  width:250px;
  letter-spacing: 2px;
`;

export const ApplyCoupon = styled.input`
margin-left:20px;
padding: 20px 40px 20px 40px; 
border: none;
color:#fff;
background-color:black;
font-weight:bold;
font-size:14px;
letter-spacing: 2px;
`;

export const UpdateCart = styled.div`
    width:100%;
    display:flex;
`;
export const Container = styled.div`
    width:35%;
    margin-left: auto;
    color:#fff;
    background-color:#000;
`;
export const UpdateButton = styled.div`
    position:relative;
    color:#fff;
    text-align:center;
    top: 50%;
    padding: 20px 40px 20px 40px; 
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-weight:bold;
    font-size:14px;
    letter-spacing: 2px;
`;

export const CartTotalsWrapper = styled.div`
    width:90%;
    margin-top:25px;
`;

export const CartTotalsTitle = styled.div`
    width:100%;
    margin:0;
    font-size:28px;
    font-weight:bold;
`;
export const CartTotals = styled.div`
width:100%;
margin:0;
`;


export const Shipping = styled.div`
   
    float:left;
`;


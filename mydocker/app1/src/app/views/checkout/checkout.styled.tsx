import styled from "styled-components";
import { keyframes } from 'styled-components'
interface DivProps {
    show?: string;
    height?: string;
    color?:string;
}

export const Container = styled.div`
  display:flex;
  width:100%;
  height: 100vh;
  font-family: 'Montserrat';
  background-color:#fff;
  justify-content:center;
`;
export const Wrapper = styled.div`

`;

export const Center = styled.div`
  width:90%;
  height:100vh;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Company = styled.div`
    float:left;
    padding-top:20px;
`;
export const Bag = styled.div`
    padding-top:20px;
    float: :right;
`;

export const Title = styled.div`
    text-align:center;
    font-size:20px;
    font-weight:bold;
`;

export const Description = styled.div`
    text-align:center;
    padding-top:10px;
`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    paddint-top:10px;
    width:100%;
    height:100vh;
`;
export const ContentLeft = styled.div`
    float:left;
    width:60%;
    height:100vh;
    
`;
export const ContentRight = styled.div`
    float: :right;
    width:40%;
    border:1px solid #000;
`;

export const Contact = styled.div`
    font-weight:bold;
    padding-top:0px;
    border-bottom:1px solid #ccc;
    width:100$;
    height:150px;
    margin-top:20px;
`;

export const Address = styled.div<DivProps>`
    margin-top:40px;
    font-weight:bold;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
    border-bottom:1px solid #ccc;
`;

export const DeliveryAddress = styled.div<DivProps>`
    margin-top:20px;
    font-weight:bold;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
  
`;

export const Delivery = styled.div<DivProps>`
    margin-top:40px;
    font-weight:bold;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height:${p => p.height};
    overflow: hidden;
    border-bottom:1px solid #ccc;
`;

export const DeliverySection = styled.div<DivProps>`
    width:100%;
    margin-top:20px;
    font-weight:bold;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
    
`;
export const DeliveryDetails = styled.div<DivProps>`
    border:1px solid ${p => p.color};  
`;

export const Payment = styled.div<DivProps>`
    margin-top:40px;
    font-weight:bold;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height:${p => p.height};
    overflow: hidden;
    border-bottom:1px solid #ccc;
    
`;
export const PaymentIcons = styled.div<DivProps>`
    display:${p=>p.show};
    margin-top:40px;
    font-weight:bold;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height:${p => p.height};
    overflow: hidden;

`;
export const PaymentSection = styled.div<DivProps>`

`;
export const PaymentDetails = styled.div<DivProps>`

`;
export const PaymentDetailsHeader = styled.div<DivProps>`
    margin-top:20px;
    border:1px solid #ccc;
    font-weight:none;
    padding:15px;
    font-size:12px;
    display:flex;
`;

export const Credit = styled.div<DivProps>`
margin-top:0px;
background-color:#fff;
font-weight:bold;
transition: height 1s ease;
-webkit-transition: height 1s ease;
height: ${p => p.height};
overflow: hidden;
`;

export const PayPal = styled.div<DivProps>`
height: ${p => p.height};
`;
export const AfterPay = styled.div<DivProps>`
height: ${p => p.height};
`;

export const Button = styled.div<DivProps>`
    margin-top:20px;
    font-weight:bold;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
`;

export const CreditCardSection = styled.div<DivProps>`
    margin-top:20px;
    font-weight:bold;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
    border: 1px solid red;
`;








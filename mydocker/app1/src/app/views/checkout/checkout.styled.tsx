import styled from "styled-components";
import { keyframes } from 'styled-components'
interface DivProps {
    show?: string;
    height?: string;
    color?:string;
    isOpen?:boolean;
    margin_top?:string;
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
    padding-right:10px;
    
`;
export const ContentRight = styled.div`
    float: :right;
    width:40%;
    
`;

export const Contact = styled.div`
    font-weight:bold;
    padding-top:0px;
    border-bottom:1px solid #ccc;
    width:100$;
    height:140px;
    margin-top:30px;
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
    margin-top:30px;
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
    height:${p => p.height};
    
`;
export const PaymentDetails = styled.div<DivProps>`

`;
export const PaymentDetailsHeader = styled.div<DivProps>`
    margin-top:0px;
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
    border: 1px solid #ccc;
    border-bottom: ${p =>p.isOpen?'2px solid #000':'1px solid #ccc'};
`;
export const PaypalSection = styled.div<DivProps>`
    margin-top:20px;
    font-weight:bold;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
    border: 1px solid #ccc;
    border-bottom: ${p =>p.isOpen?'2px solid #000':'1px solid #ccc'};
`;
export const AfterPaySection = styled.div<DivProps>`
    margin-top:20px;
    font-weight:bold;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
    border: 1px solid #ccc;
    border-bottom: ${p =>p.isOpen?'2px solid #000':'1px solid #ccc'};
`;


export const PaypalContent = styled.div<DivProps>`

`;

export const PromoCodeWrapper = styled.div<DivProps>`
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
    
`;

export const PromoCodeMessage = styled.div<DivProps>`
    margin-top:20px;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
    border-style: dotted;
    border-color: #ccc;
    padding:5px;
    color:#ff2626;
    display:  ${p => p.height=='0px'?'none':'block'}
`;
export const ProductList = styled.div`
   margin-top:15px;
   margin-bottom:10px;
   display:block;
   width: 100%;
   border-top: 1px solid #ccc; 
`;

export const ProductRow = styled.div`
   margin-top:15px;
   display:grid;
   grid-template-columns: 100px 1fr;
`;

export const ProductDetails =  styled.div`
    display:inline-block;
    
`;
export const ErrorMessage = styled.div<DivProps>`
    margin-top:${p => p.margin_top};
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
    padding:5px;
    color:#ff2626;
    font-size:0.8em;
    font-weight:none;
    display:  ${p => p.height=='0px'?'none':'block'}
`;

export const InputMessage = styled.div<DivProps>`
    margin-top:${p => p.margin_top};
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
    padding:5px;
    color:#ccc;
    font-size:0.8em;
    font-weight:none;
    display:  ${p => p.height=='0px'?'none':'block'}
`;


export const CreditCardContentWrapper= styled.div<DivProps>`
    display:relative;
    padding:5px;
    border-bottom:0px solid red;
    width:100%;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};

`;












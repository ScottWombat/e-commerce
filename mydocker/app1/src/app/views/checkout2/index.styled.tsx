import InputMask from "app/components/credit_card/input_cvc_mask";
import styled from "styled-components";
interface DivProps {
     fontWeight?: string,
     background?: string
}

export const Container = styled.div`
  
  width:100%;
  font-family: 'Montserrat';
  
`;
export const TopMenu = styled.div`
   width:90%;
   margin:auto;
   display:flex;
   flex-direction:row;
  
`;
export const LogoSection = styled.div`
     width:50%;
     margin-top:15px;
`;

export const UserMenu = styled.div`
     width:50%;
     margin-top:15px;
     display:flex;
     justify-content:right;
`;

export const BillingSection = styled.div`
     width:50%;
     @media (max-width: 524px) {
          width:100%;
     }
`;
export const OrderSection = styled.div`
     width:49%;
     margin-left:5px;
     @media (max-width: 524px) {
          width:100%;
          margin-left:0;
     }
`;
export const OrderHeader = styled.div`
width:100%;
   text-align:left;
   border-bottom:1px solid #ccc;
   margin-right:1px;
   font-weight:bold;
   @media (max-width: 524px) {
          
    width:100%;
}
`;
export const OrderRow = styled.div`
     width:100%;
     display:flex;
     flex-direction:row;
     
`;

export const ItemHeader = styled.div<DivProps>`
     width:50%;
     font-weight: ${p => p.fontWeight ? 'bold' : 'normal'};
     background:${p => p.background ? '#ccc' : '#fff'};
     margin:auto;
`;
export const TermAndConditon = styled.div<DivProps>`
     width:100%;
     font-weight: ${p => p.fontWeight ? 'bold' : 'normal'};
     background:${p => p.background ? '#ccc' : '#fff'};
`;
export const ItemPrice = styled.div<DivProps>`
     width:50%;
     display:flex;
     justify-content:right;
     font-weight: ${p => p.fontWeight ? 'bold' : 'normal'};
     margin-left:5px;
     background:${p => p.background ? '#ccc' : '#fff'};
     height:50px;
`;
export const ItemPrice1 = styled.div<DivProps>`
     width:50%;
     display:flex;
     justify-content:right;
     font-weight: ${p => p.fontWeight ? 'bold' : 'normal'};
     margin-left:5px;
     background:${p => p.background ? '#ccc' : '#fff'};
     
`;

export const Title = styled.div`
     width:90%;
     text-align:center;
     font-weight:bold;
     font-size:18px;
     margin-left:auto;
     margin-right:auto;
     font-family: 'Montserrat';
     letter-spacing: 2px;
`;
export const Description = styled.div`
     width:90%;
     text-align:center;
     font-weight:bold;
     font-size:14px;
     letter-spacing: 2px;
     margin-left:auto;
     margin-right:auto;
     font-family: 'Montserrat';
`;
export const ButtonGroup = styled.div`
   width:90%;
   margin-top:15px;
   margin-left:auto;
   margin-right:auto;
   display:flex;
   flex-direction: row;
   font-family: 'Montserrat';
   font-weight:bold;
`;

export const ApplePayButton = styled.div`
     width:50%;
     background:#000;
     color:#fff;
     text-align:center;
     padding: 10px 10px 10px 10px; 
     border-right:2px solid #fff;
     
`;
export const GooglePayButton = styled.div`
     width:50%;
     text-align:center;
     background:#000;
     color:#fff;
     padding: 10px 10px 10px 10px; 
     border-left:2px solid #fff;
     
`;
export const Content = styled.div`
   width:90%;
   margin:auto;
   display:flex;
   flex-direction:column;
   
`;

export const Billing = styled.div`
     width:50%;
     margin-top:15px;
    
     border-bottom:1px solid #ccc;
`;

export const Order = styled.div`
    width:50%;
    flex-grow: 1;   
    margin-top:15px;
    margin-left:15px;
    border-bottom:1px solid #ccc;
`;
export const Header1 = styled.div`
width:100%;
   text-align:left;
   border-bottom:1px solid #ccc;
   margin-right:1px;
   font-weight:bold;
   @media (max-width: 524px) {
          
    width:100%;
}
`;
export const Header2 = styled.div`
   width:100%;
   text-align:left;
   border-bottom:1px solid #ccc;
   margin-left:1px;
   font-weight:bold;
`;
export const Row = styled.div`
      width:100%;
      display:flex;
      flex-direction: row;
     font-family: 'Montserrat';
     
     @media (max-width: 524px) {
          flex-direction:column;
     }
     
`;
export const Column = styled.div`
     width:50%;
`;

export const Column1 = styled.div`
     width:100%;
     display:flex;
     flex-direction:column;
    
     @media (max-width: 524px) {
          
          flex-direction:row;
     }
`;
export const Column2 = styled.div`
     width:100%;
     display:flex;
     flex-direction:row;
     
     @media (max-width: 524px) {
          
          flex-direction:column;
     }
`;
export const Column3 = styled.div`
     width:90%;
     display:flex;
     flex-direction:row;
     background:yellow;
     @media (max-width: 524px) {
          width:100%;
      }
`;

export const Field = styled.div`
width:100%;
display:flex;
flex-direction: column;
font-family: 'Montserrat';

@media (max-width: 524px) {
    flex-direction: row;
}
`;
export const Details = styled.div`

`;

export const TextInput = styled.input.attrs(props => ({
     type: props.type || 'text',
     placeholder: props.placeholder || ''
}))`
  padding: 5px 5px 5px 5px;  
  text-transform: uppercase;
  font-size:14px;
  width: ${props => props.width};
  letter-spacing: 2px;
  data-mask:000;
  max-lenght:3;
  @media (max-width: 524px) {
    width: 100%;
    margin-left:0;
    margin-top:10px;
}
`;

export const TextArea = styled.textarea`
     width:560px;
     @media (max-width: 524px) {
          width: 100%;
         
      }
`;
export const ShippingHeader = styled.div`
      width:150px;
      font-weight:bold;
`;
export const ButtonRow = styled.div`
      display:flex;
      flex-direction: row;
`;
export const Space = styled.div`
     height:5px;
`;


export const LabelWrapper = styled.div`
     display:inline-block;
`;
export const LabelName = styled.div`
      float:left;
`;
export const Asterick = styled.div`
      color:red;
      float:left;
      margin-left:5px;
      &:after {
          content: "*";
     }
`;

export const ErrorMessage = styled.div`
     color: #FF6347;
     font-size:10px;
`;
export const PlaceOrdeButton = styled.div`
    width:100%;
    font-size:14px;
    font-weight:bold;
    text-align:center;
    background-color:#000;
    padding: 12px 10px 12px 10px; 
    letter-spacing: 2px;
    color:#fff;
`;
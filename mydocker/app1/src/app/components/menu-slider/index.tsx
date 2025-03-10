import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { HamburgerSVG } from 'app/svg';
import { X } from 'app/svg/x';
import { Accordian } from 'app/layout/mobilemain/accordian';
interface MenuStatus{
    on: boolean
}
const Container = styled.div`
    margin-top: 0px;
`;
const Wrapper = styled.div`
    margin-top: 0px;
`;
const Menu = styled.div<MenuStatus>`
    background: #dbe2e9;
    color: #333;
    position: fixed;
    top: 0;
    left: ${ props => props.on ? '0px':'-250px'};
    width: 250px;
    height: 100%;
    webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    z-index:15;
`;
const Content = styled.div`
    width:100%;
    height:100vh;
    display:inline-block;
`;
const CloseButton = styled.div`
    text-align:center;
    margin-left:200px;
    margin-right:25px;
    margin-top:25px;
    width:30px;
    &:hover {
        cursor: pointer;
    }
`; 
const Title = styled.div`
    width:100%;
    text-align:center;
    font-size: 18px;
    text-decoration:underline;
    text-underline-offset: 8px;
    text-decoration-thickness: 2px;
    letter-spacing: 8px;
`;
export const MenuSlider = (props) =>{
    const navigate = useNavigate(); 
    const [open,setOpen] = useState(false)
    const [fill,setFill] = useState('#000000')
    const onClick = (e)=>{
        setTimeout(() => {
            //navigate('/products/Women/Vibrators');
            navigate('/product_list/Women/Vibrators');
        }, 1000);
        setOpen(!open);
    }
    const onMouseOver =()=>{
        setFill('#FF0000')
    }
    const onMouseOut =()=>{
        setFill('#000000')
    }
   
    useEffect(() =>{
       
    },[fill])
    return(
        <Container>
            <Wrapper onClick={()=> setOpen(!open)}><HamburgerSVG/></Wrapper>
            <Menu on={open}>
                <Content>
                    <CloseButton onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                    <X  fill={fill} width={'15px'} height={'15px'}/></CloseButton> 
                    <Title>&nbsp;MENU</Title>
                    <Accordian onClick={onClick}/> 
                </Content>
            </Menu>
        </Container>
    )
}
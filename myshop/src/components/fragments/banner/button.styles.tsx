import styled from 'styled-components';

const ShopNow = styled.button`
    height: 50px;
	width: 140px;
	position: relative;
	background-color: transparent;
	outline: none;
	border: none;
	color: #fff;
	font-size: 16px;
    font-weight: bold;
	font-family: 'Abel', sans-serif;
    &:before{
        position: absolute;
        content: '';
        height: 0;
        width: 0;
        border: 8px solid transparent;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
    }
    &:after{
        position: absolute;
        content: '';
        height: 0;
        height: 0;
        width: 0;
        border: 4px solid transparent;
        bottom: 0;
        right: 0;
        box-sizing: border-box;
    }
    
    &:hover:before{
        height: 50px;
        width: 140px;
        border: 4px solid white;
        border-right: none;
        border-bottom: none;
        transition: height 0.5s linear,width 0.5s linear 0.5s;
    }
    
    &:hover:after{
        height: 50px;
        width: 140px;
        border: 4px solid white;
        border-left: none;
        border-top: none;
        transition: height 0.5s linear,width 0.5s linear 0.5s;
    }
`;

export default ShopNow;
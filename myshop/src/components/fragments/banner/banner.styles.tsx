import styled, {css} from 'styled-components';
//import Img from './wallpaper.jpg';
//import LogoIcon from 'src/components/svg/logo';
export interface ImageProps{
    bgimage: string;
    bgcolor: string;
}
export const BannerDiv = styled.div<ImageProps>`
    width: auto;
    height: 300px;
    background-size: 100% 100%;
    background: ${ p => p.bgcolor};
    background-image: url(${p =>p.bgimage});  /*url("wallpapers/wallpaper.jpg");*/
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;

//export default BannerDiv;

export const Wrapper =  styled.div`
    height: 50%;
    width: 50%;
    color: #008000;
`;

export const Text = styled.div`
    width: 100%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    h1 {
        font: 6em;
        line-height: 1.05em;
        font-weight: 700;
        text-align: center;
        color: red;
    }

`;
export const Span = styled.span`
    position: relative;
    &:nth-child(1){
        color: #ed008c;
    };
    &:nth-child(2){
        color: #ed008c;
    };
`;



export default BannerDiv;




 



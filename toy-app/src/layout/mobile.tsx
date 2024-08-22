import { NavSection,LogoSection } from 'src/layout'
import { MainMenu } from "src/component/mainmenu";
import { UserMenu } from 'src/component/usermenu';
import { SearchBox } from 'src/component/search';
import { ThreeDotsMenu } from 'src/component/three_dots_menu';
export const Mobile = (props:any) =>{
    return(
        <NavSection margin={props.margin}> 
          <UserMenu onClick={props.onClose} svgWidth={props.svgWidth} svgHeight={props.svgHeight}/>
          <LogoSection>JACK&JILL11</LogoSection>
          <ThreeDotsMenu/>
        </NavSection>
    )
}
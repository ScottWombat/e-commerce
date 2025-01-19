import styles from './bag.module.css';

interface ShoppingBagProps {
    fill?: string;
    width?: string;
    height?: string;
    className?: string;
}

export const ShoppingBagIcon =({
    fill,
    width,
    height,
    className,
}:ShoppingBagProps) =>{
    return(
        <svg id="bag" x="0px" y="0px" height={height} width={width} viewBox="0 0 200.745 200.745">
      
        <g>
            <g fill="none" stroke="#000">
                <path stroke-width="2" fill="#000" d="M166.089,42.803h-37.671V28.026C128.418,12.573,115.849,0,100.396,0S72.37,12.573,72.37,28.026
            v14.777H36.839l-9.087,157.942h145.24L166.089,42.803z M78.679,28.026c0-11.971,9.745-21.716,21.716-21.716
            c11.975,0,21.713,9.745,21.713,21.716v14.777H78.679V28.026z M42.794,49.109H72.37v14.788h6.31V49.109h43.433v14.788h6.31V49.109
            h31.637l6.345,145.341H34.434L42.794,49.109z"/>
            </g>
        </g>
        <g>
          <text y="150" transform="translate(100)" font-size="100" text-anchor="middle">
            <tspan className="num_items">10</tspan>
          </text>  
        </g>
      </svg>
    )
}
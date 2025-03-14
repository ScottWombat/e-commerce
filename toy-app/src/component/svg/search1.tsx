interface SearchProps {
    fill?: string;
    width1?: string;
    height?: string;
    className?: string;
}

export const Search1Icon = (props:any) =>{
    return(
        
        <svg className="svg-icon" style={{width: props.width, height: props.height,verticalAlign: 'middle',fill: 'currentColor',overflow: 'hidden'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M897.2 882.3l-210-221.1c54.5-57.7 85.6-132.5 87.5-212.4 2.1-86-28.8-167.7-88.1-230.1-59.3-62.5-139.4-98.2-225.3-100.4h-8.5c-82.8 0-161.2 31-221.6 88.1-128.7 122.3-134.6 326.8-12.3 455.5 59.3 62.5 139.4 98.2 225.3 100.4h9.1c76.3 0 148.6-26.8 206.7-75.4l210.1 221.2 27.1-25.8zM453.3 719.5h-8.5c-74.3-2-143.5-32.9-194.9-87.1-106-111.5-101.1-288.7 10.7-395 52-49.3 120.3-76.4 192.2-76.4h8c74.3 2 143.5 32.9 194.9 87.1 51.1 53.9 78.2 124.8 76.4 199.7-1.9 74.5-32.8 143.9-86.9 195.2-52.7 49.3-120.8 76.5-191.9 0z" /></svg>

    );
}
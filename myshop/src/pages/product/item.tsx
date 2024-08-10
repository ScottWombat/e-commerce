import { useState, useEffect } from "react";
import styles from './item.module.css';
import styled from "styled-components";
import { selectAllItems, selectItemById,getAmountInCart,getTotalPrice } from "src/store/cart/cartReducer";
import { useSelector } from 'react-redux';
const photoArray = [
  { publicId: "shoe_1", alt: "Jason on a train platform in Tokyo" },
  {
    publicId: "shoe_2",
    alt: "Jason talking to someone at React India"
  },
  { publicId: "shoe_3", alt: "Jason holding two puppies" },
  {
    publicId: "shoe_4",
    alt: "Jason walking along an alley in Barcelona"
  }
];

const getImageUrl = (publicId: string) => {
  return `https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/${publicId}.jpg`;
}

const Image = (props) => {
  const imageSource = getImageUrl(props.publicId);

  return props.current ? <img src={imageSource} alt={props.alt} className={styles.img_inherit} /> : <img src={imageSource} alt={props.alt} />;
}
const Thumb = (props) => {
  const imageSource = getImageUrl(props.publicId);
  console.log(props.publicId)
  // add the full URL to a standard HTML5 video element
  return <img src={imageSource} alt={props.alt} className={styles.thumb} />
}

const Button = styled.button`
  width: 100px;
  height: 100px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  text-align:center;
  float:left;
  margin:10px 5px 10px 10px;
  padding:5px;
  &:hover {
    background-color: #ccc;
  }
  &.selected {
    background-color: #91AEC4;

  }
`;

const Item = (props) => {
  const [selected, setSelected] = useState(photoArray[0]);
  console.log("D");
    const item = useSelector(state => selectItemById(state,2));
    console.log(item)

    //const items = useSelector(state => selectAllItems(state))
    //console.log(items)

    //const amount = useSelector(state => getAmountInCart(state))
    //console.log(amount)

    //const total = useSelector(state => getTotalPrice(state))
    //console.log(total)
  useEffect(() => {
    
  }, [selected]); // Only re-run the effect if count changes
  return (
    <div className={styles.wrapp}>
      <div className={styles.current}>
        <Image publicId={selected.publicId} alt={selected.alt} current={true} />
      </div>
      <div className={styles.thumbnail}>
        {photoArray.map((photo) => (
          <Button className={selected.publicId === photo.publicId ? "selected" : ""} onClick={() => setSelected(photo)}>
             <Thumb
                key={photo.publicId}
                publicId={photo.publicId}
                alt={photo.alt}
              />
          </Button>
        ))}
      </div>
    </div>

  );
}


export default Item;
import React from 'react';

const ProductItem = (props) => {
    return(
      <li className={props.className} onClick={props.toggleItem}>{props.title}</li>
    )
};

export default ProductItem;

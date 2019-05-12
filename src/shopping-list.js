import React from 'react';

const ShoppingList = (props) => {
    return(
      <li className={props.className} onClick={props.toggleItem}>{props.title}</li>
    )
};

export default ShoppingList;

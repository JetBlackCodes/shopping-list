import React from 'react';

const ShoppingList = (props) => {
    return(
      <li taken={props.taken} onClick={props.toggleItem}>{props.title}</li>
    )
};

export default ShoppingList;

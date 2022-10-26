import React from 'react';
import Item from "../Productos/Item";
import "./itemList.css";

function ItemList(props) {

    return (
        <div>    
            
        <div className = "cards-container">
            {props.data.map((item) => {

            return (
                
                <Item
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    detail={item.detail}
                    price={item.price}
                    category={item.category}
                />
            );
            })}
        </div>
        </div>
    )
}

export default ItemList;
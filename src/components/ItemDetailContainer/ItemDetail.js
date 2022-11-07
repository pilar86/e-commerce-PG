import React, { useContext, useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom'
import './itemDetail.css';

function ItemDetail({ data }) {

  const [item, setItem ] = useState(false)

  const { addItem } = useContext(cartContext);

  const onAddToCart = (qantty) => {
    addItem(data, qantty)
    setItem(true);
  }

  return (
    <div className="card-info">

      <img src={data.img} alt={data.title}/>
      <h4>{data.title}</h4>
      <h4>{data.detail}</h4>
      <h4>${data.price}</h4>

      {
        item === false ? <ItemCount qantty={1} stock={data.stock} onAddToCart={onAddToCart}/> : <Link to={"/cartView"}><button>Ir al carrito</button></Link>
        
      }
      <Link to={"/home"}><button>Seguir Comprando</button></Link>
    
    </div>
  );
}

export default ItemDetail;


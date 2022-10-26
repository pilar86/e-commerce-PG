import React, { useContext, useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom'

function ItemDetail({ data }) {

  const [item, setItem ] = useState(false)

  //queremos conectar al context con useContext
  const { addItem } = useContext(cartContext);

  const onAddToCart = (qantty) => {
    addItem(data, qantty)
    setItem(true);
  }

  return (
    <div className="CardDetail">

      <img src={data.img} alt={data.title}/>
      <h4>{data.title}</h4>
      <h4>{data.detail}</h4>
      <h4>${data.price}</h4>

      {
        item === false ? <ItemCount qantty={1} stock={10} onAddToCart={onAddToCart}/> : <Link to={"/cart"}><button>Ir al carrito</button></Link>}
    </div>
  );
}

export default ItemDetail;

/*
 <ItemCount initial={1} stock={data.stock} onAddToCart={handleAddToCart}/>              
 
 desafio anterior: // estado para guardar el valor del "count" del ItemCount 
 (ahora cambia)
              const handleAddToCart = (count) => {
              alert(`Agregaste al carrito ${count} productos.`)
                  setHandleEstado(true)

{ handleEstado === false? <ItemCount initial={1} stock={data.stock} onAddToCart={handleAddToCart}/>:<Link to="/Cart">Finalizar Compra</Link>}          
 */

/*const [handleEstado, setHandleEstado] = useState(false)

function handleAddToCart(count) {
  addItem(data, count)
} */
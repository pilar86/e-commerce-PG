import React, {useState} from 'react';
import "./itemCount.css";


export default function ItemCount({ stock, qantty,onAddToCart})  {

    const [count, setCount] = useState(qantty);
    
    const handleAdd = () => {
        setCount(count + 1);   
    }

    const handleSubstract = () => {
        setCount(count - 1);
     }

    return (
        <div className="counter">

            <button disabled= {count >= stock} onClick={handleAdd}>+</button>

            <span>{count}</span>

            <button disabled={count <= 1} onClick={handleSubstract}>-</button>

            <div className="btnAddToCart">          
                <button disabled = {stock <= 0} onClick={() => onAddToCart(count)}>Agregar al Carrito</button>        
            </div>         
        
        </div>
    );
}



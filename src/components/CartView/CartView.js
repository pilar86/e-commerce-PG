import React from 'react';
import { useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./cartView.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";



function CartView() {

    const context = useContext(cartContext);
    const { cart, deleteItem, emptyCart, getTotalPrice } = context;
   
    let carritoVacio = cart.length === 0;

    if (carritoVacio){
       return <div><h4>Tu Carrito está Vacío</h4></div>;
    }

    return (

        <div className="cartView-container" >
            { cart.map ( item => (
                
                <div key={item.id} className="cartView" >
                    
                    <img src={item.img} alt={item.title}/>          
                    <h4>{item.title}</h4>
                    <h4>Unidad: ${item.price}</h4>
                    <h4>Cantidad: {item.qantty}</h4>
                    <h4>Subtotal=${item.price * item.qantty}</h4>
                    <button className="button-delete" onClick = {()=> deleteItem(item.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
                
                </div>
            ))}

            <div className="total-carrito">
                <h4>Total de Compra: ${getTotalPrice()}</h4>
            </div>

            <div className="total-cartView">
                <button className="empty-cart" onClick={emptyCart}>Vaciar Carrito</button>
              
                
                
            </div>
            <CheckoutForm />
        </div>
    );
}


export default CartView;
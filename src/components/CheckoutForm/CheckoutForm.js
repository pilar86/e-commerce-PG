import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import { buyOrder } from "../../services/firestore";

import "./checkoutForm.css";

function CheckoutForm() {
    const [dataForm, setDataForm] = useState({
        name:"",
        phone:"",
        email:""
    });

    const navigate = useNavigate();
    const context = useContext(cartContext)
    const { cart, getTotalPrice } = context;
    
    function handleCheckout(event) {
        event.preventDefault(); 


        
        const orderData ={
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total:getTotalPrice(),
        };
        buyOrder(orderData).then((orderid)=> {
            navigate(`/checkout/${orderid}`)
        });
    }

    function inputChangeHandler(event){
        let inputName = event.target.name;
        let value = event.target.value;

        const newDataForm = {...dataForm};
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }


    return (
        <div className="form-container">
            <form onSubmit={handleCheckout}>
                <div className="form-item">
                    <label htmlFor="name">Nombre</label>
                    <input
                        value={dataForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Ingrese su Nombre"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                        value={dataForm.phone}
                        onChange={inputChangeHandler}
                        name="phone"
                        type="text"
                        placeholder="Ingrese su Teléfono"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        value={dataForm.email}
                        onChange={inputChangeHandler}
                        name="email"
                        type="text"
                        placeholder="ingrese su Email"
                        required
                    />
                </div>
            </form>
            <button disabled={!dataForm.name || !dataForm.phone || !dataForm.email} className="finalizar-compra" onClick = {handleCheckout}>Finalizar Compra</button> 
            
        </div>
    )
    }

export default CheckoutForm;
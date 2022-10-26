import React from 'react';
import "./Item.css";
import { Link } from "react-router-dom";


function Item(props) {
    let { img, title, price } = props;
    
    const urlDetalle = `/body/${props.id}`;

    
    return(
        <div className="card">
            <div className="card-img">
                <img src={img} alt="card img"></img>
            </div>
            <div className="card-detail">
                <h3>{title}</h3>
                <h3>${price}</h3>
            
            <Link to={urlDetalle}> 
                <button className= "ver-mas">Ver Más</button>
            </Link> 
            </div>
        </div>         
    );
}

export default Item;

/* 
     <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <ItemCount initial={1} stock={15} onAdd={onAdd}/>
        <ItemCount initial={1} stock={0} onAdd={onAdd}/>

        */
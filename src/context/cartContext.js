import React, { useState, createContext } from "react";
// 1- Se inicializa CreateContext

 const cartContext = createContext()

// 2- Se define nuestro Provider

export default function CartContextProvider({children}) {
        const [cart, setCart] = useState([]);

    const isInCart = (id) => {
    return cart.some(data => data.id === id)
    }    


    const addItem = (item, qantty) => {

        const newItem = {
            ...item,
            qantty
        } 
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(data => data.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart] 
            auxArray[productIndex].qantty += qantty
            setCart(auxArray)
        } else {
            setCart([...cart, newItem])
        }
    }       
       

    

    const emptyCart = () => {
        return setCart([])
    }

    const deleteItem = (id) => {
        return setCart(cart.filter(data => data.id !== id))
    }

    const getItemQantty = () => {
        return cart.reduce((acc, data) => acc += data.qantty, 0)
    }

    const getTotalPrice = () => {
        return cart.reduce((acc, data) => acc += data.price * data.qantty, 0)
    }

    return(

        <cartContext.Provider value ={{cart, addItem, isInCart, emptyCart, deleteItem, getItemQantty, getTotalPrice}}>{children}</cartContext.Provider>
     );
}

export  { cartContext }

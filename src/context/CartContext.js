import React from 'react';
import {useState} from 'react'

export const CartContext = React.createContext();

export const CartProvider =({children})=> {
    const [productCartList, setProductCartList] = useState([])

    const addItem = (id ,name, image, price, quantity) => {
        console.log('name', name, 'quantity', quantity)
        const newProduct = {
            id: id,
            name : name,
            image: image,
            price: price,
            quantity 
        }
        console.log("newProduct", newProduct);
        const newArreglo = [...productCartList];
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);
    }

    const removeItem = (id) =>{
        console.log('itemId', id)
        const newArreglo = productCartList.filter(product=>product.id !== id);
        setProductCartList(newArreglo);
    }
    const clear =()=>{
        setProductCartList([]);
    }
    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}


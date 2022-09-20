import React from 'react';
import {useState, useEffect} from 'react'

export const CartContext = React.createContext();

export const CartProvider =({children})=> {
    //// ayuda
    const [productCartList, setProductCartList] = useState([])

    const [productQuantity, setProductQuantity] = useState(0);

    /////ayuda
    const getProductQuantity = ()=>{
        let quantity = 0;
        productCartList.forEach(product=>(quantity += product.quantity));
        setProductQuantity(quantity);
    }
    useEffect(()=>{
        getProductQuantity()},
        [productCartList]);

    const addItem = (product) => {
       ///ayuda
        if (isInCart(product.id)){
            const productInArray = productCartList.find(prod => prod.id === product.id);
            const foundProductIndex = productCartList.indexOf(productInArray);
            /////////////////
            const auxProducts = [...productCartList] 
            auxProducts[foundProductIndex].quantity += product.quantity
            setProductCartList(auxProducts)
        }else {
            setProductCartList([...productCartList,product])
        }
    }
/// id del mock ////
    const isInCart =(id)=>{
        return productCartList.some(product=>product.id === id)
    }

    const removeItem = (id) =>{
        const newArreglo = productCartList.filter(product=>product.id !== id);
        setProductCartList(newArreglo);
    }
    const clear =()=>{
        setProductQuantity(0);
        setProductCartList([]);
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem,clear}}>
            {children}
        </CartContext.Provider>
    )
}


import React from 'react';
import {useState} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = React.createContext();

export const CartProvider =({children})=> {
    //// ayuda
    const [productCartList, setProductCartList] = useState([])

    const addItem = (item, quantity) => {
       ///ayuda
        const newProduct = {
        ...item,
        quantity
        }
        if (isInCart(item.id)){
            const productPos = productCartList.findIndex(product => product.id === item.id);
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity = newArreglo[productPos].quantity + quantity
            newArreglo[productPos].quantityPrice = newArreglo[productPos].quantity * newArreglo[productPos].price;
            setProductCartList(newArreglo)
        }else {
            const newArreglo = [...productCartList];
            newProduct.quantityPrice = newProduct.quantity * newProduct.price;
            newArreglo.push(newProduct);
            setProductCartList(newArreglo);
        }
    }
    const isInCart =(id)=>{
        const productExist = productCartList.some(product=>product.id === id)
        return productExist;
    }
    

    const removeToast = () => toast.info("Removed product ❌!",
    {
        position: "bottom-right",
        autoClose: 1500,
        theme: "colored",
    });

    const emptyToast = () => toast.warn("Empty cart 🕳️!",
    {
        position: "bottom-right",
        autoClose: 1500,
        theme: "colored",
    });


    const removeItem = (id) =>{

        const newArreglo = productCartList.filter(product=>product.id !== id);
        setProductCartList(newArreglo);
        removeToast()
    }
    const clear =()=>{
        setProductCartList([]);
        emptyToast()
    }
    const getTotalPrice =()=>{
        // after context, 00:35
        const totalPrice = productCartList.reduce((acc, item)=>acc + item.quantityPrice, 0);
        return totalPrice;
    }
    const getTotalProducts =()=>{
        const totalProducts = productCartList.reduce((acc, item)=>acc + item.quantity, 0);
        return totalProducts;

    }
    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem,clear,
        isInCart, getTotalPrice, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}


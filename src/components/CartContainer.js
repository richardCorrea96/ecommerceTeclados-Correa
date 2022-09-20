import {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import './NavBar/styles.css'

const CartContainer = () => {
    const {productCartList, removeItem, clear} = useContext(CartContext);

    return (
        <>
        <div className="opiti">
            {productCartList.map(product =>(
                <div key={product.id} className="xd">
                    <div className="nombreImagen">
                        <img className="imgInCart" src={product.image} alt={product.name}/>
                        <p>{product.name}</p>
                    </div>

                    <div>
                        <p>Price: $ {product.price}</p>
                    </div>

                    <div>
                    <p>Quantity: {product.quantity}</p> 
                    </div>

                    <div >
                        <button className="removeItem" onClick={()=>removeItem(product.id)}> x </button>
                    </div>
                </div>
                ))}
        </div>

        <div className="botonescart">
            <button className="clearCartBtn" onClick={clear}>Clear cart</button>
            <button className="checkOutBtn" on>Check out</button>
        </div>
        </>
    )
}

export default CartContainer
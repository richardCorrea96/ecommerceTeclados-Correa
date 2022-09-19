import {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import './NavBar/styles.css'

const CartContainer = () => {
    const {productCartList, removeItem, clear} = useContext(CartContext);

    return (
        <>
        <div className="opiti">
            {productCartList.map(item =>(
                
                <div className="xd">
                    <div className="nombreImagen">
                        <img className="imgInCart" src={item.image}/>
                        <p>{item.name}</p>
                    </div>

                    <div>
                        <p>Price: $ {item.price}</p>
                    </div>

                    <div>
                    <p>Quantity: {item.quantity}</p> 
                    </div>

                    <div >
                        <button className="removeItem" onClick={()=>removeItem(item.id)}> x </button>
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
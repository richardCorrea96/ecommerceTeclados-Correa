import {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import './NavBar/styles.css';
import {Link} from 'react-router-dom';

const CartContainer = () => {
    const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);
    return (
        <div>
            {
                productCartList.length > 0 ? <><div className="opiti">
                {productCartList.map(item =>(
                    <div key={item.id} className="xd">
                        <div className="nombreImagen">
                            <img className="imgInCart" src={item.image} alt={item.name}/>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <p>Price by unit: $ {item.price}</p>
                        </div>
                        <div>
                        <p>Quantity: {item.quantity}</p> 
                        </div>
                        <div>
                        <p>Total: $ {item.quantityPrice}</p> 
                        </div>
                        <div >
                            <button className="removeItem" onClick={()=>removeItem(item.id)}> x </button>
                        </div>
                    </div>
                    ))}
            </div>
            <p className="totalPrice">Total Price: $ {getTotalPrice()}</p>

            <div className="botonescart">

                <button className="clearCartBtn" onClick={clear}>Clear cart</button>
                <button className="checkOutBtn" on>Check out</button>
            </div> </> :
            <div className="noItems">
                <p>Your cart is currently empty.</p>
                <Link to="/"><button className="continueShopping">Continue Shopping</button></Link>
            </div>  

            }
            
        </div>
    )
}

export default CartContainer
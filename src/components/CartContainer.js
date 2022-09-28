import {useContext, useState} from 'react';
import { CartContext } from '../context/CartContext';
import './NavBar/styles.css';
import {Link} from 'react-router-dom';
import {db} from '../utils/firebase';
import {collection, addDoc} from 'firebase/firestore'

const CartContainer = () => {
    const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("")

    const sendOrder = (event)=>{
        event.preventDefault();
        // console.log("orden enviada pá", event)
        const order = {
            //que el usuario no ponga numeros en nombre
            // y no ponga letras en el numeros
            buyer:{ 
            name: event.target[0].value,
            phone: event.target[1].value, 
            email: event.target[2].value 
            },
            items: productCartList,
            total: getTotalPrice()
        }
        console.log('order', order)
        // creo la refe de donde se va a guardar el documento
        const queryRef = collection(db, "orders");
        //crear el documento
        
        addDoc(queryRef, order).then(response=>{
            console.log("response", response);
            setIdOrder(response.id);
        })
    }
//para entregable final:
            //existe orden carrito vacio.... id: confirmar la orden
            //carrito esta vacio, no existe la orden.... carrito vacio y boton

    return (
        <div>
            {idOrder ? <div>
                        <p>orden creada, ID: {idOrder}</p>
                        <Link to="/"><button onClick={clear} className="continueShopping">Continue Shopping</button></Link>
                        </div> :
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
            </div> 
            
            <form onSubmit={sendOrder}>
                            <label>Nombre: </label>
                            <input type='text'/>
                            <label>Telefono: </label>
                            <input type='text'/>
                            <label>Email: </label>
                            <input type='email'/>
                            <button type='submit'>Enviar Orden</button>
                        </form>
            </> :
            <div className="noItems">
                <p>Your cart is currently empty.</p>
                <Link to="/"><button className="continueShopping">Continue Shopping</button></Link>
            </div>  

            }
            

        </div>
    )
}

export default CartContainer
import {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import '../../styles.css';
import {Link} from 'react-router-dom';
import {db} from '../../utils/firebase';
import {collection, addDoc} from 'firebase/firestore'
import Swal from 'sweetalert2'



const CartContainer = () => {
    const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);

    const [ checkOut, setCheckOut] = useState(false)
    const checkOutConfirm = ()=>{
        setCheckOut(!checkOut);
    }
    
    const [idOrder, setIdOrder] = useState("")

    const sendOrder = (event)=>{
        event.preventDefault();
        const order = {
            //que el usuario no ponga numeros en nombre
            // y no ponga letras en el numeros
            buyer:{ 
            name: event.target[0].value,
            lastName: event.target[1].value, 
            email: event.target[2].value ,
            adress: event.target[3].value,
            city: event.target[4].value, 
            zipPostal: event.target[5].value, 
            Telephone: event.target[2].value 


            },
            items: productCartList,
            total: getTotalPrice()
        }
        // creo la refe de donde se va a guardar el documento
        const queryRef = collection(db, "orders");
        //crear el documento
        
        addDoc(queryRef, order).then(response=>{
            setIdOrder(response.id);
        })
    }
//para entregable final:
            //existe orden carrito vacio.... id: confirmar la orden
            //carrito esta vacio, no existe la orden.... carrito vacio y boton

            return (
                <div>
                    {
                    productCartList.length == 0 ?
                            <div className="noItems">
                                <p>Your cart is currently empty.</p>
                                <Link to="/">
                                    <button className="continueShopping">Continue Shopping</button>                                </Link>
                            </div>  :
                        
                        checkOut == false ?
                        <>
                        <div className="productContainer">
                        {productCartList.map(item =>(
                            <div key={item.id} className="inCart">
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
                        <button onClick={checkOutConfirm} className="checkOutBtn" on>Check out</button>
                    </div> 
                    </>
                    :
                    idOrder ? 
                    <div>
                    {   Swal.fire({
                        fontSize: '20',
                        icon: 'success',
                        iconColor:' #88C0D0',
                        title: 'Thanks for your purchase ! 😊',
                        text: `Order ID: ${idOrder}`,
                        background: '#ECEFF4',
                        backdrop: 'rgb(94, 129, 172, 0.5)',
                        color: '#5E81AC',
                        allowOutsideClick: false,
                        confirmButtonText:'Continue Shopping',
                        altActionButtonColor: 'red',
                        confirmButtonColor: '#5e81ace4',
                        borderRadius: '100',
                    }).then(()=>{
                        window.location = "http://localhost:3000/";
                    })}
                    </div>
                    :



                    <div className="form-container">
                                                    <form onSubmit={sendOrder}> 
                                <div className="row">
                                    <div className="column">
                                        <label>Name*: </label> <input pattern="[a-zA-Z]*" 
                                        oninvalid='Please enter on alphabets only.'
                                        type='text' placeholder="John" name="fName" required />
                                    </div>
                                    <div className="column">
                                        <label>Last Name*: </label> <input  pattern="[a-zA-Z]*"
                                        oninvalid="setCustomValidity('Please enter on alphabets only. ')"
                                        type='text' placeholder="Doe" name="fLastName" required/>
                                    </div>
                                </div>
                                <div className="column">
                                    <label>Email*: </label> <input type='email' placeholder="johndoe@gmail.com" name="fEmail" required/>
                                </div>
                                <div className="column">
                                    <label>Adress*: </label> <input type='text'placeholder="Fake Street 123" name="fAdress" required/>
                                </div>
                                <div className="row">
                                    <div className="column">
                                        <label>City*: </label> <input pattern="[a-zA-Z]*" type='text' placeholder="Narnia" name="fCity" required/>
                                    </div>
                                    <div className="column">
                                        <label>Zip/Postal Code*: </label> <input type='number' placeholder="555555" name="fZipCode" required/>
                                    </div>
                                </div>
                                <div className="column">
                                    <label>Telephone: </label> <input type='number' placeholder="+5 555 555"/>
                                </div>
                                <button className="completOrder-btn" type='submit'>Complete Order</button> 
                            </form> 
                    </div>
}
                </div>
            )
}

export default CartContainer

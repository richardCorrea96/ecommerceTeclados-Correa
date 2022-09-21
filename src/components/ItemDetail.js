import './NavBar/styles.css'
import ItemCount from './ItemCount'
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';


//correccion 


const ItemDetail = (item) => {

    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);
    
    const onAdd = (dato) =>{
        console.log(`hizo click ${dato}`)
        setContador(dato)
        addItem(item, dato)
    }
    return (
            <>
            <div className='ItemImgDetail'>
                <img className='ImgDetail' src={item.image} alt={item.name}/>
            </div>
            <div className='ItemDetail'>
                <p className='nameDetail'>{item.name}</p>
                <p className='priceDetail'>$ {item.price}</p>
                <p className='descDetail'>{item.fullDesc}</p>
                {
                    contador ?
                    <div className="se-agrego-al-carrito">
                        <Link to="/"> <button className='seguir-comprando'>Continue Shopping</button></Link>
                        <Link to="/cart"><button className='ir-al-carrito'>Go to cart</button></Link>
                    </div> :
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                }
            </div>
            </>
);
};
export default ItemDetail;
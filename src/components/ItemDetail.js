import './NavBar/styles.css'
import ItemCount from './ItemCount'
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';


//correccion 


const ItemDetail = ({id ,name, image, price, fullDesc, stock}) => {

    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);
    
    const onAdd = (dato) =>{
        console.log(`hizo click ${dato}`)
        setContador(dato)
        addItem(id ,name, image, price, dato)
    }
    return (
            <>
            <div className='ItemImgDetail'>
                <img className='ImgDetail' src={image} alt={name}/>
            </div>
            <div className='ItemDetail'>
                <p className='nameDetail'>{name}</p>
                <p className='priceDetail'>{price}</p>
                <p className='descDetail'>{fullDesc}</p>
                {
                    contador ?
                    <div className="se-agrego-al-carrito">
                        <Link to="/"> <button className='seguir-comprando'>Seguir comprando</button></Link>
                        <Link to="/cart"><button className='ir-al-carrito'>Ir al carrito</button></Link>
                    </div> :
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                }
                
            </div>
            </>
);
};
export default ItemDetail;
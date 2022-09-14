import './NavBar/styles.css'
import ItemCount from './ItemCount'
import {useState} from 'react';
import {Link} from 'react-router-dom'


//correccion 


const ItemDetail = ({name, image, price, fullDesc, stock}) => {

    const [contador, setContador] = useState(0);
    
    const onAdd = (dato) =>{
        console.log(`hizo click ${dato}`)
        setContador(dato)
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
                        <button className='ir-al-carrito'>Ir al carrito</button>
                    </div> :
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                }
                
            </div>
            </>
);
};
export default ItemDetail;
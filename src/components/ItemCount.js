import {useState} from 'react';
import './NavBar/styles.css'

const ItemCount = ({stock, initial, onAdd}) => { 

const [cantidad, setCantidad] = useState(initial);

    const sumaItem = () =>
        cantidad < stock ?  setCantidad(cantidad + 1) :  setCantidad(stock);
    const restaItem = () =>
        cantidad > initial ? setCantidad(cantidad - 1) : setCantidad(initial);
    const confirm = () => 
        cantidad > 0 ? onAdd(cantidad) : console.log(`sin stock`);
    return (
        <div className="itemCount-container">

            <div className ="item-count">
                <button className="btn-count" onClick = {restaItem}> - </button>
                    <p className="contador">{cantidad}</p>
                <button className="btn-count" onClick = {sumaItem}> + </button>
            </div>

            <div className="item-add">
                <button className="btn-add" onClick = {() => confirm(cantidad)}>Add to cart</button>
            </div>

        </div>
    ) 
}

export default ItemCount;
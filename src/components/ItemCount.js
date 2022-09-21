import {useState} from 'react';
import './NavBar/styles.css'

const ItemCount = ({stock, initial, onAdd}) => { 

const [cantidad, setCantidad] = useState(initial);

    const sumaItem = () =>
        cantidad < stock ?  setCantidad(cantidad + 1) :  setCantidad(stock);
    const restaItem = () =>
        cantidad > initial ? setCantidad(cantidad - 1) : setCantidad(initial);

    return (

        <div className="itemCount-container">
            <div className ="item-count">
                <div className="item-count-contador">
                    <p className="contador">{cantidad}</p>
                </div>
                <div className="item-count-btns">
                    <button className="btn-count-suma" onClick = {sumaItem}> ▲ </button>
                    <button className="btn-count-resta" onClick = {restaItem}> ▼ </button>
                </div>
            </div>

            <div className="item-add">
                <button className="btn-add" onClick = {()=>onAdd(cantidad)}>Add to cart</button>
            </div>
        </div>
    ) 
}

export default ItemCount;
import {useState} from 'react';
import './NavBar/styles.css'

const ItemCount = ({stock}) =>{ 

const [cantidad, setCantidad] = useState(0);

    const sumaItem = () =>
        cantidad === stock ? setCantidad(stock) : setCantidad(cantidad + 1);
    const restaItem = () =>
        cantidad > 0 ? setCantidad(cantidad - 1) : setCantidad(0);
    return (
        <div className="itemCount-container">

            <div className="item-name">
                <h3>Product name:</h3>
            </div>

            <div className ="item-count">
                <button className="btn-count" onClick = {restaItem}> - </button>
                    <p className="contador">{cantidad}</p>
                <button className="btn-count" onClick = {sumaItem}> + </button>
            </div>

            <div className="item-add">
                <button className="btn-add">Add to cart</button>
            </div>

        </div>
    )
}

export default ItemCount;
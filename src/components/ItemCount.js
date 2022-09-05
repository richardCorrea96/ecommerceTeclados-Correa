// import {useState} from 'react';
// import './NavBar/styles.css'

// const ItemCount = ({stock,initial={1}, onAdd={onAdd}}) =>{ 

// const [cantidad, setCantidad] = useState(initial);

//     const sumaItem = () =>
//         cantidad < stock ? setCantidad(stock) : setCantidad(cantidad + 1);
//     const restaItem = () =>
//         cantidad > initial ? setCantidad(cantidad - 1) : setCantidad(0);
//     return (
//         <div className="itemCount-container">

//             <div className ="item-count">
//                 <button className="btn-count" onClick = {restaItem}> - </button>
//                     <p className="contador">{cantidad}</p>
//                 <button className="btn-count" onClick = {sumaItem}> + </button>
//             </div>

//             <div className="item-add">
//                 <button className="btn-add">Add to cart</button>
//             </div>

//         </div>
//     )
// }

// export default ItemCount;
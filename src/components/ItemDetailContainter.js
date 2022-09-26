import data from "./mock-data";
import {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail";
import './NavBar/styles.css'
import {useParams} from 'react-router-dom'
import {db} from '../utils/firebase'
import {doc, getDoc} from 'firebase/firestore'

const ItemDetailContainter = () => {
    const {productId} = useParams();
    const [item, setItem] = useState();
    
    // const getItem =(id)=>{
    //     return new Promise ((resolve, reject) => {
    //         const producto = data.find(item=>item.id === parseInt(id));
    //         setTimeout(() => {
    //             resolve(producto);
    //         }, 1000)
    //     })
    // } 
     useEffect(() => {
         const getProducto = async() => {
            //creo la referencia del producto
            const queryRef = doc(db,"items",productId);
            //solicitud a firebase
            const response = await getDoc(queryRef);
            const newItem = {
                id: response.id,
                ...response.data(),
            }
            setItem(newItem);
        }
         getProducto();
     }, [productId]);

    return (
        <div id='ItemDetailContainter'>
            {/*pasé por props a ItemDetail haciendo spread  en vez de igualarlo*/}
            <ItemDetail itemDetail {...item}/>
        </div>
    );
};
export default ItemDetailContainter;
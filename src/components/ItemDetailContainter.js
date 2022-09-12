import data from "./mock-data";
import {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail";
import './NavBar/styles.css'
import {useParams} from 'react-router-dom'

const ItemDetailContainter = () => {
    const {productId} = useParams();

    const [item, setItem] = useState();
    
    const getItem =(id)=>{
        return new Promise ((resolve, reject) => {
            const producto = data.find(item=>item.id === parseInt(id));
            setTimeout(() => {
                resolve(producto);
            }, 1000)
        })
    } 
    useEffect(() => {
        const getProducto = async() => {
            const producto = await getItem(productId);
            setItem(producto);
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
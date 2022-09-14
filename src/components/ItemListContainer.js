// import ItemCount from './ItemCount'
import data from './mock-data';
import {useState, useEffect} from 'react';
import ItemList from './ItemList';
import './NavBar/styles.css'
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {
    const {categoryId} = useParams();
    console.log('categoryId', categoryId);

    const [items, setItems]=useState([]);

    const getData = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000)
    })
    useEffect(() => {
        getData.then((result) => {
            if(categoryId){
                const newProducts = result.filter(producto => producto.category === categoryId)
                setItems(newProducts);
            }else{
                setItems(result)
            }
        })
    }, [categoryId]);

    return (
    <div id='ItemListContainer'>
        {items.length > 0 ? 
        (<ItemList itemsList ={items}/>):
        (<div className='Loading'>Loading...</div>)}
    </div>
    );
}
export default ItemListContainer;
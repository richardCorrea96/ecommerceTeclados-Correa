// import ItemCount from './ItemCount'
import data from './mock-data';
import {useState, useEffect} from 'react';
import ItemList from './ItemList';
import './NavBar/styles.css'

const ItemListContainer = () => {
    const [items, setItems]=useState([]);
    const getData = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
    })
    useEffect(() => {
        getData.then((result) => {
            setItems(result);
            console.log(result);
        })
    }, [])
    return (
        
    
    <div id='ItemListContainer'>
        {items.length > 0 ? 
        (<ItemList itemsList={items}/>):
        (<div className='Loading'>Loading...</div>)}
    </div>
    
    );
};


export default ItemListContainer;
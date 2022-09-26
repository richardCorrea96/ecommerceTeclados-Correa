// import ItemCount from './ItemCount'
// import data from './mock-data';
import {useState, useEffect} from 'react';
import ItemList from './ItemList';
import './NavBar/styles.css'
import {useParams} from 'react-router-dom'
import {db} from '../utils/firebase'
import {collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
    const {categoryId} = useParams();
    console.log('categoryId', categoryId);
    const [items, setItems]=useState([]);

    // const getData = new Promise ((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(data);
    //     }, 1000)
    // })
    // useEffect(() => {
    //     getData.then((result) => {
    //         if(categoryId){
    //             const newProducts = result.filter(producto => producto.category === categoryId)
    //             setItems(newProducts);
    //         }else{
    //             setItems(result)
    //         }
    //     })
    // }, [categoryId]);

        useEffect(() => {
            //after firebase
            //creo una referencia de la coleccion
            const queryRef = !categoryId ? collection(db,"items") :
            query(collection(db, "items"),where("category","==",categoryId))
                getDocs(queryRef).then(response =>{
                    const resultados = response.docs.map(doc =>{
                        const newItem = {
                            id: doc.id,
                            ...doc.data(),
                        }
                        return newItem;
                    })
                    console.log(resultados)
                    setItems(resultados)
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
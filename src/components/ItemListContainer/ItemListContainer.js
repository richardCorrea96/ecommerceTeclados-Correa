// import ItemCount from './ItemCount'
// import data from './mock-data';
import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import '../../styles.css'
import {useParams} from 'react-router-dom'
import {db} from '../../utils/firebase'
import {collection, getDocs, query, where } from 'firebase/firestore'

import Title from '../Title/Title'

    const ItemListContainer = () => {
        const {categoryId} = useParams();
        const [items, setItems]=useState([]);

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
                    setItems(resultados)
                })

        }, [categoryId]);

    const titleMayusq = (title)=>{
        return title[0].toUpperCase() + title.slice(1);
    }

    return (
        <>
        <div className="categoryTitle-container">
            <h2 className="categoryTitle">
                { 
                    categoryId ? 
                    <Title title={titleMayusq(categoryId)}/>
                    :
                    <Title title={'All Products'}/>
                }
            </h2>
        </div>
        <div id='ItemListContainer'>
            {items.length > 0 ?
            (<ItemList itemsList ={items}/>):
            (<div className='Loading'>Loading...</div>)}
        </div>
    </>
    );
}
export default ItemListContainer;
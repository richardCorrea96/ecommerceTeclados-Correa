import ItemCount from './ItemCount'
const ItemListContainer = ({greeting}) => {
    return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount stock={10}></ItemCount>
    </div>
    
    )
}

export default ItemListContainer;
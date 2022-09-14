import Item from './NavBar/Item';
const ItemList = ({itemsList}) => {
    

    return (
        <>
        {itemsList.map((producto) => {
            return <Item key={producto.id} {...producto}/>
            })}
        </>
);
};

export default ItemList;

import Item from "./Item";
const ItemList = ({itemsList}) => {
    

    return (
        <>

        {itemsList.map((producto) => {
            return <Item
            key={producto.id}
            //correccion
            {...producto}
            />
            })}
        </>
);
};

export default ItemList;

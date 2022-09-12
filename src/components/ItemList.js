import Item from "./Item";
const ItemList = ({itemsList}) => {
    

    return (
        <>

        {itemsList.map((producto) => {
            return <Item
            key={producto.id}
            name={producto.name}
            description={producto.shortDesc}
            price={producto.price}
            image={producto.image} 
            />
            })}
        </>
);
};

export default ItemList;

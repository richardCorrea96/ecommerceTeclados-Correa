import './NavBar/styles.css'

const ItemDetail = (itemDetail) => {

    const {name, description,image, price} = itemDetail;
    return (
        <div>
        <img  src={image} alt={name}/>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
    </div>
);
};
export default ItemDetail;
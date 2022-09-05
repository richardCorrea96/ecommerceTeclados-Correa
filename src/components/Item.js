//esto es lo que se genera por cada uno de los productos
import './NavBar/styles.css'


const Item = ({name, description,image, price}) => {
    return (
    <div>
        <img className="ImgProduct" src={image} alt={name}/>
        <p className="NameProduct">{name}</p>
        <p className="DescProduct">{description}</p>
        <p className="PriceProduct">{price}</p>
    </div>
    );
};

export default Item;
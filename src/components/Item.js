//esto es lo que se genera por cada uno de los productos
import './NavBar/styles.css'

const Item = ({name, shortDesc,image, price}) => {
    return (
    <div>
        <img className="ImgProduct" src={image} alt={name}/>
        <p className="NameProduct">{name}</p>
        <p className="DescProduct">{shortDesc}</p>
        <p className="PriceProduct">{price}</p>
    </div>
    );
};

export default Item;
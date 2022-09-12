//esto es lo que se genera por cada uno de los productos
import './NavBar/styles.css'
import {Link} from 'react-router-dom'
const Item = ({name, shortDesc,image, price, id}) => {
    return (
    <div>
        <Link to={`/item/${id}`}>
            <img className="ImgProduct" src={image} alt={name}/>
        </Link>
        <p className="NameProduct">{name}</p>
        <p className="DescProduct">{shortDesc}</p>
        <p className="PriceProduct">{price}</p>
    </div>
    );
};

export default Item;
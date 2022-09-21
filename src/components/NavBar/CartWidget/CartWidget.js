import cartIcon from '../../../imagenes/bag.png';
import '../styles.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from '../../../context/CartContext'

const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext)
    return (
        <div className="cartWidget">
            <div>
                {getTotalProducts() > 0 ? <p className="cartWidgetNumber">{getTotalProducts()}</p> : null}
            </div>
            <div>
                <Link to="/cart">
                    <button className='btn-navBar'>
                        <img className='img-btn-navBar' src={cartIcon} alt='carrito'/>
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default CartWidget;

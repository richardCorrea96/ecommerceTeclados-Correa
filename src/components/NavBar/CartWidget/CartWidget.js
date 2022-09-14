import cartIcon from '../../../imagenes/bag.png'
import '../styles.css'
const CartWidget = () => {
    return (
        <div>
            <button className='btn-navBar'>
                <img className='img-btn-navBar' src={cartIcon} alt='carrito'/>
            </button>
        </div>
    )
}

export default CartWidget;

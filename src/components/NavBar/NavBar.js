import './styles.css'
import logo from '../../imagenes/logo.png';
import userIcon from '../../imagenes/user.png'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (

        <div className='navbar-container'>
            <div className="navbar-left">
                <a href='#'><img className="logo-navBar" src={logo} alt="logo" /></a>
                <div>
                    <ul>
                        <li><a href="#">Keyboards</a></li>
                        <li><a href="#">Keycaps</a></li>
                        <li><a href="#">Switches</a></li>
                        <li><a href="#">Deskpads</a></li>
                        <li><a href="#">Supplies</a></li>
                        <li><a href="#">Merch!</a></li>
                    </ul>
                </div>
            </div>


            <div className="navbar-right">
                <div className="login-navBar">
                    <button className='btn-navBar'>
                        <img className='img-btn-navBar' src={userIcon} alt='user'/>
                    </button>
                </div>
                <div className="cart-navBar"> <CartWidget /> </div>
            </div>
        </div>
        

    )
}
export default NavBar;
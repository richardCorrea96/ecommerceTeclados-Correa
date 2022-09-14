import './styles.css'
import logo from '../../imagenes/logo.png';
import userIcon from '../../imagenes/user.png'
import CartWidget from './CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (

        <div className='navbar-container'>
            <div className="navbar-left">
                <Link to="/">
                    <img className="logo-navBar" src={logo} alt="logo" />
                </Link>
                <div>
                    <ul>
                        <li><NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"}
                        to="/category/keyboards">Keyboards</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"}
                        to="/category/keycaps">Keycaps</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"} 
                        to="/category/switches">Switches</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"} 
                        to="/category/deskpads">Deskpads</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"} 
                        to="/category/supplies">Supplies</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"} 
                        to="/category/merch">Merch!</NavLink></li>
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
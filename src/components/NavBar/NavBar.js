import '../../styles.css'
import logo from '../../images/logo.png';
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
                <Link to="/cart">                
                    <div className="cart-navBar"><CartWidget /> </div>
                </Link>
            </div>
        </div>
        

    )
}
export default NavBar;
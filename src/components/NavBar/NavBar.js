import logo from '../../logo.svg';
import './styles.css'
import CartWidget from './CartWidget'
import User from './User'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div> <img width={'100px'} src={logo} alt="logo" /> </div>
            <div>
                
                <ul>
                    <li><a href="#">Keyboards</a></li>
                    <li><a href="#">Keycaps</a></li>
                    <li><a href="#">Switches</a></li>
                    <li><a href="#">Deskpads</a></li>
                    <li><a href="#">Supplies</a></li>

                </ul>
            </div>
            <div className="navbar-right">
                <div className="login-navBar"> <User /> </div>
                <div className="cart-navBar"> <CartWidget /> </div>
            </div>
        </div>
        

    )
}
export default NavBar;
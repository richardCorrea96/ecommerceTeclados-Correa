import logo from '../../imagenes/logo.png';
import './styles.css'

const Logo = () => {
    return(
        <div> 
            <img className="logo-navBar" src={logo} alt="logo" />
        </div>
    )
}

export default Logo;